import queryStringHelper from '../helpers/queryStringHelpers';
import express from "express"
import bcrypt from "bcryptjs"
import { DB } from "../dataLayer/DB"
import {IUser, User} from "../dataLayer/models/user"
import jwt, { JsonWebTokenError } from "jsonwebtoken"
import { Session } from 'inspector';
import LoginSignUpRespone from '../dataLayer/interfaces/LoginSignUpRespone';
import { Challenge, IChallenge } from '../dataLayer/models/challenge';
import { Schema } from 'mongoose';

const router : express.Router = express.Router()

// router.post("/challenge/challengeCompleted", async (req : any, res : any) =>{
//     console.log(req.body)
//       try{
//         DB.Models.Challenge.findOne({challengeName : req.body.challengeName}, (err,challenge) =>{
//            DB.Models.User.updateOne({_id: req.body.userId, completedChallenges: {$nin: req.body.challengeId }},
//               {
//                 $addToSet : {completedChallenges : challenge._id},
//                 $inc : {tickets: challenge.reward}
//               },(err,user) =>{
//             if(err) throw err
//            })
//           res.send("done")
//         })
        
//       } catch(e){
//         res.send(e)
//       }
// })

router.post('/challenge/createChallenge', async (req : any, res : any) => {
    try{
      const challenge : IChallenge = new DB.Models.Challenge({
        challengeName: req.body.challengeName,
        gameName : req.body.gameName,
        reward : req.body.reward,
        active : req.body.active
      })
         try{
          let _challenge = await  challenge.save()
          console.log(_challenge)
          DB.Models.Game.updateOne({name : _challenge.gameName}, {$push : {challenges : _challenge._id}},(err,game) =>{
            console.log(game)
          })
          res.send("done")
           
        
        }catch(e)
        {
          console.log(e)
          res.status(401).send("challenge already exists")
        }    
    } catch(e){
      res.status(500).send(e);
    }
});

export default router
