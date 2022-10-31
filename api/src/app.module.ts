import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';
import { FeedbacksService } from './feedbacks/feedbacks.service';
import { FeedbacksModule } from './feedbacks/feedbacks.module';
import { QuestionService } from './question/question.service';
import { QuestionModule } from './question/question.module';
import { UserService } from './user/user.service';
import { UserModule } from './user/user.module';
import FeedbacksController from './feedbacks/feedbacks.controller';
import UserController from './user/user.controller';

@Module({
  imports: [PrismaModule, FeedbacksModule, QuestionModule, UserModule],
  controllers: [AppController, FeedbacksController, UserController],
  providers: [
    AppService,
    PrismaService,
    FeedbacksService,
    QuestionService,
    UserService,
  ],
})
export class AppModule {}
