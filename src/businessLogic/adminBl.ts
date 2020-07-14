import { DB } from "../dataLayer/DB"
import { Response, NextFunction } from "express";
import { Types } from "mongoose";

export default class AdminBl{
  
    public static async getEntity(entityType : string, field : string, value : any, skip : any, limit : any, exclude : any[]){
        entityType =  capitalize(entityType)
        const filter : any = {}
       //having problem using regex with id this is a quick fix
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
        try {
            const entities = await  DB.AdminModels[entityType].find(filter, {}, { skip: parseInt(skip), limit: parseInt(limit)})
            const totalCount = await DB.AdminModels[entityType].countDocuments(filter);
            if(totalCount > 0 && entities.length){
                return {entities : entities, totalCount : totalCount,exclude : exclude}
            }else{
                const headerFields : any = {}
                Object.keys(DB.AdminModels[entityType].schema.paths).forEach((field : any) =>{
                    headerFields[field] = field
                })
                const headers = [headerFields]
                return {headers : headers, totalCount : totalCount, exclude : exclude}
            }
        }catch(e){
            throw e
        }
    }

    public static async updateEntity(entityType : string, entity : any){
        entityType =  capitalize(entityType)
        try{
            const updatedEntity = await  DB.AdminModels[entityType].findByIdAndUpdate(entity._id, { $set: entity },{new: true})
            if(!updatedEntity){
                throw new Error(`whoops cant find that ${entityType}`)
            }
            return updatedEntity
        }catch(e){
            throw e
        }
    
    }
}

const capitalize = (str : string) =>{
    return str.charAt(0).toUpperCase() == str ? str :  str.charAt(0).toUpperCase() + str.slice(1)
}