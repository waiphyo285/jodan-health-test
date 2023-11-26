import {
  IsNotEmpty,
  IsOptional,
  IsPhoneNumber,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { VALIDATE_MSG } from 'src/utilities/constant';

export class CreateSystemUserDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  @MinLength(3)
  @ApiProperty()
  fullname: string;

  @IsNotEmpty()
  @Transform(({ value }) => value.replace('+959', '09'))
  @IsString()
  @IsPhoneNumber('MM')
  @MaxLength(13)
  @MinLength(9)
  @ApiProperty()
  phone: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(16)
  @MinLength(6)
  @Matches(/^[a-zA-Z0-9_]+$/, {
    message: VALIDATE_MSG.username,
  })
  @ApiProperty()
  username: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(16)
  @MinLength(6)
  @Matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
    {
      message: VALIDATE_MSG.password,
    },
  )
  @ApiProperty()
  password: string;

  @IsOptional()
  @IsString()
  @MaxLength(36)
  @MinLength(0)
  @ApiProperty()
  role_id: string;

  @IsOptional()
  @IsString()
  @ApiProperty()
  description: string;
}
