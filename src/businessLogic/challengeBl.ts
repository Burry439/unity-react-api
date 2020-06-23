
import { gameConnection } from "../interfaces/gameConnection";
import RoomData from "../interfaces/roomData";
import { DB } from "../dataLayer/DB";
import { Request, Response } from "express";
import ChallengeData from "../interfaces/challengeData";
import { IChallenge } from "../dataLayer/models/challenge";
import { IUser } from "../dataLayer/models/user";

export default class ChallengeBl {

  private static ChallengeBlInstance : ChallengeBl;

    public static async challengeComplete(challengeData : ChallengeData) : Promise<IChallenge> {
        try{
          console.log("challengeData: ", challengeData)
                const challenge  = await DB.Models.Challenge.findOne({challengeName : challengeData.challengeName})  
                const user = await DB.Models.User.findOneAndUpdate({_id: challengeData.userId, completedChallenges: {$nin: challenge._id }},{
                  $addToSet : {completedChallenges : challenge._id},
                  $inc : {tickets: challenge.reward}
                }, {new:true})

                console.log(user)
                if(user != null){
                  return challenge
                }

            } catch(e){
            return e
        }
    }
}

      

