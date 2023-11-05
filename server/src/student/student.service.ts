import { Injectable } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class StudentService {
  constructor(private prisma:PrismaService){}

  create(createStudentDto: CreateStudentDto) {
    return this.prisma.student.create({data:createStudentDto})
  }

  findAll() {
    return this.prisma.student.findMany()
  }

  findOne(id: string) {
    return this.prisma.student.findUnique({where:{id:id}})
  }

  update(id: string, updateStudentDto: UpdateStudentDto) {
    return this.prisma.student.update({
      where:{id:id},
      data:updateStudentDto
    });
  }

  remove(id: string) {
    return this.prisma.student.delete({where:{id:id}})
  }
}
