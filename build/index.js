"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var mongoose_1 = __importDefault(require("mongoose"));
var body_parser_1 = __importDefault(require("body-parser"));
var dotenv_1 = __importDefault(require("dotenv"));
var http_1 = __importDefault(require("http"));
var cors_1 = __importDefault(require("cors"));
var socketIO_1 = __importDefault(require("./socketIO/socketIO"));
var baseController_1 = __importDefault(require("./controllers/baseController"));
dotenv_1.default.config();
var instance = (function () {
    console.log(process.env);
    mongoose_1.default.connect(JSON.stringify(process.env.MONGODB_URI), { useNewUrlParser: true, useUnifiedTopology: true });
    var app = express_1.default();
    var router = express_1.default.Router();
    /* set the body parser */
    app.use(body_parser_1.default.json({ 'limit': '50mb' }));
    app.use(body_parser_1.default.urlencoded({ 'extended': true, 'limit': '50mb' }));
    app.use(cors_1.default({ 'origin': '*', 'methods': ['*', 'DELETE', 'GET', 'OPTIONS', 'PATCH', 'POST'], 'allowedHeaders': ['*', 'authorization', 'content-type'] }));
    app.use(router);
    app.use('/', baseController_1.default);
    app.use(express_1.default.static(__dirname));
    var server;
    server = http_1.default.createServer(app);
    server.listen(8080);
    socketIO_1.default(server);
    console.log('=====================================');
    console.log('SERVER SETTINGSgg :');
    console.log("Server running at - localhost:" + process.env.PORT);
    console.log("DB - " + process.env.MONGODB_URI);
    console.log('=====================================');
})();
//# sourceMappingURL=index.js.map