"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const prisma_service_1 = require("./prisma/prisma.service");
const prisma_module_1 = require("./prisma/prisma.module");
const feedbacks_service_1 = require("./feedbacks/feedbacks.service");
const feedbacks_module_1 = require("./feedbacks/feedbacks.module");
const question_service_1 = require("./question/question.service");
const question_module_1 = require("./question/question.module");
const user_service_1 = require("./user/user.service");
const user_module_1 = require("./user/user.module");
const feedbacks_controller_1 = require("./feedbacks/feedbacks.controller");
const user_controller_1 = require("./user/user.controller");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule, feedbacks_module_1.FeedbacksModule, question_module_1.QuestionModule, user_module_1.UserModule],
        controllers: [app_controller_1.AppController, feedbacks_controller_1.default, user_controller_1.default],
        providers: [
            app_service_1.AppService,
            prisma_service_1.PrismaService,
            feedbacks_service_1.FeedbacksService,
            question_service_1.QuestionService,
            user_service_1.UserService,
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map