// import mongoose  
const mongoose = require("mongoose");

// creat match schema
const teamSchma = mongoose.Schema({
    teamName: String,
    teamStadium: String,
    teamOwner: String,
    
});

// creat modele name
const team = mongoose.model("Team", teamSchma);

// make match exportable 
module.exports = team;