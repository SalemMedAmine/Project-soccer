// import mongoose  
const mongoose = require("mongoose");

// creat match schema
const playerSchma = mongoose.Schema({
    nbr: Number,
    age: Number,
    name: String,
    position: String
});

// creat modele name
const player = mongoose.model("Player", playerSchma);

// make player exportable 
module.exports = player;