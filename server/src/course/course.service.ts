import { Injectable } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class CourseService {
  constructor(private prisma:PrismaService){}

  create(createCourseDto: CreateCourseDto) {
    return this.prisma.course.create({data:createCourseDto})
  }

  findAll() {
    return this.prisma.course.findMany();
  }

  findOne(id: string) {
    return this.prisma.course.findUnique({where:{id:id}}) 
 }

  update(id: string, updateCourseDto: UpdateCourseDto) {
    return this.prisma.course.update({
      where:{id:id},
      data:updateCourseDto
    })
  }

  remove(id: string) {
    return this.prisma.course.delete({where:{id:id}}) 
  }
}
