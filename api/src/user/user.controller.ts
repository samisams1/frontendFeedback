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
import { CreateUserDto } from './dto/createUser.dto';
import { UserService } from './user.service';

@Controller('users')
export default class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getFeedbacks() {
    return this.userService.getUsers();
  }

  @Get(':id')
  getFeedbackById(@Param() { id }: FindOneParams) {
    return this.userService.getUserById(Number(id));
  }

  @Post()
  async createFeedback(@Body() post: CreateUserDto) {
    console.log(post.content);
    return this.userService.createUsers(post);
  }

  @Delete(':id')
  async deleteFeedback(@Param() { id }: FindOneParams) {
    return this.userService.deleteUsers(Number(id));
  }
}
