import { Injectable } from '@nestjs/common';
import { CreateInstructorDto } from './dto/create-instructor.dto';
import { UpdateInstructorDto } from './dto/update-instructor.dto';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class InstructorService {
  constructor(private prisma:PrismaService){}
  
  create(createInstructorDto: CreateInstructorDto) {
    return this.prisma.instructor.create({data:createInstructorDto})
  }

  findAll() {
    return this.prisma.instructor.findMany();
  }

  findOne(id: string) {
    return this.prisma.instructor.findUnique({where:{id:id}});
  }

  update(id: string, updateInstructorDto: UpdateInstructorDto) {
    return this.prisma.instructor.update({
      where:{id:id},
      data:updateInstructorDto
    });
  }

  remove(id: string) {
    return this.prisma.instructor.delete({where:{id:id}});
  }
}
