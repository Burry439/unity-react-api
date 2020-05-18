import queryStringHelper from '../helpers/queryStringHelpers';
import express from "express"
import bcrypt from "bcryptjs"
import { DB } from "../dataLayer/DB"
import {IUser, User} from "../dataLayer/models/user"
import jwt, { JsonWebTokenError } from "jsonwebtoken"
import { Session } from 'inspector';
import LoginSignUpRespone from '../dataLayer/interfaces/LoginSignUpRespone';

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


const authenticateToken = (req : any,res :any,next : Function) =>{
  const authHeader = req.headers["authorization"]
  console.log(authHeader)
  const token = authHeader && authHeader.split(' ')[1]
  console.log(token)
  if(token == null) return res.sendStatus(401)
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err : any,user : any) =>{
    console.log(user)
    if(err) return res.sendStatus(403)
    req.user = user
    next()
  })
}

router.post('/users/login', async (req : any, res : any) => {
  const user : any = await DB.Models.User.findOne({username : req.body.username})
  console.log(user)
    if(user === null){
      return res.status(404).send("cannot find user")
    }
    try{
      console.log(req.body.password, user.password)
      if(await bcrypt.compare(req.body.password, user.password)){
        const accessToken : String = generateAccessToken(user)
        const respone : LoginSignUpRespone = {user : user, accessToken : accessToken} 
        res.json(respone)
      }else{
        res.status(401).send("incorrect Password")
      }
    } catch(e){
      console.log(e)
      res.status(500).send(e);
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
        password: hashedPassword
      })
         try{
          await user.save();
          const accessToken : String = generateAccessToken(user.toJSON())
          const respone : LoginSignUpRespone = {user : user, accessToken : accessToken} 
          res.send(respone)
        }catch{
          res.status(401).send("duplicate user")
        }    
    } catch(e){
      res.status(500).send(e);
    }


});

export default router
