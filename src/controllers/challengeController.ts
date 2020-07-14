import express, { NextFunction, Request, Response } from "express"
import { IChallenge } from '../dataLayer/models/challenge';
import  AdminBl  from "../businessLogic/adminBl";
import ChallengeBl from "../businessLogic/challengeBl";
import  _ from "underscore"

const router : express.Router = express.Router()

router.post("/challenge/challengeCompleted", async (req: Request, res: Response, next: NextFunction) =>{    
    try{
        const challenge : IChallenge = await ChallengeBl.challengeCompleted(req.body.userId,req.body.challenge)
        res.send(challenge)
    }catch(e){
      	res.status(500)
      	next(e)
    }
})

router.post('/challenge/createchallenge', async (req: Request, res: Response, next: NextFunction) => {
    try{
    	const challenge : IChallenge = await ChallengeBl.createChallenge(req.body)
    	res.send(challenge)
  	}catch(e){
      	res.status(500)
      	next(e)
  	}
});

export default router
