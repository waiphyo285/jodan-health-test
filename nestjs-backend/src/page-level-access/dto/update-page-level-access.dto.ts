import { PartialType } from '@nestjs/swagger';
import { CreatePageLevelAccessDto } from './create-page-level-access.dto';

export class UpdatePageLevelAccessDto extends PartialType(
  CreatePageLevelAccessDto,
) {}
