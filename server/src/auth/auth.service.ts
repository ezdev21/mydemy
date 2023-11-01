import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService, private jwtService:JwtService,){}

  async signUp(authDto:CreateAuthDto){
    //return this.prisma.user.create({data:{authDto}})
  }

  async signIn(email:string,password:string){
    const user = await this.prisma.user.findUnique({ where: { email: email } })
    if (!user || user.password != password) {
      throw new UnauthorizedException('Invalid credentials');
    }
    return {
      token: this.jwtService.sign({ userId: user.id }),
    };
  }

}
