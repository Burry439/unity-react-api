import{ Schema, model, Document, Model } from 'mongoose'
const arrayUniquePlugin = require('mongoose-unique-array');



export interface IUser extends Document {
  email: string;
  username: string;
  password: string;
  tickets: number;
  role: string;
  completedChallenges : Schema.Types.ObjectId[]
}

export interface UserModel extends Model<IUser>{};

export class User {
  private _model: Model<IUser>;

    constructor() {
        const schema =  new Schema({
            email: { type: String, required: true, unique: true },
            username: { type: String, required: true, unique: true },
            password : {type : String, required: true},
            tickets : {type : Number},
            role : {type : String, required: true},
            completedChallenges : [{type : Schema.Types.ObjectId, ref : "Challenge"}],
           
        });
        schema.plugin(arrayUniquePlugin);
        this._model = model<IUser>('User', schema);
    }

    public get model(): Model<IUser> {
        return this._model
    }
}