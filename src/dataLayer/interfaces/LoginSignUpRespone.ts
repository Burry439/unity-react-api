import { IUser } from "../models/user";

export default interface LoginSignUpRespone {
    user: IUser;
    accessToken : String
}