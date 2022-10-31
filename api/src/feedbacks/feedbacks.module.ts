import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { FeedbacksService } from './feedbacks.service';
import FeedbacksController from './feedbacks.controller';

@Module({
  imports: [PrismaModule],
  controllers: [FeedbacksController],
  providers: [FeedbacksService],
})
export class FeedbacksModule {}
