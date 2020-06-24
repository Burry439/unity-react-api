import express, { NextFunction } from "express"
import { DB } from "../dataLayer/DB"
import { IChallenge, Challenge } from '../dataLayer/models/challenge';
import  AdminBl  from "../businessLogic/adminBl";
import  _ from "underscore"
import ChallengeBl from "../businessLogic/challengeBl";

const router : express.Router = express.Router()

router.put("/challenge/adminupdatechallenge",(req,res,next) =>{
  console.log(req.headers.language)
  AdminBl.updateEntity("Challenge",req.body,res,next)
})

router.get("/challenge/admingetchallenges", async (req,res,next : NextFunction) =>{
  await AdminBl.getEntity("Challenge", req.query.field,req.query.value, req.query.skip,  req.query.limit,  ["__v"], res,next)
})

router.post("/challenge/challengeCompleted", async (req : any, res : any,next : NextFunction) =>{    
  try{
       const userId = req.body.userId
       const challenge = req.body.challenge
       await DB.Models.User.findOneAndUpdate({_id: userId, completedChallenges: {$nin: challenge._id }},
          {
            $addToSet : {completedChallenges : challenge._id},
            $inc : {tickets: challenge.reward}
          }, {new:true},(err : any,user : any) =>{
            console.log("in update user: ", user)
            if(user){
              res.send(challenge)
            } 
            else{
              res.send(null)
            }
        if(err){
          console.log(err)
        }
       })    
  } catch(e){
    res.send(e)
  }
})

router.post('/challenge/createchallenge', async (req : any, res : any, next : NextFunction) => {
    try{
    const challenge : IChallenge = await ChallengeBl.createChallenge(req.body)
    console.log(challenge)
    res.send(challenge)
  }catch(e){
    console.log("in error")
      res.status(500)
      next(e)
  }
});

export default router
