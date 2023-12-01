import {
  Controller,
  Get,
  Post,
  Body,
  UseGuards,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { PermissionService } from './permission.service';
import {
  CreateAppLevelAccessDto,
  CreatePageLevelAccessDto,
} from './dto/permission.dto';

import { AuthGuard } from 'src/auth/auth.guard';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { ResponseMessage } from 'src/common/config/handlers/response-message';

@Controller('permissions')
@ApiTags('Permission')
export class PermissionController {
  constructor(private readonly permissionService: PermissionService) {}

  @Get('/get-app-access')
  @UseGuards(AuthGuard)
  @ApiBearerAuth('JWT-auth')
  @ResponseMessage('success')
  async GetAppAccessByFilter(@Query() query: any) {
    return this.permissionService.getAppAccessByFilter(query);
  }

  @Post('/create-app-access')
  @UseGuards(AuthGuard)
  @ApiBearerAuth('JWT-auth')
  @UsePipes(ValidationPipe)
  @ResponseMessage('App level accesses have been successfully created.')
  async CreateAppAccessMany(@Body() appLevelAccess: CreateAppLevelAccessDto) {
    return this.permissionService.createAppAccessMany(appLevelAccess);
  }

  @Get('/get-page-access')
  @UseGuards(AuthGuard)
  @ApiBearerAuth('JWT-auth')
  @ResponseMessage('success')
  async GetPageAccessByFilter(@Query() query: any) {
    return this.permissionService.getPageAccessByFilter(query);
  }

  @Post('/create-page-access')
  @UseGuards(AuthGuard)
  @ApiBearerAuth('JWT-auth')
  @UsePipes(ValidationPipe)
  @ResponseMessage('Page level accesses have been successfully created.')
  async CreatePageAccessMany(
    @Body() pageLevelAccess: CreatePageLevelAccessDto,
  ) {
    return this.permissionService.createPageAccessMany(pageLevelAccess);
  }
}
