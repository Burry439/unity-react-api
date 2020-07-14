import { connect, connection, Connection } from 'mongoose';
import { User, UserModel } from './models/user';
import { Game, GameModel } from './models/game';
import { Challenge, ChallengeModel } from './models/challenge';

declare interface IModels {
    User: UserModel ;
    Challenge : ChallengeModel;
    Game : GameModel

}

export class DB {

    private static instance: DB;
    
    private _db: Connection; 
    private _models: IModels;
    private _adminModels : any;
    
    private options = {
        useNewUrlParser: true,
        useCreateIndex: true,
        autoIndex: true, //this is the code I added that solved it all
        useFindAndModify: false,
        useUnifiedTopology: true
    }
    
    private constructor() {
        connect ( process.env.MONGODB_URI,  this.options )
        connection.on ( 'error' , console.error.bind ( console , 'connection error:' ) )
        this._db = connection;
        this._db.on('open', this.connected);
        this._db.on('error', this.error);

        this._models = {
            User: new User().model,
            Challenge: new Challenge().model,
            Game: new Game().model
        }

        this._adminModels = {
            User: this._models.User,
            Challenge: this._models.Challenge,
            Game:  this._models.Game
        }
    }

    public static get AdminModels() {
        if (!DB.instance) {
            DB.instance = new DB();
        }
        return DB.instance._adminModels;
    }

    public static get Models() {
        if (!DB.instance) {
            DB.instance = new DB();
        }
        return DB.instance._models;
    }

    private connected() {
        console.log('Mongoose has connected');
    }

    private error(error : Error) {
        console.log('Mongoose has errored', error);
    }
}
