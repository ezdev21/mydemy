import { Controller, Post, Body, Res, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { JwtService } from '@nestjs/jwt';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService,private jwtService:JwtService) {}

  @Post('signup')
  async signUp(@Body() createAuthDto: CreateAuthDto) {
    const newUSer = await this.authService.signUp(createAuthDto)
    return newUSer
  }

  @Post('login')
  async logIn(@Body() { email, password }: CreateAuthDto) {
    const token = await this.authService.logIn(email, password)
    return token
  }

}
