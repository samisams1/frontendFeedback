"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeedbackNotFoundException = void 0;
const common_1 = require("@nestjs/common");
class FeedbackNotFoundException extends common_1.NotFoundException {
    constructor(feedbackId) {
        super(`Feedback with id ${feedbackId} not found`);
    }
}
exports.FeedbackNotFoundException = FeedbackNotFoundException;
//# sourceMappingURL=feedbackNotFound.exception.js.map