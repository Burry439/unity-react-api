"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//import * as mongoose from 'mongoose'
var mongoose_1 = __importDefault(require("mongoose"));
var userSchema = new mongoose_1.default.Schema({
    username: mongoose_1.default.Schema.Types.String,
});
exports.default = mongoose_1.default.model('users', userSchema);
//# sourceMappingURL=users.js.map