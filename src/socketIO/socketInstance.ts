import Game  from './SocketClasses/game'
import PlayerDisconnected from './SocketInterfaces/playerDisconnect'
import socketIo from 'socket.io';
import Player from './SocketClasses/player';
import { Server } from 'http';
import User from './SocketInterfaces/user';
import UnitySocketListener from './unitySocketListener';

export default class SocketInstance {
    
    private io : SocketIO.Server
    public gameInstance : Game =  Game.getGameInstance();
    private static SocketInstance : SocketInstance 
    public unitySocketListener :UnitySocketListener;
    constructor(server : Server ) {

        this.io = socketIo(server)
        this.io.on("connection", (socket : any) =>{

            console.log("connection")

            let thisPlayerId : string = "0"
            this.unitySocketListener = new UnitySocketListener(socket, this.gameInstance)

            socket.on("reactClientConnected",() =>{
                console.log("react connected")
            })

            //when someone connects from react send a new player to unity
            socket.on("addReactUser", (user : User) =>{
                console.log("addReactUser")
                //has this user been added already
                thisPlayerId = user.id

                // if this user is not a duplicate create a new player and inform everyone 
                if(!this.gameInstance.isDuplicatePlayer(user.id)){  
                    const newPlayer : Player = this.gameInstance.addNewPlayerFromReact(user.username,user.id)       
                    //tell me react client about all other users
                    socket.emit("reactFirstSpawn", this.gameInstance.getPlayers())
                    //tell all unity and react clients about the new user
                    socket.broadcast.emit("reactSpawn",  newPlayer)
                    
                } else{
                    console.log("is dulicate")
                    console.log( this.gameInstance.getPlayers())
                    //if its a duplicate add one to its instance count 
                    this.gameInstance.addToInstanceCount(user.id)
                }
            })
            
            //when someone signs out from react 
            socket.on("reactUserSignedOut", (userId : string) =>{     
                    const player : Player = this.gameInstance.getThisPlayer(userId)
                    this.gameInstance.removePlayerAfterSignOut(player.id)
                    //tell every one else on react and unity to remove me
                    socket.broadcast.emit("disconnectFromReact", player)
                    // sign him out in all tabs
                    socket.broadcast.emit("signedOutFromReact", player)                       
            })


            
            // if we needed to sign out from multiple tabs resest there sockets playerId
            socket.on("resetPlayerId", () =>{
                thisPlayerId = "0"
            })

            // if a user closes a tab or browser or refreshes
            socket.on("disconnect", () =>{
                // if he has a tab still open remove from his instance count
                const disconectedPlayer : PlayerDisconnected = this.gameInstance.disconnectedFromReact(thisPlayerId)
                // if he discounected every where inform other players he discounnected
                if(disconectedPlayer.disconnectPlayer){
                    socket.broadcast.emit("disconnectFromReact", disconectedPlayer.player)
                }    
            })
        })
    } 
    
    public static getSocketInstance(server : Server) : SocketInstance { 
            if(!SocketInstance.SocketInstance){
                SocketInstance.SocketInstance = new SocketInstance(server)
            }
            return SocketInstance.SocketInstance   
    }
}
