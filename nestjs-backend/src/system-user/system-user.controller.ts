import {
  Controller,
  Get,
  Post,
  Delete,
  Patch,
  Body,
  Param,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UseGuards } from '@nestjs/common/decorators';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { ResponseMessage } from 'src/common/handlers/response-message';
import { PaginationQuery } from 'src/common/interfaces/request-query';
import { CreateSystemUserDto } from './dto/create-system-user.dto';
import { UpdateSystemUserDto } from './dto/update-system-user.dto';
import { ChangePasswordDto } from './dto/change-password.dto';
import { ResetPasswordDto } from './dto/reset-password.dto';
import { SystemUserService } from './system-user.service';
import { AuthGuard } from '../auth/auth.guard';

@Controller('system-users')
@ApiTags('System User')
export class SystemUserController {
  constructor(private userService: SystemUserService) {}

  @Get()
  @UseGuards(AuthGuard)
  @ApiBearerAuth('JWT-auth')
  @ResponseMessage('success')
  async GetAllByFilter(@Query() query: any) {
    return this.userService.getAllByFilter(query);
  }

  @Get('/pages')
  @UseGuards(AuthGuard)
  @ApiBearerAuth('JWT-auth')
  @ResponseMessage('success')
  async GetByPagination(@Query() query: PaginationQuery) {
    return this.userService.getByPagination(query);
  }

  @Get(':id')
  @UseGuards(AuthGuard)
  @ApiBearerAuth('JWT-auth')
  @ResponseMessage('success')
  async GetOne(@Param('id') id: string) {
    return this.userService.getOneById(id);
  }

  @Post()
  // @UseGuards(AuthGuard)
  // @ApiBearerAuth('JWT-auth')
  @UsePipes(ValidationPipe)
  @ResponseMessage('New user has been successfully created.')
  async create(@Body() user: CreateSystemUserDto) {
    return this.userService.create(user);
  }

  @Patch(':id')
  @UseGuards(AuthGuard)
  @ApiBearerAuth('JWT-auth')
  @UsePipes(ValidationPipe)
  @ResponseMessage('User has been successfully updated.')
  async update(@Param('id') id: string, @Body() user: UpdateSystemUserDto) {
    return this.userService.update(id, user);
  }

  @Delete(':id')
  @UseGuards(AuthGuard)
  @ApiBearerAuth('JWT-auth')
  @ResponseMessage('User has been permanently deleted.')
  async delete(@Param('id') id: string) {
    return this.userService.delete(id);
  }

  @Post('change-password')
  @UseGuards(AuthGuard)
  @ApiBearerAuth('JWT-auth')
  @UsePipes(ValidationPipe)
  @ResponseMessage('Password has been successfully changed.')
  async changePassword(@Body() user: ChangePasswordDto) {
    return this.userService.changePassword(user);
  }

  @Post('reset-password')
  @UseGuards(AuthGuard)
  @ApiBearerAuth('JWT-auth')
  @UsePipes(ValidationPipe)
  @ResponseMessage('Password has been successfully revised.')
  async resetPassword(@Body() user: ResetPasswordDto) {
    return this.userService.resetPassword(user);
  }
}
