import queryStringHelper from '../helpers/queryStringHelpers';
import express, { NextFunction } from "express"
import bcrypt from "bcryptjs"
import { DB } from "../dataLayer/DB"
import {IUser, User} from "../dataLayer/models/user"
import jwt, { JsonWebTokenError } from "jsonwebtoken"
import { Session } from 'inspector';
import LoginSignUpRespone from '../dataLayer/interfaces/LoginSignUpRespone';
import { Challenge, IChallenge } from '../dataLayer/models/challenge';
import { Schema } from 'mongoose';
import { IGame } from '../dataLayer/models/game';
import { AdminHelper } from '../helpers/adminHelper';

const router : express.Router = express.Router()

router.get("/game/admingetgames", async (req,res, next : NextFunction) =>{
  await AdminHelper.getEntity("Game", req.query.field,req.query.value, req.query.skip,  req.query.limit,  ["challenges","__v"], res , next)
})

router.get("/game/adminupdategame", async (req,res, next : NextFunction) =>{
  AdminHelper.updateEntity("Game",req.body,res,next)
})

router.get("/game/getGame", async (req,res) =>{
  console.log(req.query)
    try{
      DB.Models.Game.findOne({name : req.query.gameName}, (err : any,game : any) =>{
        console.log(game)
        if(err) res.send(err)
        res.send(game)
     })
  }catch(e){
    res.send(e)
  }

})

router.post('/game/createGame', async (req : any, res : any,next) => {
  console.log(req.body)
    try{
      const game : IGame = new DB.Models.Game({
        name: req.body.name,
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
