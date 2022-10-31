"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const runtime_1 = require("@prisma/client/runtime");
const prismaError_1 = require("../utils/prismaError");
const feedbackNotFound_exception_1 = require("./exceptions/feedbackNotFound.exception");
let UserService = class UserService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async getUsers() {
        const allData = await this.prismaService.feedback.findMany({});
        if (!allData) {
            return await 'data not found';
        }
        else {
            return await allData;
        }
    }
    async getUserById(id) {
        try {
            const data = await this.prismaService.feedback.findFirst({
                where: {
                    id: id,
                },
            });
            if (!data) {
                return 'data not exist';
            }
            else {
                return data;
            }
        }
        catch (error) {
            if (error instanceof runtime_1.PrismaClientKnownRequestError &&
                error.code === prismaError_1.PrismaError.RecordDoesNotExist) {
                throw new feedbackNotFound_exception_1.FeedbackNotFoundException(id);
            }
            throw error;
        }
    }
    async createUsers(post) {
        try {
            return this.prismaService.feedback.create({
                data: {
                    title: post.title,
                    content: post.content,
                },
            });
        }
        catch (error) {
            if (error instanceof runtime_1.PrismaClientKnownRequestError &&
                error.code === prismaError_1.PrismaError.RecordDoesNotExist)
                throw error;
        }
    }
    async updateUsers(id, post) {
        try {
            return await this.prismaService.feedback.update({
                data: Object.assign(Object.assign({}, post), { id: undefined }),
                where: {
                    id,
                },
            });
        }
        catch (error) {
            if (error instanceof runtime_1.PrismaClientKnownRequestError &&
                error.code === prismaError_1.PrismaError.RecordDoesNotExist) {
                throw new feedbackNotFound_exception_1.FeedbackNotFoundException(id);
            }
            throw error;
        }
    }
    async deleteUsers(id) {
        try {
            return this.prismaService.feedback.delete({
                where: {
                    id,
                },
            });
        }
        catch (error) {
            if (error instanceof runtime_1.PrismaClientKnownRequestError &&
                error.code === prismaError_1.PrismaError.RecordDoesNotExist) {
                throw new feedbackNotFound_exception_1.FeedbackNotFoundException(id);
            }
            throw error;
        }
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map