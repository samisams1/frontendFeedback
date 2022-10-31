import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { PrismaError } from '../utils/prismaError';
import { FeedbackNotFoundException } from './exceptions/feedbackNotFound.exception';
import { CreateUserDto } from './dto/createUser.dto';
import { UpdateUserDto } from './dto/updateUser.dto';
@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) {}

  async getUsers() {
    const allData = await this.prismaService.feedback.findMany({});
    if (!allData) {
      return await 'data not found';
    } else {
      return await allData;
    }
  }

  async getUserById(id: number) {
    try {
      const data = await this.prismaService.feedback.findFirst({
        where: {
          id: id,
        },
      });
      if (!data) {
        return 'data not exist';
      } else {
        return data;
      }
    } catch (error) {
      if (
        error instanceof PrismaClientKnownRequestError &&
        error.code === PrismaError.RecordDoesNotExist
      ) {
        throw new FeedbackNotFoundException(id);
      }
      throw error;
    }
  }
  async createUsers(post: CreateUserDto) {
    try {
      return this.prismaService.feedback.create({
        data: {
          title: post.title,
          content: post.content,
        },
      });
    } catch (error) {
      if (
        error instanceof PrismaClientKnownRequestError &&
        error.code === PrismaError.RecordDoesNotExist
      )
        throw error;
    }
  }
  async updateUsers(id: number, post: UpdateUserDto) {
    try {
      return await this.prismaService.feedback.update({
        data: {
          ...post,
          id: undefined,
        },
        where: {
          id,
        },
      });
    } catch (error) {
      if (
        error instanceof PrismaClientKnownRequestError &&
        error.code === PrismaError.RecordDoesNotExist
      ) {
        throw new FeedbackNotFoundException(id);
      }
      throw error;
    }
  }

  async deleteUsers(id: number) {
    try {
      return this.prismaService.feedback.delete({
        where: {
          id,
        },
      });
    } catch (error) {
      if (
        error instanceof PrismaClientKnownRequestError &&
        error.code === PrismaError.RecordDoesNotExist
      ) {
        throw new FeedbackNotFoundException(id);
      }
      throw error;
    }
  }
}
