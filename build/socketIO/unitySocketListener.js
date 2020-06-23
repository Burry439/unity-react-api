"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var game_1 = __importDefault(require("./game"));
var challengeBl_1 = __importDefault(require("../businessLogic/challengeBl"));
var UnitySocketListener = /** @class */ (function () {
    function UnitySocketListener(_socket, _roomData) {
        var _this = this;
        this.socket = _socket;
        this.gameInstance = game_1.default.getGameInstance();
        this.challengeBl = challengeBl_1.default.getChallengeBlInstance();
        this.roomData = _roomData;
        //if thee are no avalible react clients
        if (!_roomData.userId) {
            console.log("in if no id if");
            this.socket.emit("sendToErrorPage", {});
        }
        else {
            console.log("in else");
            this.gameInstance.addUnitySocketToGameConnection(_roomData, this.socket);
            this.socket.join(this.roomData.gameName + "/" + this.roomData.userId);
            this.socket.on("challengeCompleted", function (challengeData) { return __awaiter(_this, void 0, void 0, function () {
                var challenge;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.challengeBl.challengeComplete(challengeData)];
                        case 1:
                            challenge = _a.sent();
                            console.log("challenge: ", challenge);
                            if (challenge) {
                                //send to react
                                this.socket.to(this.roomData.gameName + "/" + this.roomData.userId).emit("challengeCompleted", challenge);
                            }
                            else {
                                console.log("challenge already completed");
                            }
                            return [2 /*return*/];
                    }
                });
            }); });
        }
    }
    return UnitySocketListener;
}());
exports.default = UnitySocketListener;
//# sourceMappingURL=unitySocketListener.js.map