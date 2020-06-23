import express, { Request, Response, NextFunction } from 'express'
import path from "path"
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import http, { Server } from 'http'
import cors from 'cors'
import controllers from "./controllers/baseController";
import SocketInstance from "./socketIo/socketInstance";

dotenv.config()

class ExpressServer {
    private app: express.Application;
    private router : express.Router;
    private server : Server;
    public socketInstance : SocketInstance;
    constructor(){

      this.app  = express () 
      this.router = express.Router () 
    
      /* set the body parser */
      this.app.use ( bodyParser.json ( { 'limit' : '50mb' } ) )
      this.app.use ( bodyParser.urlencoded ( { 'extended' : true , 'limit' : '50mb' } ) )
      this.app.use ( cors ( { 'origin' : '*' , 'methods' : [ '*' , 'DELETE' , 'GET' , 'OPTIONS' , 'PATCH' , 'POST' ] , 'allowedHeaders' : [ '*' , 'authorization' , 'content-type', 'Content-Language', 'Expires', 'Last-Modified', 'Pragma'] } ) )
      this.app.use(this.router)
      this.app.use ( '/' , controllers )
      this.app.use ("/", express.static ("build/frontend") )
      this.app.use( '/game', express.static('build/games'))
      this.app.use((err : Error,req : Request,res :Response,next : NextFunction) =>{
        res.send(err.toString())
      })

      this.app.get('/*', function(req, res) {
          //come up with better soulutions
          res.sendFile(path.join("build/frontend/index.html"),{ root: process.env.ROOT_FOLDER }, function(err) {
            if (err) {
              res.status(500).send(err)
            }
          })
        })
  
      this.server   = http.createServer ( this.app )
      this.server.listen ( process.env.PORT || 8080 )
      //this.socketInstance = SocketInstance.getSocketInstance(this.server)
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
