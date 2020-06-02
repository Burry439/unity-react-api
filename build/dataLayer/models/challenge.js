"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Challenge = void 0;
var mongoose_1 = require("mongoose");
;
var Challenge = /** @class */ (function () {
    function Challenge() {
        var schema = new mongoose_1.Schema({
            challengeName: { type: String, required: true, unique: true },
            gameName: { type: String, required: true },
            reward: { type: Number, required: true },
            active: { type: Boolean, required: true }
        });
        this._model = mongoose_1.model('Challenge', schema);
    }
    Object.defineProperty(Challenge.prototype, "model", {
        get: function () {
            return this._model;
        },
        enumerable: false,
        configurable: true
    });
    return Challenge;
}());
exports.Challenge = Challenge;
//# sourceMappingURL=challenge.js.map