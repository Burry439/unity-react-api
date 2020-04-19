import models from "./models/baseModel"

const getModel = (modelType : string) =>{
    if(Object.keys(models).includes(modelType)){
        return models[modelType]
    }
    
}

const dataAccess = {

    async get(modelType : any, filters : any, fields : any = {}, skip : any = 0, limit : any = 1)
    {
        const model = getModel(modelType)
        const response =  await model.find(JSON.parse(filters), fields, {skip:skip, limit:limit})
        return response
    },

    async post(modelType : any, entity : any )
    {

        const model = getModel(modelType)
        const res =  await model(entity).save()
        return res
    },


    async update(modelType : any, filters : any, entity : any)
    {
        const model =  require(`./models/${modelType}`)
        const res = await model.updateMany(filters, entity)
        return res
    },

    async delete(modelType : any, filters : any)
    {
        const model =  require(`./models/${modelType}`)
        const res = await model.remove(filters)
        return res
    }
}

export default dataAccess