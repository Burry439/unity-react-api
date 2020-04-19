//import * as mongoose from 'mongoose'
import mongoose from 'mongoose';
import User from '../../socketIO/SocketInterfaces/user';

    const userSchema = new mongoose.Schema({    
         username :  mongoose.Schema.Types.String,
    });


export default mongoose.model<User>('users',  userSchema)