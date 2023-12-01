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
import { CreateRegionDto } from './dto/create-region.dto';
import { UpdateRegionDto } from './dto/update-region.dto';
import { RegionService } from './region.service';
import { AuthGuard } from '../auth/auth.guard';

@Controller('regions')
@ApiTags('Region')
export class RegionController {
  constructor(private regionService: RegionService) {}

  @Get()
  @UseGuards(AuthGuard)
  @ApiBearerAuth('JWT-auth')
  @ResponseMessage('success')
  async GetAllByFilter(@Query() query: any) {
    return this.regionService.getAllByFilter(query);
  }

  @Get('/pages')
  @UseGuards(AuthGuard)
  @ApiBearerAuth('JWT-auth')
  @ResponseMessage('success')
  async GetByPagination(@Query() query: PaginationQuery) {
    return this.regionService.getByPagination(query);
  }

  @Get(':id')
  @UseGuards(AuthGuard)
  @ApiBearerAuth('JWT-auth')
  @ResponseMessage('success')
  async GetOne(@Param('id') id: string) {
    return this.regionService.getOneById(id);
  }

  @Post()
  @UseGuards(AuthGuard)
  @ApiBearerAuth('JWT-auth')
  @UsePipes(ValidationPipe)
  @ResponseMessage('New region has been successfully created.')
  async create(@Body() region: CreateRegionDto) {
    return this.regionService.create(region);
  }

  @Patch(':id')
  @UseGuards(AuthGuard)
  @ApiBearerAuth('JWT-auth')
  @UsePipes(ValidationPipe)
  @ResponseMessage('A region has been successfully updated.')
  async update(@Param('id') id: string, @Body() region: UpdateRegionDto) {
    return this.regionService.update(id, region);
  }

  @Delete(':id')
  @UseGuards(AuthGuard)
  @ApiBearerAuth('JWT-auth')
  @ResponseMessage('A region has been permanently deleted.')
  async delete(@Param('id') id: string) {
    return this.regionService.delete(id);
  }
}
