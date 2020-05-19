import express from 'express'
import mongoose from 'mongoose'
import path from "path"
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import http, { Server } from 'http'
import cors from 'cors'
import SocketInstance from "./socketIO/socketInstance"
import controllers from "./controllers/baseController";
dotenv.config()

class ExpressServer {
    public socketInstance : SocketInstance;
    private app: express.Application;
    private router : express.Router;
    private server : Server;
    constructor(){
        // mongoose.connect ( process.env.MONGODB_URI,  { useNewUrlParser: true,   useCreateIndex: true, useUnifiedTopology: true } )
        // mongoose.connection.on ( 'error' , console.error.bind ( console , 'connection error:' ) )
        this.app  = express () 
        this.router = express.Router () 
    
        /* set the body parser */
        this.app.use ( bodyParser.json ( { 'limit' : '50mb' } ) )
        this.app.use ( bodyParser.urlencoded ( { 'extended' : true , 'limit' : '50mb' } ) )
    
        this.app.use ( cors ( { 'origin' : '*' , 'methods' : [ '*' , 'DELETE' , 'GET' , 'OPTIONS' , 'PATCH' , 'POST' ] , 'allowedHeaders' : [ '*' , 'authorization' , 'content-type' ] } ) )
    
        this.app.use(this.router)
    
        this.app.use ( '/' , controllers )
     
        this.app.use ("/", express.static ( __dirname  + "/frontend") )
    
        this.app.get('/*', function(req, res) {
            console.log("herer")
            res.sendFile(path.join(__dirname  + "/frontend/index.html"), function(err) {
              if (err) {
                res.status(500).send(err)
              }
            })
          })

        this.server   = http.createServer ( this.app )
        this.server.listen ( process.env.PORT || 8080 )
        this.socketInstance = SocketInstance.getSocketInstance(this.server) 
        console.log ( '=====================================' )
        console.log ( 'SERVER SETTINGSbbbb:' )
        console.log ( `Server running at - localhost:${ process.env.PORT }` )
        console.log ( `DB - ${ process.env.MONGODB_URI }` )
        console.log ( '=====================================' )
    }

    public static initSerever() : ExpressServer{
        return new ExpressServer()
    }
}

ExpressServer.initSerever()
