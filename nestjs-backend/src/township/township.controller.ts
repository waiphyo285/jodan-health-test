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
import { ResponseMessage } from 'src/common/config/handlers/response-message';
import { PaginationQuery } from 'src/common/config/interfaces/request-query';
import { CreateTownshipDto } from './dto/create-township.dto';
import { UpdateTownshipDto } from './dto/update-township.dto';
import { TownshipService } from './township.service';
import { AuthGuard } from '../auth/auth.guard';

@Controller('townships')
@ApiTags('Township')
export class TownshipController {
  constructor(private townshipService: TownshipService) {}

  @Get()
  @UseGuards(AuthGuard)
  @ApiBearerAuth('JWT-auth')
  @ResponseMessage('success')
  async GetAllByFilter(@Query() query: any) {
    return this.townshipService.getAllByFilter(query);
  }

  @Get('/pages')
  @UseGuards(AuthGuard)
  @ApiBearerAuth('JWT-auth')
  @ResponseMessage('success')
  async GetByPagination(@Query() query: PaginationQuery) {
    return this.townshipService.getByPagination(query);
  }

  @Get(':id')
  @UseGuards(AuthGuard)
  @ApiBearerAuth('JWT-auth')
  @ResponseMessage('success')
  async GetOne(@Param('id') id: string) {
    return this.townshipService.getOneById(id);
  }

  @Post()
  @UseGuards(AuthGuard)
  @ApiBearerAuth('JWT-auth')
  @UsePipes(ValidationPipe)
  @ResponseMessage('New township has been successfully created.')
  async create(@Body() township: CreateTownshipDto) {
    return this.townshipService.create(township);
  }

  @Patch(':id')
  @UseGuards(AuthGuard)
  @ApiBearerAuth('JWT-auth')
  @UsePipes(ValidationPipe)
  @ResponseMessage('A township has been successfully updated.')
  async update(@Param('id') id: string, @Body() township: UpdateTownshipDto) {
    return this.townshipService.update(id, township);
  }

  @Delete(':id')
  @UseGuards(AuthGuard)
  @ApiBearerAuth('JWT-auth')
  @ResponseMessage('A township has been permanently deleted.')
  async delete(@Param('id') id: string) {
    return this.townshipService.delete(id);
  }
}
