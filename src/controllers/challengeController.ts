import express, { NextFunction } from "express"
import { DB } from "../dataLayer/DB"
import { IChallenge, Challenge } from '../dataLayer/models/challenge';
import { AdminHelper } from "../helpers/adminHelper";
import  _ from "underscore"

const router : express.Router = express.Router()

router.put("/challenge/adminupdatechallenge",(req,res,next) =>{
  AdminHelper.updateEntity("Challenge",req.body,res,next)
})

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

router.post('/challenge/createchallenge', async (req : any, res : any, next : NextFunction) => {
    try{
      console.log(req.body)
      const challenge : IChallenge = new DB.Models.Challenge({
        challengeName: req.body.challengeName,
        gameName : req.body.gameName,
        reward : req.body.reward,
        active : req.body.active
      })
         try{
          let _challenge = await challenge.save()
          DB.Models.Game.updateOne({name : _challenge.gameName}, {$push : {challenges : _challenge._id}},async (err : any,game : any) =>{
              if(game.n != 1){
                DB.Models.Challenge.findByIdAndDelete(_challenge._id)
                const error = new Error(`Game by the name: ${_challenge.gameName} does not exist` )
                res.status(404)
                next(error)
              }else{
                res.send(_.omit(_challenge.toJSON(),"__v"))
              }
          })   
        }catch(e)
        {
          const error = new Error("challenge already exists or the game does not exist")
          res.status(401)
          next(error)
        }    
    } catch(e){
      const error = new Error("Internal Server Error")
      res.status(500)
      next(error)
    }
});

export default router
