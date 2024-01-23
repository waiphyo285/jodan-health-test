import {
  IsNotEmpty,
  IsNumber,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class AppLevelAccessDto {
  @IsNotEmpty()
  @MaxLength(36)
  @MinLength(0)
  @ApiProperty()
  role_id: string;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  can_view_profile: number;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  can_view_home: number;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  can_view_search: number;
}

export class CreateAppLevelAccessDto {
  @IsNotEmpty()
  @MaxLength(36)
  @MinLength(0)
  @ApiProperty()
  role_id: string;

  @ApiProperty({ type: [AppLevelAccessDto] })
  appLevelAccesses: AppLevelAccessDto[];
}

export class PageLevelAccessDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  module: string;

  @IsNotEmpty()
  @MaxLength(36)
  @MinLength(0)
  @ApiProperty()
  role_id: string;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  can_access_menu: number;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  can_view_list: number;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  can_search_list: number;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  can_filter_list: number;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  can_export_xlsx: number;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  can_export_pdf: number;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  can_export_word: number;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  can_create_record: number;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  can_edit_record: number;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  can_delete_record: number;
}

export class CreatePageLevelAccessDto {
  @IsNotEmpty()
  @MaxLength(36)
  @MinLength(0)
  @ApiProperty()
  role_id: string;

  @ApiProperty({ type: [PageLevelAccessDto] })
  pageLevelAccesses: PageLevelAccessDto[];
}
