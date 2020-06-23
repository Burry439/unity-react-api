import Game from "./game";
import RoomData from "../interfaces/roomData";
import { GameData } from "../interfaces/gameData";
import ChallengeData from "../interfaces/challengeData";
import ChallengeBl from "../businessLogic/challengeBl"
export default class UnitySocketListener {
    socket : SocketIO.Socket
    roomData : RoomData
    gameInstance : Game
    challengeBl : ChallengeBl
    constructor(_socket : SocketIO.Socket, _roomData : RoomData){
        this.socket = _socket
        this.gameInstance = Game.getGameInstance()
        this.challengeBl = ChallengeBl.getChallengeBlInstance()
        this.roomData = _roomData;
        
        //if thee are no avalible react clients
        if(!_roomData.userId){
            console.log("in if no id if")
            this.socket.emit("sendToErrorPage",{})
        } else {
            console.log("in else")
            this.gameInstance.addUnitySocketToGameConnection(_roomData, this.socket);
            this.socket.join(this.roomData.gameName + "/" + this.roomData.userId)
    
            this.socket.on("challengeCompleted", async (challengeData : ChallengeData) =>{
                const challenge = await this.challengeBl.challengeComplete(challengeData)
                console.log("challenge: ", challenge)
                if(challenge){
                    //send to react
                    this.socket.to(this.roomData.gameName + "/" + this.roomData.userId).emit("challengeCompleted", challenge)
                }else{
                    console.log("challenge already completed")
                }
            })
        }
    }
}
