
import { gameConnection } from "../interfaces/gameConnection";
import RoomData from "../interfaces/roomData";
import { DB } from "../dataLayer/DB";
import { Request, Response } from "express";
import ChallengeData from "../interfaces/challengeData";

export default class ChallengeBl {
    public static async challengeComplete(challengeData : ChallengeData) {
        try{
            await DB.Models.Challenge.findOne({challengeName : challengeData.challengeName}, (err : any,challenge : any) =>{
              console.log(challenge)
                DB.Models.User.findOneAndUpdate({_id: challengeData.userId, completedChallenges: {$nin: challenge._id }},
                   {
                     $addToSet : {completedChallenges : challenge._id},
                     $inc : {tickets: challenge.reward}
                   }, {new:true},(err : any,user : any) =>{
                    if(err){
                        return err
                    }     
                     if(user){
                      return challenge
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

      

