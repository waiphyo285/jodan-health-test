import { PartialType } from '@nestjs/swagger';
import { CreateAppLevelAccessDto } from './create-app-level-access.dto';

export class UpdateAppLevelAccessDto extends PartialType(
  CreateAppLevelAccessDto,
) {}
