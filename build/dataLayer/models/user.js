"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var mongoose_1 = require("mongoose");
var arrayUniquePlugin = require('mongoose-unique-array');
;
var User = /** @class */ (function () {
    function User() {
        var schema = new mongoose_1.Schema({
            email: { type: String, required: true, unique: true },
            username: { type: String, required: true, unique: true },
            password: { type: String, required: true },
            tickets: { type: Number },
            role: { type: String, required: true },
            completedChallenges: [{ type: mongoose_1.Schema.Types.ObjectId, ref: "Challenge" }],
        });
        schema.plugin(arrayUniquePlugin);
        this._model = mongoose_1.model('User', schema);
    }
    Object.defineProperty(User.prototype, "model", {
        get: function () {
            return this._model;
        },
        enumerable: false,
        configurable: true
    });
    return User;
}());
exports.User = User;
//# sourceMappingURL=user.js.map