const generalHelpers = {
    isNullOrEmpty(object : any){
        if(object === null || object === "" || object === undefined){
            return true
        } 
        else {
            return false
        }
    },
    isEmptyArray(array: any){
      if(Array.isArray(array) && array.length == 0)
        {
            return true
        }
        else {
            return false
        }
    } ,
    isArrayOfObjects(array: any){
        let isArrayOfObjects = true
        array.forEach((element: any) =>{
            if(typeof(element) != "object"){
                isArrayOfObjects = false
            }
        })
        return isArrayOfObjects
    }
}


export default generalHelpers