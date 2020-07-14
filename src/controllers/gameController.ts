import express, { NextFunction } from "express"
import { DB } from "../dataLayer/DB"
import { IGame } from '../dataLayer/models/game';
import  AdminBl  from '../businessLogic/adminBl';

const router : express.Router = express.Router()

router.get("/game/admingetgames", async (req,res, next : NextFunction) =>{
  await AdminBl.getEntity("Game", req.query.field,req.query.value, req.query.skip,  req.query.limit,  ["challenges","__v"], res , next)
})

router.put("/game/adminupdategame", async (req,res, next : NextFunction) =>{
  AdminBl.updateEntity("Game",req.body,res,next)
})

router.get("/game/getGame", async (req,res) =>{
  console.log("in get game: " + req.query.gameName)
  req.query.gameName
    try{
      DB.Models.Game.findOne({gameName : req.query.gameName}, (err : any,game : any) =>{
        console.log(game)
        if(err) res.send(err)
        res.send(game)
     }).populate("challenges")
  }catch(e){
    res.send(e)
  }
})

router.post('/game/createGame', async (req : any, res : any,next) => {
  console.log(req.body)
    try{
      const game : IGame = new DB.Models.Game({
        gameName: req.body.gameName,
        challenges :[],
      })
          await game.save((err,game) =>{   
            if(err){
              const error = new Error("Looks like this game already exists")
              res.status(500)
              next(error)
            }else{
              res.send(game)
            }
          });
    } catch(e){
      const error = new Error("Internal server error")
      res.status(500)
      next(error)
    }
});

export default router
