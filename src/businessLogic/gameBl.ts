import { DB } from "../dataLayer/DB"
import { IGame } from "../dataLayer/models/game"

export default class GameBl {

    public static async getGame(gameName : string){
        try{
            const game : IGame = await DB.Models.Game.findOne({gameName : gameName}).populate("challenges")
            if(!game){
                throw new Error(`cant find a game by the name: ${game}`)
            }
            return game
        }catch(e){
            throw e
        }
    }

    public static async getGames(){
        try{
            const games : IGame[] = await DB.Models.Game.find().populate("challenges")
            if(!games){
                throw new Error(`cant find any games`)
            }
            return games
        }catch(e){
            throw e
        }
    }

    public static async createGame(gameName : string){
        const game : IGame = new DB.Models.Game({
            gameName: gameName,
            challenges :[],
        })
        try{
            await game.save();
            return game
        }catch(e){
            throw new Error("Looks like this game already exists")
        }   
    }
}

      

