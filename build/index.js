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
//import SocketInstance from "./socketIo/socketInstance";
dotenv_1.default.config();
var ExpressServer = /** @class */ (function () {
    //public socketInstance : SocketInstance;
    function ExpressServer() {
        this.app = express_1.default();
        this.router = express_1.default.Router();
        /* set the body parser */
        this.app.use(body_parser_1.default.json({ 'limit': '50mb' }));
        this.app.use(body_parser_1.default.urlencoded({ 'extended': true, 'limit': '50mb' }));
        this.app.use(cors_1.default({ 'origin': '*', 'methods': ['*', 'DELETE', 'GET', 'OPTIONS', 'PATCH', 'POST'], 'allowedHeaders': ['*', 'authorization', 'content-type', 'Content-Language', 'Expires', 'Last-Modified', 'Pragma'] }));
        this.app.use(this.router);
        this.app.use('/', baseController_1.default);
        this.app.use("/", express_1.default.static("build/frontend"));
        this.app.use('/game', express_1.default.static('build/games'));
        this.app.use(function (err, req, res, next) {
            res.send(err.toString());
        });
        this.app.get('/*', function (req, res) {
            //come up with better soulutions
            res.sendFile(path_1.default.join("build/frontend/index.html"), { root: process.env.ROOT_FOLDER }, function (err) {
                if (err) {
                    res.status(500).send(err);
                }
            });
        });
        this.server = http_1.default.createServer(this.app);
        this.server.listen(process.env.PORT || 8080);
        //this.socketInstance = SocketInstance.getSocketInstance(this.server)
        console.log('=====================================');
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