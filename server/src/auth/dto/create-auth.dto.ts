import { IsEmail, IsNotEmpty, IsOptional, IsString, MinLength } from "class-validator";

export class CreateAuthDto {
  @IsString()
  @IsOptional()
  username: string;

  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  password: string;
}
