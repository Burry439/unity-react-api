import express, { NextFunction, Request, Response } from "express"
import { IGame } from '../dataLayer/models/game';
import  AdminBl  from '../businessLogic/adminBl';
import GameBl from "../businessLogic/gameBl";

const router : express.Router = express.Router()

router.get("/game/getGame", async (req: Request, res: Response, next: NextFunction) =>{
	try{
		const game : IGame = await GameBl.getGame(req.query.gameName)
		res.send(game)
	}catch(e){
		res.status(404)
		next(e)
	}
})

router.post('/game/createGame', async (req: Request, res: Response, next: NextFunction) => {
	try{
		const game : IGame = await GameBl.createGame(req.body.gameName);
		res.send(game)
	}catch(e){
		res.status(500)
		next(e)
	}
});

export default router
