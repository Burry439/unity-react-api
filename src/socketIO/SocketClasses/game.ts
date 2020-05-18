import Player from "./player";
import PlayerDisconnected from "../SocketInterfaces/playerDisconnect";

export default class Game {

    private static GameInstance : Game;
    private playerId : string;
    private players : Player[]

    private constructor(){
        this.players = []
    }


    public removePlayerAfterSignOut(playerId : string){
        this.players.forEach((player : Player, i : number) =>{
            if(player.id == playerId) {      
                //remove the disconnected player player from players array
                this.players.splice(i, 1)              
            }
        })
    }

    public getPlayers() : Player[] {
        return this.players
    }

    public getThisPlayer(playerId : string) : Player {
       return this.players.find((player : Player) =>{
          return player.id == playerId
       })
    }

    public getEmptyPlayer() : Player{
        return this.getPlayers().find((player : Player) =>{
            console.log("getEmptyPlayer")
            console.log(player)
            console.log("getEmptyPlayer")
            player.connectedToUnity == false
        })
    }

    public static getGameInstance(): Game  {
        if(!Game.GameInstance){
            Game.GameInstance = new Game()
        }

        return Game.GameInstance
    }

    public isFistPlayer () : boolean {
        return this.players.length == 0 
    }


    public isDuplicatePlayer(userId : string) : boolean{
        console.log("in is duplicate player")
        //assume its not a duplicate
        let isDuplicate : boolean = false
        console.log(this.players)
        this.players.forEach((player : Player) =>{
            //if we find a duplicate add one to it instance count
            if(player.id == userId){
                isDuplicate = true      
            }
        })
        return isDuplicate
    }

    public addToInstanceCount(playerId : string) : void{
        this.players.find((player : Player) =>{
            if(player.id == playerId){
                player.instanceCount++ 
            }
        })
    }


    public addNewPlayerFromReact (username : string,userId : string) : Player {
        const newPlayer : Player = new Player(username,userId)
        this.players.push(newPlayer)
        console.log("after adding new player")
        console.log(this.players)
        return newPlayer
    }

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

    public disconnectedFromReact(playerId : string) : PlayerDisconnected{
       
        let disconnectPlayer : boolean = false; 
        let disconnectedPlayer : Player;
        this.players.forEach((player : Player, i : number) =>{
            if(player.id == playerId) {
            //if this player disconected but is still active on a diffrent tab
             if(player.instanceCount > 1){
                 player.instanceCount --
             }
             else{
                 disconnectPlayer = true
                 disconnectedPlayer = player
                 //remove the disconnected player player from players array
                 this.players.splice(i, 1)
             }
            }        
        })
        //return the disconnected player
        return {   
            disconnectPlayer : disconnectPlayer,
            player : disconnectedPlayer
        }
    }
}

      

