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
import { IGame } from '../dataLayer/models/game';

const router : express.Router = express.Router()

// router.post("/game/challengeCompleted", async (req : any, res : any) =>{
//       try{
//        await DB.Models.Challenge.findOne({challengeName : req.body.name}, (err,challenge) =>{
//            DB.Models.User.findOneAndUpdate({_id: req.body.userId, completedChallenges: {$nin: challenge._id }},
//               {
//                 $addToSet : {completedChallenges : challenge._id},
//                 $inc : {tickets: challenge.reward}
//               }, {new:true},(err,user) =>{
//                 console.log("in update user: ", user)
//                 if(user){
//                   res.send(challenge)
//                 } 
//                 else{
//                   res.send(null)
//                 }

//             if(err){
//               console.log(err)
//             }
//            })
//         })
        
//       } catch(e){
//         res.send(e)
//       }
// })

router.get("/game/getGame", async (req,res) =>{
  console.log(req.query)
    try{
      DB.Models.Game.findOne({name : req.query.gameName}, (err,game) =>{
        console.log(game)
        if(err) res.send(err)
        res.send(game)
     })
  }catch(e){
    res.send(e)
  }

})

router.post('/game/createGame', async (req : any, res : any) => {
  console.log(req.body)
    try{
      const game : IGame = new DB.Models.Game({
        name: req.body.name,
        challenges : req.body.challenges,
      })
         try{
          await game.save((err,game) =>{   
            console.log(game)
            res.send("game created")
          });
        
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
