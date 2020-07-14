"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var userController_1 = __importDefault(require("./userController"));
var challengeController_1 = __importDefault(require("./challengeController"));
var gameController_1 = __importDefault(require("./gameController"));
var adminController_1 = __importDefault(require("./adminController"));
var controllers = [
    userController_1.default,
    challengeController_1.default,
    gameController_1.default,
    adminController_1.default
];
exports.default = controllers;
//# sourceMappingURL=baseController.js.map