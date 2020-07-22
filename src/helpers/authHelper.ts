import { Response, NextFunction, Request } from "express";
import jwt from "jsonwebtoken"

export default class AuthHelper{
    
    public static  authenticateToken = (req: Request, res: Response, next: NextFunction) =>{
        const token : string =  req.session.jwt
        if(token == null) return res.sendStatus(401)
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err : Error,user : any) =>{
              if(err) return res.sendStatus(403)
              //req.user = user
              next()
        })
    }
    
    public static  authenticateAdmin = (req: Request, res: Response, next: NextFunction) => {
        const role : string =  req.session.role
        if(role == null || role != "admin") {
            return res.sendStatus(401)
        } else {
            next()
        }
    }
}