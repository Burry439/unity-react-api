
import { gameConnection } from "../interfaces/gameConnection";
import RoomData from "../interfaces/roomData";
import { DB } from "../dataLayer/DB";
import { Request, Response } from "express";
import ChallengeData from "../interfaces/challengeData";
import { IChallenge } from "../dataLayer/models/challenge";

export default class ChallengeBl {

  private static ChallengeBlInstance : ChallengeBl;

    public async challengeComplete(challengeData : ChallengeData) : Promise<IChallenge> {
        try{
          console.log("challengeData: ", challengeData)
            return await DB.Models.Challenge.findOne({challengeName : challengeData.challengeName},  (err : any,challenge : any) =>{
                 DB.Models.User.findOneAndUpdate({_id: challengeData.userId, completedChallenges: {$nin: challenge._id }},
                   {
                     $addToSet : {completedChallenges : challenge._id},
                     $inc : {tickets: challenge.reward}
                   }, {new:true}, (err : any,user : any) =>{
                    if(err){
                        return err
                    }     
                    console.log("user: ", user)
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

    public static getChallengeBlInstance(): ChallengeBl  {
      if(!ChallengeBl.ChallengeBlInstance){
        ChallengeBl.ChallengeBlInstance = new ChallengeBl()
      }
      return  ChallengeBl.ChallengeBlInstance
  }

}

      

