import dataAccess from '../dataLayer/dataAccess'


 const UserBl = {
    async postUsers(entityType  : any, entity : any){
      const res =  await dataAccess.post(entityType , entity)
      return res
   }

}

export default UserBl