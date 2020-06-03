import express from 'express'
import mongoose from 'mongoose'
import path from "path"
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import http, { Server } from 'http'
import cors from 'cors'
import controllers from "./controllers/baseController";
dotenv.config()

class ExpressServer {
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
     
        this.app.use ("/", express.static ("build/frontend") )
    
        this.app.get('/', function(req, res) {
            //come up with better soulution
            res.sendFile(path.join("build/frontend/index.html"), function(err) {
              if (err) {
                res.status(500).send(err)
              }
            })
          })

        this.server   = http.createServer ( this.app )
        this.server.listen ( process.env.PORT || 8080 )
        console.log ( '=====================================' )
        console.log ( 'SERVER SETTINGS:' )
        console.log ( `Server running at - localhost:${ process.env.PORT }` )
        console.log ( `DB - ${ process.env.MONGODB_URI }` )
        console.log ( '=====================================' )
    }

    public static initSerever() : ExpressServer{
        return new ExpressServer()
    }
}

ExpressServer.initSerever()
