import { FindOneParams } from 'src/utils/findOneParams';
import { CreateQuestionDto } from './dto/createQuestion.dto';
import { QuestionService } from './question.service';
export default class QuestionController {
    private readonly feedQuestionService;
    constructor(feedQuestionService: QuestionService);
    getFeedbacks(): Promise<import(".prisma/client").Feedback[] | "data not found">;
    getFeedbackById({ id }: FindOneParams): Promise<import(".prisma/client").Feedback | "data not exist">;
    createFeedback(post: CreateQuestionDto): Promise<import(".prisma/client").Feedback>;
    deleteFeedback({ id }: FindOneParams): Promise<import(".prisma/client").Feedback>;
}
