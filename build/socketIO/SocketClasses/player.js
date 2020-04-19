"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var shortID = require('short-id');
var Player = /** @class */ (function () {
    function Player(_username, _id) {
        this.username = _username;
        this.id = _id;
        this.instanceCount = 1;
    }
    return Player;
}());
exports.default = Player;
//# sourceMappingURL=player.js.map