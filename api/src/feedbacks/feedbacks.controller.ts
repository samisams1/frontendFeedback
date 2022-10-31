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
import { CreateFeedbackDto } from './dto/createFeedback.dto';
import { FeedbacksService } from './feedbacks.service';

@Controller('feedbacks')
export default class FeedbacksController {
  constructor(private readonly feedbacksService: FeedbacksService) {}

  @Get()
  async getFeedbacks() {
    return this.feedbacksService.getFeedbacks();
  }

  @Get(':id')
  getFeedbackById(@Param() { id }: FindOneParams) {
    return this.feedbacksService.getFeedbacksById(Number(id));
  }

  @Post()
  async createFeedback(@Body() post: CreateFeedbackDto) {
    console.log(post.content);
    return this.feedbacksService.createFeedbacks(post);
  }

  @Delete(':id')
  async deleteFeedback(@Param() { id }: FindOneParams) {
    return this.feedbacksService.deleteFeedbacks(Number(id));
  }
}
