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
import { PageLevelAccessService } from './page-level-access.service';
import { CreatePageLevelAccessDto } from './dto/create-page-level-access.dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { ResponseMessage } from 'src/config/handlers/response-message';

@Controller('page-level-accesses')
@ApiTags('Page Level Access')
export class PageLevelAccessController {
  constructor(
    private readonly pageLevelAccessService: PageLevelAccessService,
  ) {}

  @Get()
  @UseGuards(AuthGuard)
  @ApiBearerAuth('JWT-auth')
  @ResponseMessage('success')
  async GetAllByFilter(@Query() query: any) {
    return this.pageLevelAccessService.getAllByFilter(query);
  }

  @Post('/many')
  @UseGuards(AuthGuard)
  @ApiBearerAuth('JWT-auth')
  @UsePipes(ValidationPipe)
  @ResponseMessage('Page level accesses have been successfully created.')
  async createMany(@Body() pageLevelAccess: CreatePageLevelAccessDto) {
    return this.pageLevelAccessService.createMany(pageLevelAccess);
  }
}
