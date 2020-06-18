import queryStringHelper from '../helpers/queryStringHelpers';
import express, { NextFunction } from "express"
import bcrypt from "bcryptjs"
import { DB } from "../dataLayer/DB"
import {IUser, User} from "../dataLayer/models/user"
import jwt, { JsonWebTokenError } from "jsonwebtoken"
import { Session } from 'inspector';
import LoginSignUpRespone from '../dataLayer/interfaces/LoginSignUpRespone';
import { Challenge } from '../dataLayer/models/challenge';
import mongoose , { Schema } from 'mongoose';
import { AdminHelper } from '../helpers/adminHelper';
import  _ from "underscore"

const router : express.Router = express.Router()
const posts = [
  {
    username : "burry",
    title : "Post 1"
  },
  {
    username : "notBurry",
    title : "Post 1"
  }
]

const generateAccessToken = (user : any) =>{
  return jwt.sign(user.toJSON(),process.env.ACCESS_TOKEN_SECRET, {expiresIn: "15s"})
}
router.put("/user/adminupdateuser",(req,res,next) =>{
  AdminHelper.updateEntity("User",req.body,res,next)
})

router.get("/user/admingetusers", async (req,res, next : NextFunction) =>{
    await AdminHelper.getEntity("User", req.query.field, req.query.value, req.query.skip,  req.query.limit,  ["completedChallenges","__v", "password"], res,next)
})



const authenticateToken = (req : any,res :any,next : Function) =>{
  const authHeader = req.headers["authorization"]
  const token = authHeader && authHeader.split(' ')[1]
  if(token == null) return res.sendStatus(401)
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err : any,user : any) =>{
    if(err) return res.sendStatus(403)
    req.user = user
    next()
  })
}

// 
router.post('/user/login', async (req : any, res : any, next) => {
  const language = req.headers.language
  console.log(language)
  const user : any = await DB.Models.User.findOne({username : req.body.username}).populate("completedChallenges")
    if(user === null){
      let errorMessage = language == "en" ?`username or password is incorrect` : "הודעת שגיאה בעברית"
      const error = new Error(errorMessage)
      res.status(404)
      next(error)
    }
    try{
      if(await bcrypt.compare(req.body.password, user.password)){
        const accessToken : String = generateAccessToken(user)
        const respone : LoginSignUpRespone = {user : user, accessToken : accessToken} 
        res.json(respone)
      }else{
        const error = new Error("username or password is incorrect")
        res.status(404)
        next(error)
      }
    } catch(e){
      const error = new Error("internal error")
      res.status(500)
      next(error)
    }
  });

router.post('/user/createuser', async (req,res,next) =>{
  try{
    const hashedPassword : String = await bcrypt.hash(req.body.password, 10)
    const user : IUser = new DB.Models.User({
      email: req.body.email,
      username: req.body.username,
      password: hashedPassword,
      tickets : 0
    })
       try{
        await user.save((err, user) =>{ 
          if(err){
            const error = new Error("user already exists")
            res.status(401)
            next(error)
          }  
          else{
            res.send( _.omit(user.toJSON(), "completedChallenges","__v", "password"))
          }
        });
      
      }catch(e)
      {
        const error = new Error("user already exists")
        res.status(401)
        next(error)
      }    
  } catch(e){
    const error = new Error("Internal server error")
    res.status(500)
    next(error)
  }
})

router.post('/user/signup', async (req : any, res : any,next) => {
    try{
      const hashedPassword : String = await bcrypt.hash(req.body.password, 10)
      const user : IUser = new DB.Models.User ({
        email: req.body.email,
        username: req.body.username,
        password: hashedPassword,
        tickets : 0
      })
         try{
          await user.save();
          const accessToken : String = generateAccessToken(user)
          const respone : LoginSignUpRespone = {user : user, accessToken : accessToken} 
          res.send(respone)
        }catch(err){
          let field = err.message.split('.$')[1];
          // now we have `email_1 dup key`
          field = field.split(' dup key')[0];
          field = field.substring(0, field.lastIndexOf('_'));
          const error = new Error(`looks like someone already used that ${field}`)
          res.status(404)
          next(error)
        }
    } catch(e){
      const error = new Error(`internal error`)
      res.status(500)
      next(error)
    }

    // router.

    router.get("/user/test", authenticateToken, (req : any,res : any) =>{
      res.json(posts.filter(post => post.username == req.user.username))
  })
  


});

export default router


//for refrence 

//router.get("/user/getTickets", async (req,res) =>{
  //     const tickets = await DB.Models.User.aggregate([
  //       {
  //         $match : {_id : mongoose.Types.ObjectId(req.query.id)},
  //       },
  //       {
  //         $lookup : {from: "challenges",localField: "completedChallenges",foreignField: "_id", as: "doc_completedChallenges"}
  //       },
  //       {
  //         $group : {"_id" : "$doc_completedChallenges.reward"}
  //       },
  //       {
  //         $project : {"_id" : 0, totalTickets :  {"$sum": "$_id"}}
  //       },
  //     ])
  //     res.send(tickets[0])
  // })
  