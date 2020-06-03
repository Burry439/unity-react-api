import queryStringHelper from '../helpers/queryStringHelpers';
import express from "express"
import bcrypt from "bcryptjs"
import { DB } from "../dataLayer/DB"
import {IUser, User} from "../dataLayer/models/user"
import jwt, { JsonWebTokenError } from "jsonwebtoken"
import { Session } from 'inspector';
import LoginSignUpRespone from '../dataLayer/interfaces/LoginSignUpRespone';
import { Challenge } from '../dataLayer/models/challenge';
import mongoose , { Schema } from 'mongoose';

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


router.get("/user/getusers", async (req,res) =>{
  console.log("in useres")
  try{
    await DB.Models.User.find(req.headers.params, (err,users) =>{
      if(err) res.status(err.status).send("Something went wrong")
      res.send(users)
    })
  }catch(err){
    res.status(err.status).send("Something went wrong")
  }
})



const authenticateToken = (req : any,res :any,next : Function) =>{
  const authHeader = req.headers["authorization"]
  console.log(authHeader)
  const token = authHeader && authHeader.split(' ')[1]
  if(token == null) return res.sendStatus(401)
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err : any,user : any) =>{
    console.log(user)
    if(err) return res.sendStatus(403)
    req.user = user
    next()
  })
}

router.get("/users/getTickets", async (req,res) =>{
    const tickets = await DB.Models.User.aggregate([
      {
        $match : {_id : mongoose.Types.ObjectId(req.query.id)},
      },
      {
        $lookup : {from: "challenges",localField: "completedChallenges",foreignField: "_id", as: "doc_completedChallenges"}
      },
      {
        $group : {"_id" : "$doc_completedChallenges.reward"}
      },
      {
        $project : {"_id" : 0, totalTickets :  {"$sum": "$_id"}}
      },
    ])
    res.send(tickets[0])
})

router.post('/users/login', async (req : any, res : any) => {
  const user : any = await DB.Models.User.findOne({username : req.body.username}).populate("completedChallenges")
    if(user === null){
      return res.status(404 ).send("username or password is incorrect")
    }
    try{
      if(await bcrypt.compare(req.body.password, user.password)){
        const accessToken : String = generateAccessToken(user)
        const respone : LoginSignUpRespone = {user : user, accessToken : accessToken} 
        res.json(respone)
      }else{
        res.status(404).send("username or password is incorrect")
      }
    } catch(e){
      res.status(500).send("internal error");
    }
  });

router.get("/users/test", authenticateToken, (req : any,res : any) =>{
    res.json(posts.filter(post => post.username == req.user.username))
})

router.post('/users/signup', async (req : any, res : any) => {
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
          console.log(field)
          res.status(404).send(`looks like someone already used that ${field}`)
        }
    } catch(e){
      res.status(500).send("internal error");
    }
});

export default router
