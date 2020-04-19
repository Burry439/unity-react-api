"use strict";
//import * as mongoose from 'mongoose'
var mongoose = require('mongoose');
var userSchema = new mongoose.Schema({
    username: mongoose.Schema.Types.String,
});
module.exports = mongoose.model('users', userSchema);
//# sourceMappingURL=users.js.map