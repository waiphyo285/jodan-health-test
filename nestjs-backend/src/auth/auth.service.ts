import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

import { jwtConstants } from './constants';
import { PrismaService } from 'src/prisma/prisma.service';
import { Helpers } from 'src/utilities/helpers';

import { SystemUserSignInDto } from './dto/auth/system-user-signin.dto';
import { GuardUserSignInDto } from './dto/auth/guard-user-signin.dto';
import { SystemUserSignUpDto } from './dto/auth/system-user-signup.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  // Guard User
  async guardUserSignIn(guardUser: GuardUserSignInDto) {
    const { username, password } = guardUser;
    if (username && password) {
      const guardUsername = jwtConstants.guardUsername;
      const guardPassword = jwtConstants.guardPassword;

      if (username !== guardUsername || password !== guardPassword) {
        throw new UnauthorizedException('Credential not found');
      }

      const currentTime = Math.floor(Date.now() / 1000);

      const payload = {
        sub: 1,
        username: guardUsername,
        iat: currentTime,
        exp: currentTime + jwtConstants.expiresInSecond,
      };

      return {
        userInfo: { id: null, username: username, password: password },
        issuedAt: currentTime,
        expiresIn: this.getExpiredTime(payload.exp),
        accessToken: await this.jwtService.signAsync(payload),
      };
    }
  }

  // System User
  async systemUserSignUp(systemUser: SystemUserSignUpDto): Promise<any> {
    systemUser.password = await Helpers.hashPassword(systemUser.password);

    const createdSystemUser = await this.prisma.systemUser.create({
      data: systemUser,
    });

    delete createdSystemUser.password;

    const currentTime = Math.floor(Date.now() / 1000);

    const payload = {
      sub: createdSystemUser.id,
      username: createdSystemUser.username,
      iat: currentTime,
      exp: currentTime + jwtConstants.expiresInSecond,
    };

    return {
      userInfo: createdSystemUser,
      issuedAt: currentTime,
      expiresIn: this.getExpiredTime(payload.exp),
      accessToken: await this.jwtService.signAsync(payload),
    };
  }

  async systemUserSignIn(systemUser: SystemUserSignInDto) {
    const { username, password, hostname } = systemUser;
    const predictHostname: any[] = [];

    const isLocalhost = hostname.includes('localhost');

    if (hostname.includes('subdomain1')) {
      predictHostname.push('subdomain1');
    } else if (hostname.includes('subdomain2')) {
      predictHostname.push('subdomain2');
    } else if (hostname.includes('subdomainx')) {
      predictHostname.push('subdomaina', 'staffsubdomainb');
    }

    const user = await this.prisma.systemUser.findUnique({
      where: { username: username },
      include: {
        user_role: {
          select: {
            name: true,
          },
        },
      },
    });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      throw new UnauthorizedException('Credential not found');
    }

    if (!isLocalhost && !predictHostname.includes(user.user_role.name)) {
      throw new UnauthorizedException(
        'Unauthorized access to restricted areas',
      );
    }

    delete user.password;

    const currentTime = Math.floor(Date.now() / 1000);

    const payload = {
      sub: user.id,
      username: user.username,
      iat: currentTime,
      exp: currentTime + jwtConstants.expiresInSecond,
    };

    return {
      userInfo: user,
      issuedAt: currentTime,
      expiresIn: this.getExpiredTime(payload.exp),
      accessToken: await this.jwtService.signAsync(payload),
    };
  }

  // Common
  private getExpiredTime(expirationTime: number): number {
    const currentTime = Math.floor(Date.now() / 1000);
    return expirationTime - currentTime;
  }
}
