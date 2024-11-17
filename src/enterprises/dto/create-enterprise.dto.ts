import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateEnterpriseDto {
  id: number
  @IsString()
  @IsNotEmpty()
  name: string;
  @IsString()
  @IsNotEmpty()
  jobTitle: string;
  @IsEmail()
  @IsNotEmpty()
  email: string;
  @IsString()
  @IsNotEmpty()
  description: string;
  @IsString()
  @IsNotEmpty()
  imgURL: string;
}
