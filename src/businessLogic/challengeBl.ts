
import { gameConnection } from "../interfaces/gameConnection";
import RoomData from "../interfaces/roomData";
import { DB } from "../dataLayer/DB";
import { Request, Response } from "express";
import ChallengeData from "../interfaces/challengeData";

export default class ChallengeBl {
    public static async challengeComplete(challengeData : ChallengeData) {
        try{
          console.log("challengeData: ", challengeData)
            await DB.Models.Challenge.findOne({challengeName : challengeData.challengeName}, async (err : any,challenge : any) =>{
              console.log(challenge)
                await DB.Models.User.findOneAndUpdate({_id: challengeData.userId, completedChallenges: {$nin: challenge._id }},
                   {
                     $addToSet : {completedChallenges : challenge._id},
                     $inc : {tickets: challenge.reward}
                   }, {new:true},async (err : any,user : any) =>{
                    if(err){
                        return err
                    }     
                    console.log("user: ", user)
                     if(user){
                      return await challenge
                     } 
                     else{
                       return null
                     }
                })
             })  
            } catch(e){
            return e
        }
    }

}

      

