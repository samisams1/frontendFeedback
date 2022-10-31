import { FindOneParams } from 'src/utils/findOneParams';
import { CreateUserDto } from './dto/createUser.dto';
import { UserService } from './user.service';
export default class UserController {
    private readonly userService;
    constructor(userService: UserService);
    getFeedbacks(): Promise<import(".prisma/client").Feedback[] | "data not found">;
    getFeedbackById({ id }: FindOneParams): Promise<import(".prisma/client").Feedback | "data not exist">;
    createFeedback(post: CreateUserDto): Promise<import(".prisma/client").Feedback>;
    deleteFeedback({ id }: FindOneParams): Promise<import(".prisma/client").Feedback>;
}
