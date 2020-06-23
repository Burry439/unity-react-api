
import socketIo, { Socket } from 'socket.io';
import { Server } from 'http';
import Game from './game';
import ReactSocketListener from './reactSocketListener';
import UnitySocketListener from './unitySocketListener';
import RoomData  from '../interfaces/roomData';

export default class SocketInstance {
    private io : SocketIO.Server
    private static SocketInstance : SocketInstance 
    public gameInstance : Game =  Game.getGameInstance();
    public userId : string;
    constructor(server : Server) {
        this.io = socketIo(server)
        this.io.on("connection", (socket : SocketIO.Socket) =>{
            console.log("connection")

            socket.on("ReactConnected",(roomData : RoomData) =>{
                new ReactSocketListener(socket, roomData)
            })

            socket.on("UnityConnection",async (roomData : RoomData) =>{
                //const gameData = await this.getGameData(roomData.gameName)
                new UnitySocketListener(socket, roomData)
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