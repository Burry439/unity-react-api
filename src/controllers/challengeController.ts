import express, { NextFunction } from "express"
import { DB } from "../dataLayer/DB"

import { IChallenge } from '../dataLayer/models/challenge';
import { AdminHelper } from "../helpers/adminHelper";

const router : express.Router = express.Router()


router.get("/challenge/admingetchallenges", async (req,res,next : NextFunction) =>{
  await AdminHelper.getEntity("Challenge", req.query.field,req.query.value, req.query.skip,  req.query.limit,  ["__v"], res,next)
})

router.post("/challenge/challengeCompleted", async (req : any, res : any) =>{
  try{
   await DB.Models.Challenge.findOne({challengeName : req.body.challengeName}, (err : any,challenge : any) =>{
       DB.Models.User.findOneAndUpdate({_id: req.body.userId, completedChallenges: {$nin: challenge._id }},
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
    })
    
  } catch(e){
    res.send(e)
  }
})

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
          DB.Models.Game.updateOne({name : _challenge.gameName}, {$push : {challenges : _challenge._id}},(err : any,game : any) =>{
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
