import { DB } from "../dataLayer/DB"
import { Response, NextFunction } from "express";
import { Types } from "mongoose";

export class AdminHelper{
    public static async getEntity(entityType : string, field : string, value : any, skip : any, limit : any, exclude : any[], res : Response,next : NextFunction){
        let filter : any = {}
       //having problem using regex with id this is a quik fix
       if(field && value) {
        if(field == "_id" && value.length == 24){
          filter[field] = Types.ObjectId(value)
        }
        else if(parseInt(value)) {
          filter[field] = value
        }
        else {
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
               res.status(200).send( {entities : entities, totalCount : totalCount,exclude : exclude})
                // if we do not find something send just the fields to client
              }else{
               let headerFields : any = {}
                Object.keys(DB.AdminModels[entityType].schema.paths).forEach((field : any) =>{
                    headerFields[field] = field
                })
                const headers = [headerFields]
                res.status(200).send( {headers : headers, totalCount : totalCount, exclude : exclude})
              }
            })
          })
        }catch(err){
          res.status(500)
          const error = new Error("ADMIN ERROR: something went wrong in try catch")
          return next(error)
        } 
    }

    public static async updateEntity(entityType : string, entity : any,res : Response,next : NextFunction){
      try{
        DB.AdminModels[entityType].findByIdAndUpdate(entity._id, { $set: entity },{new: true}, (err : Error,entity : any) =>{
          if(err){
            const error = new Error(`something went wrong`)
            res.status(500)
            next(error)
          }
          else if(!entity){
            const error = new Error(`whoops cant find that ${entityType}`)
            res.status(404)
            next(error)
          }
          else{
            console.log(`updated ${entityType}: ${entity}`  )
            res.send(entity)
          }
      })
      }catch{
        const error = new Error(`something went wrong`)
        res.status(500)
        next(error)
      }
    }

}