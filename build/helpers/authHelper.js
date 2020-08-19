"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var AuthHelper = /** @class */ (function () {
    function AuthHelper() {
    }
    AuthHelper.authenticateToken = function (req, res, next) {
        console.log("ere");
        console.log(req.sessionID);
        var token = req.session.jwt;
        if (token == null)
            return res.sendStatus(401);
        jsonwebtoken_1.default.verify(token, process.env.ACCESS_TOKEN_SECRET, function (err, user) {
            if (err)
                return res.sendStatus(403);
            //req.user = user
            next();
        });
    };
    AuthHelper.authenticateAdmin = function (req, res, next) {
        var role = req.session.role;
        if (role == null || role != "admin") {
            return res.sendStatus(401);
        }
        else {
            next();
        }
    };
    return AuthHelper;
}());
exports.default = AuthHelper;
//# sourceMappingURL=authHelper.js.map