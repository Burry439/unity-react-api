import express, { NextFunction, Request, Response } from "express"
import {IUser} from "../dataLayer/models/user"
import LoginSignUpRespone from '../interfaces/LoginSignUpRespone';
import  UserBl  from '../businessLogic/userBl';
import  _ from "underscore"
import AuthHelper from "../helpers/authHelper";

const router : express.Router = express.Router()

router.post('/user/login', async (req: Request, res: Response, next: NextFunction) => {
	try{
		const language : string = req.headers.language as string
		const loginRespone : LoginSignUpRespone = await UserBl.login(req.body.username,req.body.password,language)
		req.session.jwt = loginRespone.accessToken
		req.session.username = loginRespone.user.username,
		req.session.role = loginRespone.user.role
 		res.json(loginRespone.user)
	}catch(e){
		res.status(404)
		next(e)
	}
});

router.get('/user/getUser', AuthHelper.authenticateToken, async (req: Request, res: Response, next: NextFunction) => {
	try{
		console.log(req.session)
		const language : string = req.headers.language as string
		const user : IUser = await UserBl.getUser(req.session.username,language)
		res.send(user)
	}catch(e){
		res.status(404)
		next(e)
	}
});


router.get('/user/logout', async (req: Request, res: Response, next: NextFunction) => {
	try{
		req.session.destroy(() =>{
			res.send("done")
		})
	}catch(e){
		res.status(404)
		next(e)
	}
});

router.post('/user/createuser', async (req: Request, res: Response, next: NextFunction) =>{
	try{
		const user : IUser = await UserBl.createUser(req.body.email,req.body.username,req.body.password, req.body.role)
		res.send(_.omit(user.toJSON(), "completedChallenges","__v", "password"))
	}catch(e){
		res.status(401)
		next(e)
	}
})

router.post('/user/signup', async (req: Request, res: Response, next: NextFunction) => {
	try{
		const signupResponse : LoginSignUpRespone = await UserBl.signUp(req.body.email,req.body.username,req.body.password)
		req.session.jwt = signupResponse.accessToken
		req.session.username = signupResponse.user.username
		req.session.role = signupResponse.user.role
		res.send(signupResponse.user)
	}catch(e){
		res.status(404)
		next(e)
	}
})



export default router


//for when i get around to authorization


// const posts = [
// 	{
// 	  username : "burry",
// 	  title : "Post 1"
// 	},
// 	{
// 	  username : "notBurry",
// 	  title : "Post 1"
// 	}
//   ]

// router.get("/user/test", authenticateToken, (req : any,res : any) =>{
//   res.json(posts.filter(post => post.username == req.user.username))
// })

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
  