import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import QuestionController from './question.controller';
import { QuestionService } from './question.service';
@Module({
  imports: [PrismaModule],
  controllers: [QuestionController],
  providers: [QuestionService],
})
export class QuestionModule {}
