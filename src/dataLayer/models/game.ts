import{ Schema, model, Document, Model } from 'mongoose'
const arrayUniquePlugin = require('mongoose-unique-array');

export interface IGame extends Document {
  gameName : string,
  challenges : Schema.Types.ObjectId[]
}

export interface GameModel extends Model<IGame>{};

export class Game {
  private _model: Model<IGame>;

    constructor() {
        const schema =  new Schema({
          gameName: { type: String, required: true,unique: true},
          challenges : [{type : Schema.Types.ObjectId, ref : "Challenge"}],
           
        });
        schema.plugin(arrayUniquePlugin);
        this._model = model<IGame>('Game', schema);
    }

    public get model(): Model<IGame> {
        return this._model
    }
}