import {
  IsNotEmpty,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { VALIDATE_MSG } from 'src/utilities/constant';

export class ResetPasswordDto {
  @IsNotEmpty()
  @MaxLength(36)
  @MinLength(1)
  @ApiProperty()
  id: string;

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
  new_password: string;
}
