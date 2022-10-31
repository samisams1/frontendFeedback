import { PrismaService } from '../prisma/prisma.service';
import { CreateQuestionDto } from './dto/createQuestion.dto';
import { UpdateQuestionDto } from './dto/updateQuestion.dto';
export declare class QuestionService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    getQuestions(): Promise<import(".prisma/client").Feedback[] | "data not found">;
    getQuestionById(id: number): Promise<import(".prisma/client").Feedback | "data not exist">;
    createQuestions(post: CreateQuestionDto): Promise<import(".prisma/client").Feedback>;
    updateQuestions(id: number, post: UpdateQuestionDto): Promise<import(".prisma/client").Feedback>;
    deleteQuestions(id: number): Promise<import(".prisma/client").Feedback>;
}
