import { DB } from "../dataLayer/DB"
import { Response, NextFunction } from "express";
import { Types } from "mongoose";



export class AdminHelper{
    public static async getEntity(entityType : string, field : string, value : string, skip : string, limit : string, exclude : string[], res : Response,next : NextFunction){
        let filter : any = {}
       //having problem using regex with id this is a quik fix
       if(field && value) {
        console.log(value.length)
        if(field == "_id" && value.length == 24){
          filter[field] = Types.ObjectId(value)
        }else if(field != "_id") {
          filter[field] = {"$regex" : value,"$options": "i"}
        }            
      }

        try{
            await DB.AdminModels[entityType].find(filter, {}, { skip: parseInt(skip), limit: parseInt(limit)}, async (err : Error,entities : any) =>{
            if(err){
            const error = new Error("ADMIN ERROR: something went wrong in DB.AdminModels[entityType].find")
            res.status(500)
            return next(error)
            }
            let totalCount;
             await DB.AdminModels[entityType].countDocuments(filter,(err : Error,count : number) =>{
              if(err) {
              res.status(500)
              const error = new Error("ADMIN ERROR: DB.AdminModels[entityType].countDocuments")
              return next(error)
              }
              totalCount = count
              // if we found something send it to client
              if(totalCount > 0 && entities.length){               
               res.status(200).send( {entities : entities, totalCount : totalCount})
                // if we do not find something send just the fields to client
              }else{
               let headerFields : any = {}
                Object.keys(DB.AdminModels[entityType].schema.paths).forEach((field : any) =>{
                    headerFields[field] = field
                })
                const headers = [headerFields]
                res.status(200).send( {headers : headers, totalCount : totalCount})
              }
            })
          }).select(exclude.map((field) : string => `-${field}`))
        }catch(err){

          res.status(500)
          const error = new Error("ADMIN ERROR: something went wrong in try catch")
          return next(error)
        } 
    }
}