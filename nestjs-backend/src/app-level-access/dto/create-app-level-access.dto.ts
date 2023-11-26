import { IsNotEmpty, IsNumber, MaxLength, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateAppLevelAccessDto {
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

export class CreateManyAppLevelAccessDto {
  @IsNotEmpty()
  @MaxLength(36)
  @MinLength(0)
  @ApiProperty()
  role_id: string;

  @ApiProperty({ type: [CreateAppLevelAccessDto] })
  appLevelAccesses: CreateAppLevelAccessDto[];
}
