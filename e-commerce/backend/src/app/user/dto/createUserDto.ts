import {
  IsEmail,
  IsIn,
  isNotEmpty,
  IsNotEmpty,
  isString,
  IsString,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;
  @IsEmail()
  @IsNotEmpty()
  email: string;
  @IsString()
  @IsNotEmpty()
  password: string;
  @IsNotEmpty()
  @IsIn(['admin', 'normal'])
  role: 'admin' | 'normal';
}
