import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiTags } from '@nestjs/swagger';
import { ResponseMessage } from 'src/common/config/handlers/response-message';

import { SystemUserSignInDto } from './dto/auth/system-user-signin.dto';
import { SystemUserSignUpDto } from './dto/auth/system-user-signup.dto';

import { GuardUserSignInDto } from './dto/auth/guard-user-signin.dto';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('system-user-signup')
  @ResponseMessage('New system user has been successfully created.')
  systemUserSignUp(@Body() systemUser: SystemUserSignUpDto) {
    return this.authService.systemUserSignUp(systemUser);
  }

  @Post('system-user-signin')
  @ResponseMessage('success')
  systemUserSignIn(@Body() systemUser: SystemUserSignInDto) {
    return this.authService.systemUserSignIn(systemUser);
  }

  @Post('guard-user-signin')
  @ResponseMessage('success')
  guardSignIn(@Body() guardUser: GuardUserSignInDto) {
    return this.authService.guardUserSignIn(guardUser);
  }
}
