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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const findOneParams_1 = require("../utils/findOneParams");
const createQuestion_dto_1 = require("./dto/createQuestion.dto");
const question_service_1 = require("./question.service");
let QuestionController = class QuestionController {
    constructor(feedQuestionService) {
        this.feedQuestionService = feedQuestionService;
    }
    async getFeedbacks() {
        return this.feedQuestionService.getQuestions();
    }
    getFeedbackById({ id }) {
        return this.feedQuestionService.getQuestionById(Number(id));
    }
    async createFeedback(post) {
        console.log(post.content);
        return this.feedQuestionService.createQuestions(post);
    }
    async deleteFeedback({ id }) {
        return this.feedQuestionService.deleteQuestions(Number(id));
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], QuestionController.prototype, "getFeedbacks", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [findOneParams_1.FindOneParams]),
    __metadata("design:returntype", void 0)
], QuestionController.prototype, "getFeedbackById", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createQuestion_dto_1.CreateQuestionDto]),
    __metadata("design:returntype", Promise)
], QuestionController.prototype, "createFeedback", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [findOneParams_1.FindOneParams]),
    __metadata("design:returntype", Promise)
], QuestionController.prototype, "deleteFeedback", null);
QuestionController = __decorate([
    (0, common_1.Controller)('question'),
    __metadata("design:paramtypes", [question_service_1.QuestionService])
], QuestionController);
exports.default = QuestionController;
//# sourceMappingURL=question.controller.js.map