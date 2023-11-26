import { UnauthorizedException, Injectable } from '@nestjs/common';
import { Helpers } from 'src/utilities/helpers';

import { CreateSystemUserDto } from './dto/create-system-user.dto';
import { UpdateSystemUserDto } from './dto/update-system-user.dto';
import { ChangePasswordDto } from './dto/change-password.dto';
import { ResetPasswordDto } from './dto/reset-password.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { SystemUser } from '@prisma/client';

import * as bcrypt from 'bcrypt';

@Injectable()
export class SystemUserService {
  constructor(private readonly prisma: PrismaService) {}

  async findOne(username: string): Promise<any | undefined> {
    return this.prisma.systemUser.findUnique({
      where: { username: username },
    });
  }

  async getAllByFilter(query: any): Promise<SystemUser[]> {
    return await this.prisma.systemUser.findMany({
      where: query,
      include: {
        user_role: {
          select: {
            name: true,
          },
        },
      },
    });
  }

  async getByPagination(query: any): Promise<any> {
    const { filterObj, searchKey, searchVal, skip, take, sortKey, sortVal } =
      Helpers.queryOption(query, { searchKey: 'fullname' });

    const result = await this.prisma.systemUser.findMany({
      where: { [searchKey]: { contains: searchVal }, ...filterObj },
      include: {
        user_role: {
          select: {
            name: true,
          },
        },
      },
      orderBy: { [sortKey]: sortVal },
      skip: skip * take,
      take: take,
    });

    const total = await this.prisma.systemUser.count();

    return {
      data: result,
      pageInfo: {
        page: skip,
        pageSize: take,
        totalRowCount: total,
      },
    };
  }

  async getOneById(id: string): Promise<any> {
    return await this.prisma.systemUser.findUnique({
      where: { id: id },
      include: {
        user_role: {
          select: {
            name: true,
          },
        },
      },
    });
  }

  async create(systemUser: CreateSystemUserDto): Promise<SystemUser> {
    systemUser.password = await Helpers.hashPassword(systemUser.password);
    return await this.prisma.systemUser.create({ data: systemUser });
  }

  async update(
    id: string,
    systemUser: UpdateSystemUserDto,
  ): Promise<SystemUser> {
    return await this.prisma.systemUser.update({
      where: { id: id },
      data: systemUser,
    });
  }

  async delete(id: string): Promise<SystemUser> {
    return await this.prisma.systemUser.delete({ where: { id: id } });
  }

  async changePassword(user: ChangePasswordDto): Promise<SystemUser> {
    const { username, password, new_password } = user;
    const existedUser = await this.findOne(username);

    if (
      !existedUser ||
      !(await bcrypt.compare(password, existedUser.password))
    ) {
      throw new UnauthorizedException('Credential not found');
    }

    existedUser.password = await Helpers.hashPassword(new_password);

    return await this.prisma.systemUser.update({
      where: {
        id: existedUser.id,
      },
      data: existedUser,
    });
  }

  async resetPassword(user: ResetPasswordDto): Promise<SystemUser> {
    const { username, new_password } = user;
    const existedUser = await this.findOne(username);

    if (!existedUser) {
      throw new UnauthorizedException('Credential not found');
    }

    existedUser.password = await Helpers.hashPassword(new_password);

    return await this.prisma.systemUser.update({
      where: { id: existedUser.id },
      data: existedUser,
    });
  }
}
