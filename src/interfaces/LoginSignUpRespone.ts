import { IUser } from "../dataLayer/models/user";

export default interface LoginSignUpRespone {
    user: IUser;
    accessToken : String
}