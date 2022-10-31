import { NotFoundException } from '@nestjs/common';

export class FeedbackNotFoundException extends NotFoundException {
  constructor(feedbackId: number) {
    super(`Feedback with id ${feedbackId} not found`);
  }
}
