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
var bcryptjs_1 = __importDefault(require("bcryptjs"));
var DB_1 = require("../dataLayer/DB");
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var adminBl_1 = __importDefault(require("../businessLogic/adminBl"));
var underscore_1 = __importDefault(require("underscore"));
var router = express_1.default.Router();
var posts = [
    {
        username: "burry",
        title: "Post 1"
    },
    {
        username: "notBurry",
        title: "Post 1"
    }
];
var generateAccessToken = function (user) {
    return jsonwebtoken_1.default.sign(user.toJSON(), process.env.ACCESS_TOKEN_SECRET, { expiresIn: "15s" });
};
router.put("/user/adminupdateuser", function (req, res, next) {
    adminBl_1.default.updateEntity("User", req.body, res, next);
});
router.get("/user/admingetusers", function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, adminBl_1.default.getEntity("User", req.query.field, req.query.value, req.query.skip, req.query.limit, ["completedChallenges", "__v", "password"], res, next)];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
var authenticateToken = function (req, res, next) {
    var authHeader = req.headers["authorization"];
    var token = authHeader && authHeader.split(' ')[1];
    if (token == null)
        return res.sendStatus(401);
    jsonwebtoken_1.default.verify(token, process.env.ACCESS_TOKEN_SECRET, function (err, user) {
        if (err)
            return res.sendStatus(403);
        req.user = user;
        next();
    });
};
// 
router.post('/user/login', function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var language, user, errorMessage, error, accessToken, respone, error, e_1, error;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                language = req.headers.language;
                console.log(language);
                return [4 /*yield*/, DB_1.DB.Models.User.findOne({ username: req.body.username }).populate("completedChallenges")];
            case 1:
                user = _a.sent();
                if (user === null) {
                    errorMessage = language == "en" ? "username or password is incorrect" : "הודעת שגיאה בעברית";
                    error = new Error(errorMessage);
                    res.status(404);
                    next(error);
                }
                _a.label = 2;
            case 2:
                _a.trys.push([2, 4, , 5]);
                return [4 /*yield*/, bcryptjs_1.default.compare(req.body.password, user.password)];
            case 3:
                if (_a.sent()) {
                    accessToken = generateAccessToken(user);
                    respone = { user: user, accessToken: accessToken };
                    res.json(respone);
                }
                else {
                    error = new Error("username or password is incorrect");
                    res.status(404);
                    next(error);
                }
                return [3 /*break*/, 5];
            case 4:
                e_1 = _a.sent();
                error = new Error("internal error");
                res.status(500);
                next(error);
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); });
router.post('/user/createuser', function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var hashedPassword, user, e_2, error, e_3, error;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 6, , 7]);
                return [4 /*yield*/, bcryptjs_1.default.hash(req.body.password, 10)];
            case 1:
                hashedPassword = _a.sent();
                user = new DB_1.DB.Models.User({
                    email: req.body.email,
                    username: req.body.username,
                    password: hashedPassword,
                    tickets: 0
                });
                _a.label = 2;
            case 2:
                _a.trys.push([2, 4, , 5]);
                return [4 /*yield*/, user.save(function (err, user) {
                        if (err) {
                            var error = new Error("user already exists");
                            res.status(401);
                            next(error);
                        }
                        else {
                            res.send(underscore_1.default.omit(user.toJSON(), "completedChallenges", "__v", "password"));
                        }
                    })];
            case 3:
                _a.sent();
                return [3 /*break*/, 5];
            case 4:
                e_2 = _a.sent();
                error = new Error("user already exists");
                res.status(401);
                next(error);
                return [3 /*break*/, 5];
            case 5: return [3 /*break*/, 7];
            case 6:
                e_3 = _a.sent();
                error = new Error("Internal server error");
                res.status(500);
                next(error);
                return [3 /*break*/, 7];
            case 7: return [2 /*return*/];
        }
    });
}); });
router.post('/user/signup', function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var hashedPassword, user, accessToken, respone, err_1, field, error, e_4, error;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 6, , 7]);
                return [4 /*yield*/, bcryptjs_1.default.hash(req.body.password, 10)];
            case 1:
                hashedPassword = _a.sent();
                user = new DB_1.DB.Models.User({
                    email: req.body.email,
                    username: req.body.username,
                    password: hashedPassword,
                    tickets: 0
                });
                _a.label = 2;
            case 2:
                _a.trys.push([2, 4, , 5]);
                return [4 /*yield*/, user.save()];
            case 3:
                _a.sent();
                accessToken = generateAccessToken(user);
                respone = { user: user, accessToken: accessToken };
                res.send(respone);
                return [3 /*break*/, 5];
            case 4:
                err_1 = _a.sent();
                field = err_1.message.split('.$')[1];
                // now we have `email_1 dup key`
                field = field.split(' dup key')[0];
                field = field.substring(0, field.lastIndexOf('_'));
                error = new Error("looks like someone already used that " + field);
                res.status(404);
                next(error);
                return [3 /*break*/, 5];
            case 5: return [3 /*break*/, 7];
            case 6:
                e_4 = _a.sent();
                error = new Error("internal error");
                res.status(500);
                next(error);
                return [3 /*break*/, 7];
            case 7:
                // router.
                router.get("/user/test", authenticateToken, function (req, res) {
                    res.json(posts.filter(function (post) { return post.username == req.user.username; }));
                });
                return [2 /*return*/];
        }
    });
}); });
exports.default = router;
//for refrence 
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