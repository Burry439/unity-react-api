import { Document } from "mongoose";

export default interface User extends Document {
    id : string,
    username:string,
    prevId : number
}