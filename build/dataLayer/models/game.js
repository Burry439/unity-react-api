"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Game = void 0;
var mongoose_1 = require("mongoose");
var arrayUniquePlugin = require('mongoose-unique-array');
;
var Game = /** @class */ (function () {
    function Game() {
        var schema = new mongoose_1.Schema({
            name: { type: String, required: true },
            challenges: [{ type: mongoose_1.Schema.Types.ObjectId, ref: "Challenge" }],
        });
        schema.plugin(arrayUniquePlugin);
        this._model = mongoose_1.model('Game', schema);
    }
    Object.defineProperty(Game.prototype, "model", {
        get: function () {
            return this._model;
        },
        enumerable: false,
        configurable: true
    });
    return Game;
}());
exports.Game = Game;
//# sourceMappingURL=game.js.map