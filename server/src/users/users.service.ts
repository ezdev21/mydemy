import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService, private jwtService: JwtService ){}

  create(createUserDto: CreateUserDto) {
    return this.prisma.user.create({data:createUserDto})
  }

  findAll() {
    return this.prisma.user.findMany()
  }

  findOne(id: string) {
    const user = this.prisma.user.findUnique({where:{id:id}})
    delete user.password
    return user
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    this.prisma.user.update({
      where:{id:id},
      data:updateUserDto
    })

  }

  async remove(id: string) {
    this.prisma.user.delete({where:{id:id}})
  }
}
