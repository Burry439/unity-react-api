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
var mongoose_1 = __importDefault(require("mongoose"));
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
var authenticateToken = function (req, res, next) {
    var authHeader = req.headers["authorization"];
    console.log(authHeader);
    var token = authHeader && authHeader.split(' ')[1];
    console.log(token);
    if (token == null)
        return res.sendStatus(401);
    jsonwebtoken_1.default.verify(token, process.env.ACCESS_TOKEN_SECRET, function (err, user) {
        console.log(user);
        if (err)
            return res.sendStatus(403);
        req.user = user;
        next();
    });
};
router.get("/users/getTickets", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var tickets;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, DB_1.DB.Models.User.aggregate([
                    {
                        $match: { _id: mongoose_1.default.Types.ObjectId(req.query.id) },
                    },
                    {
                        $lookup: { from: "challenges", localField: "completedChallenges", foreignField: "_id", as: "doc_completedChallenges" }
                    },
                    {
                        $group: { "_id": "$doc_completedChallenges.reward" }
                    },
                    {
                        $project: { "_id": 0, totalTickets: { "$sum": "$_id" } }
                    },
                ])];
            case 1:
                tickets = _a.sent();
                console.log(tickets);
                res.send(tickets[0]);
                return [2 /*return*/];
        }
    });
}); });
router.post('/users/login', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var user, accessToken, respone, e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, DB_1.DB.Models.User.findOne({ username: req.body.username }).populate("completedChallenges")];
            case 1:
                user = _a.sent();
                console.log(user);
                if (user === null) {
                    return [2 /*return*/, res.status(404).send("cannot find user")];
                }
                _a.label = 2;
            case 2:
                _a.trys.push([2, 4, , 5]);
                console.log(req.body.password, user.password);
                return [4 /*yield*/, bcryptjs_1.default.compare(req.body.password, user.password)];
            case 3:
                if (_a.sent()) {
                    accessToken = generateAccessToken(user);
                    respone = { user: user, accessToken: accessToken };
                    res.json(respone);
                }
                else {
                    res.status(401).send("incorrect Password");
                }
                return [3 /*break*/, 5];
            case 4:
                e_1 = _a.sent();
                console.log(e_1);
                res.status(500).send(e_1);
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); });
router.get("/users/test", authenticateToken, function (req, res) {
    res.json(posts.filter(function (post) { return post.username == req.user.username; }));
});
router.post('/users/signup', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var hashedPassword, user, respone, _a, e_2;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 6, , 7]);
                return [4 /*yield*/, bcryptjs_1.default.hash(req.body.password, 10)];
            case 1:
                hashedPassword = _b.sent();
                user = new DB_1.DB.Models.User({
                    email: req.body.email,
                    username: req.body.username,
                    password: hashedPassword,
                    tickets: 0
                });
                _b.label = 2;
            case 2:
                _b.trys.push([2, 4, , 5]);
                return [4 /*yield*/, user.save()];
            case 3:
                _b.sent();
                console.log(user);
                respone = { user: user, accessToken: "ddd" };
                res.send(respone);
                return [3 /*break*/, 5];
            case 4:
                _a = _b.sent();
                res.status(401).send("duplicate user");
                return [3 /*break*/, 5];
            case 5: return [3 /*break*/, 7];
            case 6:
                e_2 = _b.sent();
                res.status(500).send(e_2);
                return [3 /*break*/, 7];
            case 7: return [2 /*return*/];
        }
    });
}); });
exports.default = router;
//# sourceMappingURL=userController.js.map