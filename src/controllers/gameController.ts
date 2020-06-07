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
