import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService, private jwtService:JwtService,){}

  async signUp(createAuthDto){
    return this.prisma.user.create({data:createAuthDto})
  }

  async logIn(email:string,password:string){
    const user = await this.prisma.user.findUnique({ where: { email: email } })
    if (!user || user.password != password) {
      throw new UnauthorizedException('Invalid credentials');
    }
    await delete user.password
    return {
      user,
      token: this.jwtService.sign({ userId: user.id }),
    };
  }
}
