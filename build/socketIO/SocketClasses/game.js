"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var player_1 = __importDefault(require("./player"));
var Game = /** @class */ (function () {
    function Game() {
        this.players = [];
    }
    Game.prototype.removePlayerAfterSignOut = function (playerId) {
        var _this = this;
        this.players.forEach(function (player, i) {
            if (player.id == playerId) {
                //remove the disconnected player player from players array
                _this.players.splice(i, 1);
            }
        });
    };
    Game.prototype.getPlayers = function () {
        return this.players;
    };
    Game.prototype.getThisPlayer = function (playerId) {
        return this.players.find(function (player) {
            return player.id == playerId;
        });
    };
    Game.prototype.getEmptyPlayer = function () {
        return this.getPlayers().find(function (player) {
            console.log("getEmptyPlayer");
            console.log(player);
            console.log("getEmptyPlayer");
            player.connectedToUnity == false;
        });
    };
    Game.getGameInstance = function () {
        if (!Game.GameInstance) {
            Game.GameInstance = new Game();
        }
        return Game.GameInstance;
    };
    Game.prototype.isFistPlayer = function () {
        return this.players.length == 0;
    };
    Game.prototype.isDuplicatePlayer = function (userId) {
        console.log("in is duplicate player");
        //assume its not a duplicate
        var isDuplicate = false;
        console.log(this.players);
        this.players.forEach(function (player) {
            //if we find a duplicate add one to it instance count
            if (player.id == userId) {
                isDuplicate = true;
            }
        });
        return isDuplicate;
    };
    Game.prototype.addToInstanceCount = function (playerId) {
        this.players.find(function (player) {
            if (player.id == playerId) {
                player.instanceCount++;
            }
        });
    };
    Game.prototype.addNewPlayerFromReact = function (username, userId) {
        var newPlayer = new player_1.default(username, userId);
        this.players.push(newPlayer);
        console.log("after adding new player");
        console.log(this.players);
        return newPlayer;
    };
    // public signedOutFromReact(PlayerId : string) : PlayerDisconnected {
    //     let disconnectPlayer : boolean = true; 
    //     let disconnectedPlayer : Player;
    //     this.players.forEach((player : Player, i : number) =>{
    //         if(player.id == PlayerId) {
    //             disconnectedPlayer = player
    //             //if this player disconected but is still active on a diffrent tab
    //             if(player.instanceCount > 1){
    //                 player.instanceCount --
    //                 disconnectPlayer = false
    //             }
    //             else{
    //                 //remove the disconnected player player from players array
    //                 this.players.splice(i, 1)
    //             }
    //         }   
    //     })
    //     return {
    //         disconnectPlayer : disconnectPlayer,
    //         player : disconnectedPlayer
    //     }
    // }
    Game.prototype.disconnectedFromReact = function (playerId) {
        var _this = this;
        var disconnectPlayer = false;
        var disconnectedPlayer;
        this.players.forEach(function (player, i) {
            if (player.id == playerId) {
                //if this player disconected but is still active on a diffrent tab
                if (player.instanceCount > 1) {
                    player.instanceCount--;
                }
                else {
                    disconnectPlayer = true;
                    disconnectedPlayer = player;
                    //remove the disconnected player player from players array
                    _this.players.splice(i, 1);
                }
            }
        });
        //return the disconnected player
        return {
            disconnectPlayer: disconnectPlayer,
            player: disconnectedPlayer
        };
    };
    return Game;
}());
exports.default = Game;
//# sourceMappingURL=game.js.map