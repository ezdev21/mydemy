import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService, private jwtService: JwtService ){}

  create(createUserDto: CreateUserDto) {
    
  }

  findAll() {
    return this.prisma.user.findMany()
  }

  findOne(id: number) {
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.findOne(id)
  }

  async remove(id: number) {
    const user = await this.findOne(id)
  }
}
