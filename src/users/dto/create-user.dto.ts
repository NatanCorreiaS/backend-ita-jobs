import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsPositive,
  IsString,
  MinLength,
} from 'class-validator';

export enum GENDER {
  female,
  male,
  non_specified,
}

export class CreateUserDto {
  id: number;
  @IsNotEmpty()
  @IsString()
  @MinLength(5)
  name: string;
  @IsNotEmpty()
  @MinLength(9)
  @IsString()
  password: string
  @IsNotEmpty()
  @IsEmail()
  email: string;
  @IsNotEmpty()
  @IsPositive()
  age: number;
  @IsNotEmpty()
  @IsEnum(GENDER)
  gender: GENDER;
}
