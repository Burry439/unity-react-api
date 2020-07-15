import { DB } from "../dataLayer/DB"
import { IText } from "../dataLayer/models/text"

export default class TextBl {

    public static async getPageText(language : string, page : string){
        try{
            const pageText : any = {}
            const texts : IText[] = await DB.Models.Text.find({pageName : page, language : language})
            texts.forEach((text) =>{
                pageText[text.key] = text.value
            })
            return JSON.stringify(pageText)
        }catch(e){
            throw new Error("Cant find the that language");
        }
        
    }

    public static async createText(language : string, pageName : string,  key : string, value : string){
        const text : IText = new DB.Models.Text({
            language : language,
            pageName : pageName,
            key : key,
            value : value
        })
        try{
            await text.save();
            return text
        }catch(e){
            console.log(e)
            throw new Error("whoops something went wrong while creating that text")
        }   
    }
}

      

