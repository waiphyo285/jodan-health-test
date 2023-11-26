import { IsInt, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserRoleDto {
  @IsNotEmpty()
  @IsInt()
  @ApiProperty()
  name: number;

  @IsNotEmpty()
  @IsInt()
  @ApiProperty()
  level: number;

  @IsNotEmpty()
  @IsInt()
  @ApiProperty()
  active: number;
}
