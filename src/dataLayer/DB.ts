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
    private options = {
        useNewUrlParser: true,
        useCreateIndex: true,
        autoIndex: true, //this is the code I added that solved it all
        keepAlive: true,
        poolSize: 10,
        bufferMaxEntries: 0,
        connectTimeoutMS: 10000,
        socketTimeoutMS: 45000,
        family: 4, // Use IPv4, skip trying IPv6
        useFindAndModify: false,
        useUnifiedTopology: true
      }
    private constructor() {
        connect ( process.env.MONGODB_URI,  { useNewUrlParser: true,   useCreateIndex: true, useUnifiedTopology: true, useFindAndModify : false, autoIndex : true} )
        connection.on ( 'error' , console.error.bind ( console , 'connection error:' ) )
        this._db = connection;
        this._db.on('open', this.connected);
        this._db.on('error', this.error);

        this._models = {
            User: new User().model,
            Challenge: new Challenge().model,
            Game: new Game().model
            // this is where we initialise all models
        }
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
