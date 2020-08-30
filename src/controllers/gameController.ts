import express, { NextFunction, Request, Response } from "express"
import { IGame } from '../dataLayer/models/game';
import GameBl from "../businessLogic/gameBl";
import AuthHelper from "../helpers/authHelper";

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

router.get('/game/getGames',  async (req: Request, res: Response, next: NextFunction) => {
	try{
		const games : IGame[] = await GameBl.getGames()
		res.send(games)
	}catch(e){
		res.status(500)
		next(e)
	}
});

router.post('/game/createGame', AuthHelper.authenticateToken, AuthHelper.authenticateAdmin, async (req: Request, res: Response, next: NextFunction) => {
	try{
		const game : IGame = await GameBl.createGame(req.body.gameName);
		res.send(game)
	}catch(e){
		res.status(500)
		next(e)
	}
});

export default router
