import express, { Request, Response, NextFunction } from 'express'
import path from "path"
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import http, { Server } from 'http'
import cors from 'cors'
import controllers from "./controllers/baseController";
import session, { Store } from "express-session"
import { DB } from './dataLayer/DB'
import connectMongo, { MongoStoreFactory }  from "connect-mongo"
import { Connection } from 'mongoose'
import cookieParser from "cookie-parser"

dotenv.config()

class ExpressServer {
    private app: express.Application;
    private router : express.Router;
    private server : Server;
    constructor(){
      const connetion : Connection = DB.getConnection()
      const MongoStore : MongoStoreFactory = connectMongo(session)
      const sessionStore : Store = new MongoStore({
        mongooseConnection : connetion,
        collection : "sessions"
      })
      const cookieSettings = {httpOnly: true,  maxAge: 1000 *  60 * 60 * 24  }
  
      this.app  = express () 
      this.router = express.Router () 
      //this.app.use(cooddssskiePddarser())
      this.app.use(session({secret: process.env.SESSION_SECRET, unset: 'destroy', resave: false,saveUninitialized: false, cookie: {httpOnly: true,  maxAge: 1000 *  60 * 60 * 24, sameSite : "none" }, store : sessionStore}))
      this.app.use ( bodyParser.json ( { 'limit' : '50mb' } ) )
      this.app.use ( bodyParser.urlencoded ( { 'extended' : true , 'limit' : '50mb' } ) )
      this.app.use ( cors ( { 'origin' : '*' , 'methods' : [ '*' , 'DELETE' , 'GET' , 'OPTIONS' , 'PATCH' , 'POST' ] , 'allowedHeaders' : [ '*' , 'authorization' , 'content-type', 'Content-Language', 'Expires', 'Last-Modified', 'Pragma'] } ) )
      this.app.use(this.router)
      this.app.use ( '/' , controllers )
      this.app.use ("/", express.static ("build/frontend") )
      this.app.use((err : Error,req : Request,res :Response,next : NextFunction) =>{
        res.send(err.toString())
      })

      this.app.use("*", (req,res, next) =>{ 
        console.log("i all")
        if(!req.session.jwt){
          console.log("in if")
          req.session = null
        }else{
          next()
        }
      })

      this.app.get('/*', function(req, res) {
          res.sendFile(path.join("build/frontend/index.html"),{ root: process.env.ROOT_FOLDER }, function(err) {
            if (err) {
              res.status(500).send(err)
            }
          })
        })
  
      this.server   = http.createServer ( this.app )
      this.server.listen ( process.env.PORT || 8080 )
      console.log ( '====================================' )
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
