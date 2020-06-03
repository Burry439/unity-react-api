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

router.get("/game/getgames", async (req,res) =>{
  try{
    await DB.Models.Game.find(req.headers.params, (err,games) =>{
      if(err) res.status(err.status).send("Something went wrong")
      res.send(games)
    })
  }catch(err){
    res.status(err.status).send("Something went wrong")
  }
})
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
