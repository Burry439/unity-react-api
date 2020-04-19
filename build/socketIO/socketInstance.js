"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var game_1 = __importDefault(require("./SocketClasses/game"));
var socket_io_1 = __importDefault(require("socket.io"));
var unitySocketListener_1 = __importDefault(require("./unitySocketListener"));
var SocketInstance = /** @class */ (function () {
    function SocketInstance(server) {
        var _this = this;
        this.gameInstance = game_1.default.getGameInstance();
        this.io = socket_io_1.default(server);
        this.io.on("connection", function (socket) {
            console.log("connection");
            var thisPlayerId = "0";
            _this.unitySocketListener = new unitySocketListener_1.default(socket, _this.gameInstance);
            socket.on("reactClientConnected", function () {
                console.log("react connected");
            });
            //when someone connects from react send a new player to unity
            socket.on("addReactUser", function (user) {
                console.log("addReactUser");
                //has this user been added already
                thisPlayerId = user.id;
                // if this user is not a duplicate create a new player and inform everyone 
                if (!_this.gameInstance.isDuplicatePlayer(user.id)) {
                    var newPlayer = _this.gameInstance.addNewPlayerFromReact(user.username, user.id);
                    //tell me react client about all other users
                    socket.emit("reactFirstSpawn", _this.gameInstance.getPlayers());
                    //tell all unity and react clients about the new user
                    socket.broadcast.emit("reactSpawn", newPlayer);
                }
                else {
                    console.log("is dulicate");
                    console.log(_this.gameInstance.getPlayers());
                    //if its a duplicate add one to its instance count 
                    _this.gameInstance.addToInstanceCount(user.id);
                }
            });
            //when someone signs out from react 
            socket.on("reactUserSignedOut", function (userId) {
                var player = _this.gameInstance.getThisPlayer(userId);
                _this.gameInstance.removePlayerAfterSignOut(player.id);
                //tell every one else on react and unity to remove me
                socket.broadcast.emit("disconnectFromReact", player);
                // sign him out in all tabs
                socket.broadcast.emit("signedOutFromReact", player);
            });
            // if we needed to sign out from multiple tabs resest there sockets playerId
            socket.on("resetPlayerId", function () {
                thisPlayerId = "0";
            });
            // if a user closes a tab or browser or refreshes
            socket.on("disconnect", function () {
                // if he has a tab still open remove from his instance count
                var disconectedPlayer = _this.gameInstance.disconnectedFromReact(thisPlayerId);
                // if he discounected every where inform other players he discounnected
                if (disconectedPlayer.disconnectPlayer) {
                    socket.broadcast.emit("disconnectFromReact", disconectedPlayer.player);
                }
            });
        });
    }
    SocketInstance.getSocketInstance = function (server) {
        if (!SocketInstance.SocketInstance) {
            SocketInstance.SocketInstance = new SocketInstance(server);
        }
        return SocketInstance.SocketInstance;
    };
    return SocketInstance;
}());
exports.default = SocketInstance;
//# sourceMappingURL=socketInstance.js.map