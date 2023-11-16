import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { PrismaService } from 'prisma/prisma.service';
import { SearchModule } from './search/search.module';
import { InstructorModule } from './instructor/instructor.module';
import { StudentModule } from './student/student.module';
import { CourseModule } from './course/course.module';
import { CategoryModule } from './category/category.module';
import { LectureModule } from './lecture/lecture.module';

@Module({
  imports: [UsersModule, AuthModule, SearchModule, InstructorModule, StudentModule, CourseModule, CategoryModule, LectureModule],
  controllers: [AppController],
  providers: [AppService,PrismaService],
})
export class AppModule {}
