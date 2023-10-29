import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService ){}

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
