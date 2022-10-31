import { PrismaService } from '../prisma/prisma.service';
import { UpdateFeedbackDto } from './dto/updatefeedback.dto';
import { CreateFeedbackDto } from './dto/createFeedback.dto';
export declare class FeedbacksService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    getFeedbacks(): Promise<import(".prisma/client").Feedback[] | "data not found">;
    getFeedbacksById(id: number): Promise<import(".prisma/client").Feedback | "data not exist">;
    createFeedbacks(post: CreateFeedbackDto): Promise<import(".prisma/client").Feedback>;
    updateFeedbacks(id: number, post: UpdateFeedbackDto): Promise<import(".prisma/client").Feedback>;
    deleteFeedbacks(id: number): Promise<import(".prisma/client").Feedback>;
}
