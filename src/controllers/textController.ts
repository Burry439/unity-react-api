import express, { NextFunction, Request, Response } from "express"
import { IText } from "../dataLayer/models/text";
import TextBl from "../businessLogic/textBl";


const router : express.Router = express.Router()

router.get("/text/getPageText",async (req : Request,res : Response, next : NextFunction) =>{
	try{
        const pageText : string = await TextBl.getPageText(req.query.language,req.query.page)
        res.send(pageText);
    }catch(e){
        res.status(500)
        next(e)
    }
})

router.post('/text/createText', async (req: Request, res: Response, next: NextFunction) => {
	try{
		const text : IText = await TextBl.createText(req.body.language, req.body.pageName, req.body.key, req.body.value);
		res.send(text)
	}catch(e){
		res.status(500)
		next(e)
	}
});
export default router
