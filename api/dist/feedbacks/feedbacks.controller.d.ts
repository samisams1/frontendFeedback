import { FindOneParams } from 'src/utils/findOneParams';
import { CreateFeedbackDto } from './dto/createFeedback.dto';
import { FeedbacksService } from './feedbacks.service';
export default class FeedbacksController {
    private readonly feedbacksService;
    constructor(feedbacksService: FeedbacksService);
    getFeedbacks(): Promise<import(".prisma/client").Feedback[] | "data not found">;
    getFeedbackById({ id }: FindOneParams): Promise<import(".prisma/client").Feedback | "data not exist">;
    createFeedback(post: CreateFeedbackDto): Promise<import(".prisma/client").Feedback>;
    deleteFeedback({ id }: FindOneParams): Promise<import(".prisma/client").Feedback>;
}
