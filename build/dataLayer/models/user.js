"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
;
var User = /** @class */ (function () {
    function User() {
        var schema = new mongoose_1.Schema({
            email: { type: String, required: true, unique: true },
            username: { type: String, required: true, unique: true },
            password: { type: String, required: true }
        });
        this._model = mongoose_1.model('User', schema);
    }
    Object.defineProperty(User.prototype, "model", {
        get: function () {
            return this._model;
        },
        enumerable: true,
        configurable: true
    });
    return User;
}());
exports.User = User;
//# sourceMappingURL=user.js.map