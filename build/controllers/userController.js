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
var express_1 = __importDefault(require("express"));
var userBl_1 = __importDefault(require("../businessLogic/userBl"));
var underscore_1 = __importDefault(require("underscore"));
var authHelper_1 = __importDefault(require("../helpers/authHelper"));
var router = express_1.default.Router();
router.post('/user/login', function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var language, loginRespone, e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                language = req.headers.language;
                return [4 /*yield*/, userBl_1.default.login(req.body.username, req.body.password, language)];
            case 1:
                loginRespone = _a.sent();
                req.session.jwt = loginRespone.accessToken;
                req.session.cookie.serialize("jwt", loginRespone.accessToken.toString());
                req.session.username = loginRespone.user.username,
                    req.session.role = loginRespone.user.role;
                res.json(loginRespone.user);
                return [3 /*break*/, 3];
            case 2:
                e_1 = _a.sent();
                res.status(404);
                next(e_1);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
router.get('/user/getUser', authHelper_1.default.authenticateToken, function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var language, user, e_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                console.log(req.session.username);
                language = req.headers.language;
                return [4 /*yield*/, userBl_1.default.getUser(req.session.username, language)];
            case 1:
                user = _a.sent();
                res.send(user);
                return [3 /*break*/, 3];
            case 2:
                e_2 = _a.sent();
                res.status(404);
                next(e_2);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
router.get('/user/logout', function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        try {
            req.session.destroy(function () {
                res.send("done");
            });
        }
        catch (e) {
            res.status(404);
            next(e);
        }
        return [2 /*return*/];
    });
}); });
router.post('/user/createuser', function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var user, e_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, userBl_1.default.createUser(req.body.email, req.body.username, req.body.password, req.body.role)];
            case 1:
                user = _a.sent();
                res.send(underscore_1.default.omit(user.toJSON(), "completedChallenges", "__v", "password"));
                return [3 /*break*/, 3];
            case 2:
                e_3 = _a.sent();
                res.status(401);
                next(e_3);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
router.post('/user/signup', function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var signupResponse, e_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, userBl_1.default.signUp(req.body.email, req.body.username, req.body.password)];
            case 1:
                signupResponse = _a.sent();
                req.session.jwt = signupResponse.accessToken;
                req.session.username = signupResponse.user.username;
                req.session.role = signupResponse.user.role;
                res.send(signupResponse.user);
                return [3 /*break*/, 3];
            case 2:
                e_4 = _a.sent();
                res.status(404);
                next(e_4);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
exports.default = router;
//for when i get around to authorization
// const posts = [
// 	{
// 	  username : "burry",
// 	  title : "Post 1"
// 	},
// 	{
// 	  username : "notBurry",
// 	  title : "Post 1"
// 	}
//   ]
// router.get("/user/test", authenticateToken, (req : any,res : any) =>{
//   res.json(posts.filter(post => post.username == req.user.username))
// })
//router.get("/user/getTickets", async (req,res) =>{
//     const tickets = await DB.Models.User.aggregate([
//       {
//         $match : {_id : mongoose.Types.ObjectId(req.query.id)},
//       },
//       {
//         $lookup : {from: "challenges",localField: "completedChallenges",foreignField: "_id", as: "doc_completedChallenges"}
//       },
//       {
//         $group : {"_id" : "$doc_completedChallenges.reward"}
//       },
//       {
//         $project : {"_id" : 0, totalTickets :  {"$sum": "$_id"}}
//       },
//     ])
//     res.send(tickets[0])
// })
//# sourceMappingURL=userController.js.map