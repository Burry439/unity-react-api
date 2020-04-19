"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var game_1 = __importDefault(require("./SocketClasses/game"));
var constants_1 = __importDefault(require("./constants"));
var startSockectConnection = function (server) {
    var io = require('socket.io')(server);
    return io.on("connection", function (socket) {
        console.log("connection");
        //inform react it has connected to the server  
        socket.emit("reactConnected");
        socket.emit("unityConnected");
        var thisPlayerId = 0;
        //when someone connects from react send a new player to unity
        socket.on("addReactUser", function (user) {
            console.log("in add react");
            var newPlayer = game_1.default.addNewPlayerFromReact(user.username, user.id);
            thisPlayerId = user.id;
            if (newPlayer) {
                socket.broadcast.emit("spawn", newPlayer);
            }
        });
        //when someone connects from unity ahould only run ince pers unity client
        socket.on("addUnityUser", function () {
            console.log("in add unity");
            constants_1.default.allPlayers.forEach(function (player) {
                game_1.default.allUnitySockets.push(socket);
                socket.emit("spawn", player);
            });
        });
        socket.on("disconnect", function (e) {
            var disconectedPlayer = game_1.default.disconnectedFromReact(thisPlayerId);
            if (disconectedPlayer) {
                socket.broadcast.emit("disconnectFromReact", disconectedPlayer);
            }
        });
    });
};
exports.default = startSockectConnection;
// import Player from './SocketClasses/player'
// import Game  from './socketConstants'
// const startSockectConnection = (server : any) => { 
//     const io = require('socket.io')(server)
//    return io.on("connection", (socket : any) =>{
//         console.log("connection")
//         //inform react it has connected to the server  
//         socket.emit("reactConnected")
//         socket.emit("unityConnected")
//         let thisPlayerId = 0
//         //when someone connects from react send a new player to unity
//         socket.on("addReactUser", (user : any) =>{
//             console.log("in add react")
//             //assume we want to add one
//             let addNewPlayer = true
//             // if there are players
//             if(Game.allPlayers.length > 0){
//                 Game.allPlayers.forEach((player) =>{
//                     //if we are trying to add a duplicate users add one to its instance count
//                     if(player.player.id == user.id){
//                         player.instanceCount++ 
//                         addNewPlayer = false      
//                     }
//                 })
//             }      
//             //if this is the first or a new user add it to the list of connetions       
//             if(allPlayers.length == 0 || addNewPlayer) {
//             const newPlayer = new Player(user.username, user.id)    
//             //add the new player to the array of all players
//             allPlayers.push({player : newPlayer, instanceCount : 1})
//             Game.allReactSockets.push(socket)      
//             socket.broadcast.emit("spawn", newPlayer)
//             }
//             thisPlayerId = user.id
//         })
//         //when someone connects from unity ahould only run ince pers unity client
//         socket.on("addUnityUser", () =>{
//             console.log("in add unity")
//             allPlayers.forEach((player) =>{  
//                 allUnitySockets.push(socket)
//                 socket.emit("spawn", player.player)
//             })
//         })
//         socket.on("disconnect", (e) =>{
//            console.log("disconnect")
//            let disconnectedPlayer;
//            allPlayers.forEach((player, i) =>{
//                //if this player disconected
//                if(player.player.id == thisPlayerId){
//                 if(player.instanceCount > 1){
//                     player.instanceCount --
//                 }
//                 else{
//                     disconnectedPlayer = player.player
//                     //remove the disconnetceet player from players array
//                     allPlayers.splice(i, 1)
//                     socket.broadcast.emit("disconnectFromReact", disconnectedPlayer)
//                     return
//                 }
//                }
//            })
//         })
//     })
// }
// module.exports = startSockectConnection
//# sourceMappingURL=socketIO.js.map