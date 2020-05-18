import{ Schema, model, Document, Model } from 'mongoose'

export interface IUser extends Document {
  email: string;
  username: string;
  password: string;
}

export interface UserModel extends Model<IUser>{};

export class User {
  private _model: Model<IUser>;

    constructor() {
        const schema =  new Schema({
            email: { type: String, required: true, unique: true },
            username: { type: String, required: true, unique: true },
            password : {type : String, required: true}
           
   
        });

        this._model = model<IUser>('User', schema);
    }

    public get model(): Model<IUser> {
        return this._model
    }
}