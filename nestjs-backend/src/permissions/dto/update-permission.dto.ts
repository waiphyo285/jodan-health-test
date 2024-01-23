import { PartialType } from '@nestjs/swagger';
import {
  CreateAppLevelAccessDto,
  CreatePageLevelAccessDto,
} from './permission.dto';

export class UpdatePageLevelAccessDto extends PartialType(
  CreatePageLevelAccessDto,
) {}

export class UpdateAppLevelAccessDto extends PartialType(
  CreateAppLevelAccessDto,
) {}
