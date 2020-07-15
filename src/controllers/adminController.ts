import express, { NextFunction, Request, Response } from "express"
import AdminBl from "../businessLogic/adminBl"


const router : express.Router = express.Router()

router.get("/admin/get",async(req: Request, res: Response, next: NextFunction) =>{
	try{
		const respone = await AdminBl.getEntity(req.query.entityType, req.query.field,req.query.value, req.query.skip,  req.query.limit,  req.query.exclude)
		res.send(respone)
	}catch(e){
		res.status(500)
    	next(e)
	}
})

router.put("/admin/update", async (req: Request, res: Response, next: NextFunction) =>{
	try{
		const response  = await AdminBl.updateEntity(req.query.entityType,req.body)
		res.send(response)
	}catch(e){
		res.status(500)
    	next(e)
	}
})



export default router
