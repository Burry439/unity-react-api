"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UnitySocketListener = /** @class */ (function () {
    function UnitySocketListener(_socket, _gameInstance) {
        var _this = this;
        this.socket = _socket;
        this.gameInstance = _gameInstance;
        this.socket.on("addUnityUser", function () {
            _this.gameInstance.getPlayers().forEach(function (player) {
                if (player.connectedToUnity == false) {
                    _this.player = player;
                }
            });
            if (_this.player && _this.player.connectedToUnity == false) {
                console.log("abut to add player to unity");
                _this.player.connectedToUnity = true;
                _this.socket.emit("register", _this.player);
                _this.socket.broadcast.emit("spawn", _this.player);
                _this.gameInstance.getPlayers().forEach(function (player) {
                    _this.socket.emit("spawn", player);
                });
            }
            else {
                console.log("no free users");
                _this.socket.emit("duplicatePlayer");
            }
        });
        this.socket.on("updatePosition", function (data) {
            _this.player.position.x = data.position.x;
            _this.player.position.y = data.position.y;
            _this.socket.broadcast.emit("updatePosition", _this.player);
        });
    }
    UnitySocketListener.duplicateId = "0";
    return UnitySocketListener;
}());
exports.default = UnitySocketListener;
//# sourceMappingURL=unitySocketListener.js.map