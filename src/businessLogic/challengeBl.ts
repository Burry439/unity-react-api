

import { DB } from "../dataLayer/DB";
import { IChallenge } from "../dataLayer/models/challenge";
import  _ from "underscore"

export default class ChallengeBl {

    public static async createChallenge(challenge : IChallenge) {
        const newChallenge : IChallenge = new DB.Models.Challenge(challenge)
        console.log("newChallenge: " + newChallenge)
        try{
            await newChallenge.save()  
        }catch(e){
            throw new Error("Looks like challenge already exists")
        }
        try{
            const game = await DB.Models.Game.updateOne({gameName : newChallenge.gameName}, {$push : {challenges : newChallenge._id}}) 
            if(game.n != 1){
           
            await DB.Models.Challenge.findByIdAndDelete(newChallenge._id)
            throw new Error ("Looks like that game doesnt exists")
            } else{
            return newChallenge
            }     
        }catch(e)
        {
            throw new Error(e)
        }    
    }
}

      

