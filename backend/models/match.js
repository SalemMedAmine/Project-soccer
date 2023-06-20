// import mongoose  
const mongoose = require("mongoose");

// creat match schema
const matchSchma = mongoose.Schema({
    scoreOne: Number,
    scoreTwo: Number,
    teamOne: String,
    teamTwo: String
});

// creat modele name
const match = mongoose.model("Match", matchSchma);

// make match exportable 
module.exports = match;