import {
  Controller,
  Get,
  Post,
  Body,
  Query,
  UsePipes,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { AppLevelAccessService } from './app-level-access.service';
import { CreateManyAppLevelAccessDto } from './dto/create-app-level-access.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { ResponseMessage } from 'src/config/handlers/response-message';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('app-level-accesses')
@ApiTags('App Level Access')
export class AppLevelAccessController {
  constructor(private readonly appLevelAccessService: AppLevelAccessService) {}

  @Get()
  @UseGuards(AuthGuard)
  @ApiBearerAuth('JWT-auth')
  @ResponseMessage('success')
  async GetAllByFilter(@Query() query: any) {
    return this.appLevelAccessService.getAllByFilter(query);
  }

  @Post('/many')
  @UseGuards(AuthGuard)
  @ApiBearerAuth('JWT-auth')
  @UsePipes(ValidationPipe)
  @ResponseMessage('App level accesses have been successfully created.')
  async createMany(@Body() appLevelAccess: CreateManyAppLevelAccessDto) {
    return this.appLevelAccessService.createMany(appLevelAccess);
  }
}
