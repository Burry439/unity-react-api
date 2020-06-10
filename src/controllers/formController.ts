import fs from 'fs'
import express from "express"
import { DB } from '../dataLayer/DB'
import  _ from "underscore"
import { promises } from 'dns'



const router : express.Router = express.Router()

router.post('/form/createform', (req,res,next) =>{
    try{
        let data = JSON.stringify(req.body.data)
        fs.writeFileSync( `${__dirname}/../reactForms/${req.body.formName}-${req.body.language}.json`, data)
        res.send("done")
    } catch{
        const error = new Error(`Internal Server Error` )
        res.status(500)
        next(error)
    }
})

router.get('/form/getform', async (req,res,next) =>{
    let deserializedData : any;
         fs.readFile(`${process.env.ROOT_FOLDER}/../reactForms/${req.query.formName}.json`, async (err, data : any) => {
            if (err){
                const error = new Error(`Cannot find form with name ${req.query.formName}` )
                res.status(404)
                return next(error)
            } 
            // deserialize Buffer
            deserializedData = JSON.parse(data.toString("utf-8"))
            // get options for select if we have one
            await Promise.all (deserializedData.fields.map(async (field:any, i: number) =>{
            if(field.type == "select"){
                let selectobject : any = {"_id" : 1}
                selectobject[field.displayname] = 1
                const entity = await DB.AdminModels[field.entity].find().select(selectobject)
                field.options = entity
            }
        }))
        res.send(deserializedData) 
    })
})
export default router


