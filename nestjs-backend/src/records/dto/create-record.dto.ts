import {
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateRecordDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
  @MinLength(2)
  @ApiProperty()
  name: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
  @MinLength(2)
  @ApiProperty()
  category: string;

  @IsNotEmpty()
  @IsInt()
  @ApiProperty()
  page_count: number;

  @IsNotEmpty()
  @IsString()
  @MaxLength(36)
  @MinLength(0)
  @ApiProperty()
  language_id: string;

  @IsOptional()
  @IsInt()
  @ApiProperty()
  active: number;
}
