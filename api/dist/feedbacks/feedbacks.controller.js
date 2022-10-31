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
const createFeedback_dto_1 = require("./dto/createFeedback.dto");
const feedbacks_service_1 = require("./feedbacks.service");
let FeedbacksController = class FeedbacksController {
    constructor(feedbacksService) {
        this.feedbacksService = feedbacksService;
    }
    async getFeedbacks() {
        return this.feedbacksService.getFeedbacks();
    }
    getFeedbackById({ id }) {
        return this.feedbacksService.getFeedbacksById(Number(id));
    }
    async createFeedback(post) {
        console.log(post.content);
        return this.feedbacksService.createFeedbacks(post);
    }
    async deleteFeedback({ id }) {
        return this.feedbacksService.deleteFeedbacks(Number(id));
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], FeedbacksController.prototype, "getFeedbacks", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [findOneParams_1.FindOneParams]),
    __metadata("design:returntype", void 0)
], FeedbacksController.prototype, "getFeedbackById", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createFeedback_dto_1.CreateFeedbackDto]),
    __metadata("design:returntype", Promise)
], FeedbacksController.prototype, "createFeedback", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [findOneParams_1.FindOneParams]),
    __metadata("design:returntype", Promise)
], FeedbacksController.prototype, "deleteFeedback", null);
FeedbacksController = __decorate([
    (0, common_1.Controller)('feedbacks'),
    __metadata("design:paramtypes", [feedbacks_service_1.FeedbacksService])
], FeedbacksController);
exports.default = FeedbacksController;
//# sourceMappingURL=feedbacks.controller.js.map