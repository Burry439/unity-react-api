"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var player_1 = __importDefault(require("./SocketClasses/player"));
var allPlayers = [];
var Game = /** @class */ (function () {
    function Game() {
    }
    Game.isFistPlayer = function () {
        return allPlayers.length == 0;
    };
    Game.isDuplicatePlayer = function (userId) {
        //assume its not a duplicate
        var addNewPlayer = true;
        allPlayers.forEach(function (player) {
            //if we find a duplicate add one to it instance count
            if (player.id == userId) {
                player.instanceCount++;
                addNewPlayer = false;
            }
        });
        return addNewPlayer;
    };
    Game.addNewPlayerFromReact = function (username, userId) {
        var newPlayer = this.isDuplicatePlayer(userId);
        var isFirstPlayer = Game.isFistPlayer();
        if (isFirstPlayer || newPlayer) {
            var newPlayer_1 = new player_1.default(username, userId);
            allPlayers.push(newPlayer_1);
            return newPlayer_1;
        }
        else {
            return false;
        }
    };
    Game.disconnectedFromReact = function (PlayerId) {
        var disconnectedPlayer = false;
        allPlayers.forEach(function (player, i) {
            if (player.id == PlayerId) {
                //if this player disconected but is still active on a diffrent tab
                if (player.instanceCount > 1) {
                    player.instanceCount--;
                }
                else {
                    disconnectedPlayer = player;
                    //remove the disconnected player player from players array
                    allPlayers.splice(i, 1);
                    //return the disconnected player
                }
            }
        });
        return disconnectedPlayer;
    };
    Game.greeting = "test";
    Game.allReactSockets = [];
    Game.allUnitySockets = [];
    return Game;
}());
exports.default = Game;
//# sourceMappingURL=game.js.map