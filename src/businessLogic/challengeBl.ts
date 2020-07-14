

import { DB } from "../dataLayer/DB";
import { IChallenge } from "../dataLayer/models/challenge";

export default class ChallengeBl {

    public static async createChallenge(challenge : IChallenge) {
        const newChallenge : IChallenge = new DB.Models.Challenge(challenge)
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
            }
            else{
                return newChallenge
            }     
        }catch(e)
        {
            throw e
        }    
    }

    public static async challengeCompleted(userId : string, challenge : IChallenge) {
        try{
            const user = await DB.Models.User.findOneAndUpdate({_id: userId, completedChallenges: {$nin: challenge._id }},
                {
                 $addToSet : {completedChallenges : challenge._id},
                 $inc : {tickets: challenge.reward}
                }, {new:true})    
            if(!user){
                throw new Error("challenge already completed")
            }  
            return challenge 
       } catch(e){
            throw e
       }
    }

}

      

