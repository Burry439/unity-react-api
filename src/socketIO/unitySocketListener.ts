import Player from "./SocketClasses/player"
import Game from "./SocketClasses/game"
import PlayerPostion from "./SocketInterfaces/playerPositon"

export default class UnitySocketListener {
    socket : any
    gameInstance : any
    player : Player
    signOut : Function
    static duplicateId : string = "0"
    constructor(_socket : any, _gameInstance : Game){
        this.socket = _socket
        this.gameInstance = _gameInstance
        
        this.socket.on("addUnityUser", () =>{
            this.gameInstance.getPlayers().forEach((player : Player) =>{ 
                if(player.connectedToUnity == false){
                    this.player = player
                }
            })
            if(this.player &&  this.player.connectedToUnity == false){
                console.log("abut to add player to unity")
                this.player.connectedToUnity = true
                this.socket.emit("register", this.player)
                this.socket.broadcast.emit("spawn", this.player)
                this.gameInstance.getPlayers().forEach((player : Player) =>{  
                    this.socket.emit("spawn",player)
                })
            }
            else{
                console.log("no free users")
                this.socket.emit("duplicatePlayer")
            }
        })

        this.socket.on("updatePosition", (data : any) =>{
            this.player.position.x = data.position.x
            this.player.position.y = data.position.y  
            this.socket.broadcast.emit("updatePosition",this.player)
        })

    }
}