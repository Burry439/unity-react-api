import{ Schema, model, Document, Model } from 'mongoose'

export interface IText extends Document {
  language : string,
  pageName : string,
  key : string,
  value : string

}

export interface TextModel extends Model<IText>{};

export class Text {
  private _model: Model<IText>;

    constructor() {
        const schema =  new Schema({
            language: { type: String, required: true},
            pageName: { type: String, required: true},
            key: { type: String, required: true},
            value: { type: String, required: true}
        });
        this._model = model<IText>('Text', schema);
    }

    public get model(): Model<IText> {
        return this._model
    }
}