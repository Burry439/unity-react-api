//const router = require('express').Router()
import dataAccess from '../dataLayer/dataAccess';
import queryStringHelper from '../helpers/queryStringHelpers';
import express from "express"

const router : express.Router = express.Router()

router.get('/users', (req : any, res : any) => {
 const queryParams = req.query
//const queryParams = queryStringHelper.normalizeQueryStringParams(req.query.queryParams)
  dataAccess.get(req.query.model, req.query.filter).then((result) =>{
    return res.send(result)
  })
});

router.post('/users', (req : any, res: any) => {  
  console.log(req.body)
const model = req.body.model
const entity = req.body.entity
console.log("here")
  dataAccess.post(model, entity).then((result) =>{
    return res.send(result)
  })
});

 router.put('/users', (req: any, res: any) => {
    const queryParams = queryStringHelper.normalizeUpdateAndDeleteQueryStringParams(req.query.queryParams)
    const fieldsToUpdate = req.body.fields
    dataAccess.update(queryParams.model, queryParams.filters, fieldsToUpdate).then((result) =>{
      return res.send(result)
   })
})
   
  
  router.delete('/users', (req: any, res: any) => {
    const queryParams = queryStringHelper.normalizeUpdateAndDeleteQueryStringParams(req.query.queryParams)
    dataAccess.delete(queryParams.model, queryParams.filters).then((result) =>{
         return res.send(result)
    })
})
export default router
