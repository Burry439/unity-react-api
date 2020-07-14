import jwt from "jsonwebtoken"
import { DB } from "../dataLayer/DB"
import bcrypt from "bcryptjs"
import { IUser } from "../dataLayer/models/user"
import LoginSignUpRespone from "../interfaces/LoginSignUpRespone"
import _ from "underscore"

export default class UsereBl {

    public static async login (username : string, password : string, language :string) {
        try{
            const user : IUser = await DB.Models.User.findOne({username : username}).populate("completedChallenges")
            const errorMessage : string = language == "en" ?`username or password is incorrect` : "הודעת שגיאה בעברית"
            if(user === null){
                throw new Error(errorMessage)
            }
            if(await bcrypt.compare(password, user.password)){
                const accessToken : String = this.generateAccessToken(user)
                const respone : LoginSignUpRespone = {user : user, accessToken : accessToken} 
                return respone;
            }else{
                throw new Error(errorMessage)
            }
        }catch(e){
            throw e
        }
    }

    public static async signUp(email : string, username : string, password : string){
        const hashedPassword : String = await bcrypt.hash(password, 10)
        const user : IUser = new DB.Models.User ({
            email: email,
            username: username,
            password: hashedPassword,
            tickets : 0
        })
        try{
            await user.save();
            const accessToken : String = this.generateAccessToken(user)
            const respone : LoginSignUpRespone = {user : user, accessToken : accessToken} 
            return respone
        }catch(err){
            const field : string = err.message.split('.$')[1].split(' dup key')[0]
            throw new Error(`looks like someone already used that ${field.substring(0, field.lastIndexOf('_'))}`)
        }
    }

    public static async createUser(email : string, username : string, password : string){
        const hashedPassword : String = await bcrypt.hash(password, 10)
        const user : IUser = new DB.Models.User({
            email: email,
            username: username,
            password: hashedPassword,
            tickets : 0
        })
        try{
            await user.save()
            return user
        }catch(err){
            const field : string = err.message.split('.$')[1].split(' dup key')[0]
            throw new Error(`looks like someone already used that ${field.substring(0, field.lastIndexOf('_'))}`)
        }    
    } 
    
    private static generateAccessToken (user : IUser){
        return jwt.sign(user.toJSON(),process.env.ACCESS_TOKEN_SECRET, {expiresIn: "15s"})
    }
}

      

