// import mongoose  
const mongoose = require("mongoose");

// creat user schema
const userSchma = mongoose.Schema({
    firstName: String,
   lastName: String,
    email: String,
    pwd: String,
    avatar:String
});

// creat user name
const user = mongoose.model("User", userSchma);

// make match exportable 
module.exports = user;