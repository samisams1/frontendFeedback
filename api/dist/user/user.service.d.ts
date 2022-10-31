import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dto/createUser.dto';
import { UpdateUserDto } from './dto/updateUser.dto';
export declare class UserService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    getUsers(): Promise<import(".prisma/client").Feedback[] | "data not found">;
    getUserById(id: number): Promise<import(".prisma/client").Feedback | "data not exist">;
    createUsers(post: CreateUserDto): Promise<import(".prisma/client").Feedback>;
    updateUsers(id: number, post: UpdateUserDto): Promise<import(".prisma/client").Feedback>;
    deleteUsers(id: number): Promise<import(".prisma/client").Feedback>;
}
