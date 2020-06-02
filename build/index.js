"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var path_1 = __importDefault(require("path"));
var body_parser_1 = __importDefault(require("body-parser"));
var dotenv_1 = __importDefault(require("dotenv"));
var http_1 = __importDefault(require("http"));
var cors_1 = __importDefault(require("cors"));
var baseController_1 = __importDefault(require("./controllers/baseController"));
dotenv_1.default.config();
var ExpressServer = /** @class */ (function () {
    function ExpressServer() {
        // mongoose.connect ( process.env.MONGODB_URI,  { useNewUrlParser: true,   useCreateIndex: true, useUnifiedTopology: true } )
        // mongoose.connection.on ( 'error' , console.error.bind ( console , 'connection error:' ) )
        this.app = express_1.default();
        this.router = express_1.default.Router();
        /* set the body parser */
        this.app.use(body_parser_1.default.json({ 'limit': '50mb' }));
        this.app.use(body_parser_1.default.urlencoded({ 'extended': true, 'limit': '50mb' }));
        this.app.use(cors_1.default({ 'origin': '*', 'methods': ['*', 'DELETE', 'GET', 'OPTIONS', 'PATCH', 'POST'], 'allowedHeaders': ['*', 'authorization', 'content-type'] }));
        this.app.use(this.router);
        this.app.use('/', baseController_1.default);
        this.app.use("/", express_1.default.static("build/frontend"));
        this.app.get('/*', function (req, res) {
            console.log("herer");
            res.sendFile(path_1.default.join("build/frontend/index.html"), function (err) {
                if (err) {
                    res.status(500).send(err);
                }
            });
        });
        this.server = http_1.default.createServer(this.app);
        this.server.listen(process.env.PORT || 8080);
        console.log('=====================================');
        console.log('it worked');
        console.log('SERVER SETTINGS:');
        console.log("Server running at - localhost:" + process.env.PORT);
        console.log("DB - " + process.env.MONGODB_URI);
        console.log('=====================================');
    }
    ExpressServer.initSerever = function () {
        return new ExpressServer();
    };
    return ExpressServer;
}());
ExpressServer.initSerever();
//# sourceMappingURL=index.js.map