import { NotFoundException } from '@nestjs/common';
export declare class FeedbackNotFoundException extends NotFoundException {
    constructor(feedbackId: number);
}
