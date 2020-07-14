"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DB = void 0;
var mongoose_1 = require("mongoose");
var user_1 = require("./models/user");
var game_1 = require("./models/game");
var challenge_1 = require("./models/challenge");
var DB = /** @class */ (function () {
    function DB() {
        this.options = {
            useNewUrlParser: true,
            useCreateIndex: true,
            autoIndex: true,
            useFindAndModify: false,
            useUnifiedTopology: true
        };
        mongoose_1.connect(process.env.MONGODB_URI, this.options);
        mongoose_1.connection.on('error', console.error.bind(console, 'connection error:'));
        this._db = mongoose_1.connection;
        this._db.on('open', this.connected);
        this._db.on('error', this.error);
        this._models = {
            User: new user_1.User().model,
            Challenge: new challenge_1.Challenge().model,
            Game: new game_1.Game().model
        };
        this._adminModels = {
            User: this._models.User,
            Challenge: this._models.Challenge,
            Game: this._models.Game
        };
    }
    Object.defineProperty(DB, "AdminModels", {
        get: function () {
            if (!DB.instance) {
                DB.instance = new DB();
            }
            return DB.instance._adminModels;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DB, "Models", {
        get: function () {
            if (!DB.instance) {
                DB.instance = new DB();
            }
            return DB.instance._models;
        },
        enumerable: false,
        configurable: true
    });
    DB.prototype.connected = function () {
        console.log('Mongoose has connected');
    };
    DB.prototype.error = function (error) {
        console.log('Mongoose has errored', error);
    };
    return DB;
}());
exports.DB = DB;
//# sourceMappingURL=DB.js.map