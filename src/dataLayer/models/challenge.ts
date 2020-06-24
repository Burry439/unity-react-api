import{ Schema, model, Document, Model } from 'mongoose'

export interface IChallenge extends Document {
  challengeName: string
  gameName : string
  reward : number
  active : boolean
}

export interface ChallengeModel extends Model<IChallenge>{};

export class Challenge {
  private _model: Model<IChallenge>;

    constructor() {
        const schema =  new Schema({
            challengeName: { type: String, required: true, unique: true },
            gameName: { type: String, required: true},
            reward: { type: Number, required: true},  
            active: { type: Boolean, required: true}
        });

        this._model = model<IChallenge>('Challenge', schema);
    }

    public get model(): Model<IChallenge> {
        return this._model
    }
}