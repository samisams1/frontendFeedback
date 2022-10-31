import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { FindOneParams } from 'src/utils/findOneParams';
import { CreateQuestionDto } from './dto/createQuestion.dto';
import { QuestionService } from './question.service';

@Controller('question')
export default class QuestionController {
  constructor(private readonly feedQuestionService: QuestionService) {}

  @Get()
  async getFeedbacks() {
    return this.feedQuestionService.getQuestions();
  }

  @Get(':id')
  getFeedbackById(@Param() { id }: FindOneParams) {
    return this.feedQuestionService.getQuestionById(Number(id));
  }

  @Post()
  async createFeedback(@Body() post: CreateQuestionDto) {
    console.log(post.content);
    return this.feedQuestionService.createQuestions(post);
  }

  @Delete(':id')
  async deleteFeedback(@Param() { id }: FindOneParams) {
    return this.feedQuestionService.deleteQuestions(Number(id));
  }
}
