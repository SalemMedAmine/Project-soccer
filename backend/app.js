// import express module
const express = require("express");
// import body parser module
const bodyParser = require("body-parser");
// imor bcrypt module
const bcrypt= require("bcrypt");

// import multer module
const multer = require("multer");
// import zxios module
const axios = require("axios");
// import path
const path=require ("path");
// import mongo module
const mongoose = require("mongoose");
mongoose.connect('mongodb://127.0.0.1:27017/projectSoccerDB');

// create app express
const app = express();

// modals import
const Match=require("./models/match");
const Team=require("./models/team");
const User=require("./models/user");
const Player=require("./models/player");
const player = require("./models/player");
// confi body-parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))



// Security configuration
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, Accept, Content-Type, X-Requested-with, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, DELETE, OPTIONS, PATCH, PUT"
  );
  next();
});

// shortcut path 
app.use('/images', express.static(path.join('backend/images')))
// sMedia Type
const MIME_TYPE = {
  'image/png': 'png',
  'image/jpeg': 'jpg',
  'image/jpg': 'jpg'
 }
// config multer
 const storageConfig= multer.diskStorage({
  // destination
  destination: (req, file, cb) => {
  const isValid = MIME_TYPE[file.mimetype];
  let error = new Error("Mime type is invalid");
  if (isValid) {
  error = null;
  }
  cb(null, 'backend/images')
  },
  filename: (req, file, cb) => {
  const name = file.originalname.toLowerCase().split(' ').join('-');
  const extension = MIME_TYPE[file.mimetype];
  const imgName = name + '-' + Date.now() + '-crococoder-' + '.' + 
 extension;
  cb(null, imgName);
  }
 });





// DB simulation 
let matchesTab=[
  
{id:1 ,scoreOne:1,scoreTwo:4,teamOne:"RMA",teamTwo:"Barca"},
{id:2 ,scoreOne:5,scoreTwo:3,teamOne:"milan",teamTwo:"juve"},
{id:3 ,scoreOne:0,scoreTwo:0,teamOne:"CA",teamTwo:"EST"},
{id:4 ,scoreOne:0,scoreTwo:0,teamOne:"City",teamTwo:"BAyern"},

]

function generateiD(T){
  let max;
  if (T.length == 0) {
    max =0;
  } else {
    max=T[0].id
  for (let i = 1; i < T.length; i++) {
    if (T[i].id> max ) {
      max=T[i].id
    }
    
  }
    
  }
  return max+1 ;
}



//   http://localhost:3000/matches
// BL all matches logic
app.get("/api/matches", (req, res) => {
  console.log("hereeeeeeeee intooooo BL matches");
  // res.status(200).json({ matches:matchesTab, message: "Here All MAtches})
  Match.find().then( (docs)=>{
  res.status(200).json({ matches:docs, message: "Here All MAtches"})});
})

// Function search
app.post("/api/matches/searchMatches",(req, res) => {
  console.log("hereeeeeeeee intooooo BL search matches  matches", req.body);
  Match.find({ 
    $or: [{ scoreOne: req.body.scoreOne }, { scoreTwo: req.body.scoreTwo }] }).then((docs)=>
  {res.json ({ findedMatch :docs })})

})

// Get weather from API

app.get("/api/weather/:city",(req,res)=>{
  console.log("here into Weather response",req.params.city);
  let apiKey = "62ee756a34835483299877a61961cafb";
 let apiUrl =
 "https://api.openweathermap.org/data/2.5/weather?q="+req.params.city+"&appid="+apiKey+"&units=metric";
 axios.get(apiUrl).then((weatherersponse)=>{
  let data=weatherersponse.data
let descritpion = data.weather[0].descritpion;
let icon = data.weather[0].icon;
let result={
temp:data.main.temp,
pressure:data.main.pressure,
humidity:data.main.humidity,
icon:icon,
descritpion:descritpion,
sunrise:data.sys.sunrise,
sunset:data.sys.sunset
};
res.status(200).json({ result:result })

});  
});





// BL get matche by id 

app.get("/api/matches/:id", (req, res) => {
  console.log("hereeeeeeeee intooooo BL Get matche by ID ");
  let id=req.params.id;
 
  Match.findOne({_id: id}).then((doc)=>{
    res.json({match:doc});
  })
  
  // let findedMatche=matchesTab.find((elt)=>{return elt.id==id;});
  // res.status(200).json({matche :findedMatche,
  //   message: "helloo match by " 
  // })
})



// BL delete matche by id

app.delete("/api/matches/:id", (req, res) => {
  console.log("hereeeeeeeee intooooo BL Delete matche by ID ");
  let id=req.params.id;
  Match.deleteOne({_id:id}).then((result)=>{
    console.log(("here response after delete",result));
    result.deletedCount==1
    ?   res.json({ message: "deleted with succes" })
     : res.json({ message: " not deleted" });
})
  // let isFounded=false;
  // for (let i = 0; i < matchesTab.length; i++) {
  //   if (matchesTab[i].id==id) {
  //     isFounded=true;
  //     matchesTab.splice(i,1)
      
  //   } 
  // }
  // if (isFounded) {
  //   res.status(200).json({
  //     message: "Sucess"
  //   })
    
  // } else {
  //   res.status(200).json({
  //     message: "Id not Found "
  //   })
    
  // } hey bidha hethi

  // isFounded ? res.status(200).json({ message: "Sucess"}) : res.status(200).json({message: "Not Found" })
  
})

// BL add match

app.post("/api/matches", (req, res) => {
  console.log("hereeeeeeeee intooooo BL ADD matche  ");
  let obj=new Match(req.body);
 obj.save();
  res.status(200).json({
    message: "ADDEd sucess matche"
  })
})

// BL Edit match
app.put("/api/matches", (req, res) => {
  console.log("hereeeeeeeee intooooo BL Edit matche  ",req.body);
  // for (let i = 0; i < matchesTab.length; i++) {
  //  if (matchesTab[i].id==req.body.id) {
  //   matchesTab[i]=req.body;
  //   res.json({
  //     message: " Edit Done"
  //   })
  //   break
  //  }
  // }
  let newMatch=req.body;
  Match.updateOne({_id : newMatch._id}, newMatch).then((result) => {
    result.nModified==1
    ?   res.json({ message: "Edited with succes" })
    : res.json({ message: " not Edited" });
  })
})

let teamsTab=[
  {id:1 ,name:"RMA",owner:"Perez",stadium:"Beranbeu"},
  {id:2 ,name:"Barca",owner:"Messi",stadium:"CampNeu"},
  {id:3 ,name:"EST",owner:"3li",stadium:"Rades"},
  
  ]
// BL all Teams logic
app.get("/api/teams", (req, res) => {
  console.log("hereeeeeeeee intooooo BL teams");
  res.status(200).json({ teams:teamsTab, message: "Here All teams"
  })
})

// BL get Team by id 

app.get("/api/teams/:id", (req, res) => {
  console.log("hereeeeeeeee intooooo BL Get team by ID ");
  let id=req.params.id;
  let findedTeam=teamsTab.find((elt)=>{return elt.id==id;});
  res.status(200).json({team :findedTeam,
    message: "helloo teams by " 
  })
})

// BL delete team by id

app.delete("/api/teams/:id", (req, res) => {
  console.log("hereeeeeeeee intooooo BL Delete team by ID ");
  let id=req.params.id;
  let isFounded=false;
  for (let i = 0; i < teamsTab.length; i++) {
    if (teamsTab[i].id==id) {
      isFounded=true;
      teamsTab.splice(i,1)
      
    } 
  }
 

  isFounded ? res.status(200).json({ message: "Sucess"}) : res.status(200).json({message: "Not Found" })
  
})
// BL add Team
app.post("/api/teams", (req, res) => {
  console.log("hereeeeeeeee intooooo BL ADD Team  ");
  let obj=new Team(req.body);
  obj.save((err,doc)=> {
    console.log("here error",err);
    console.log("adeed ith sucess");
    err ?  res.json({msg:"Error"}) :res.json({msg:"Added with sucess"})
  });
   
})



let playersTab=[
  {id:1 ,name:"RMA",owner:"Perez",stadium:"Beranbeu"},
  {id:2 ,name:"Barca",owner:"Messi",stadium:"CampNeu"},
  {id:3 ,name:"EST",owner:"3li",stadium:"Rades"},
  
  ]
// BL all players logic
app.get("/api/players", (req, res) => {
  console.log("hereeeeeeeee intooooo BL players");
  player.find().then((docs)=>{
    res.json({palyersTab:docs});
  });
});

// BL get player by id 

app.get("/api/players/:id", (req, res) => {
  console.log("hereeeeeeeee intooooo BL Get player by ID ");
  let id=req.params.id;
  player.findOne({_id : id}).then((doc)=>{
    res.json({palyer:doc});
  });
});

// BL delete player by id

app.delete("/api/players/:id", (req, res) => {
  console.log("hereeeeeeeee intooooo BL Delete player by ID ");
  let id=req.params.id;
  let isFounded=false;
  for (let i = 0; i < playersTab.length; i++) {
    if (playersTab[i].id==id) {
      isFounded=true;
      playersTab.splice(i,1)
      
    } 
  }
 

  isFounded ? res.status(200).json({ message: "Sucess"}) : res.status(200).json({message: "Not Found" })
  
})

// BL add player
app.post("/api/players", (req, res) => {
  console.log("hereeeeeeeee intooooo BL ADD player  ",req.body);
  let p= new Player(req.body);
  p.save();
  res.json({msg: "ADDEd sucessfully "
  })
})

// BL add UpDate Player
app.put("/api/players",(req,res)=>{
console.log("here into BL update one",req.body);
Player.updateOne({_id:req.body._id},req.body).then((response)=>{
  if (response.nModified==1) {
    res.json({msg :"Update sucessfuly"});
    
  } else {
    res.json({msg :"Nok"});
  }
})


});

// USER

// user
// BL user signup
app.post("/api/users/signup",multer({ storage: storageConfig }).single('img'), (req, res) => {
  bcrypt.hash(req.body.pwd , 8).then ((cryptedPwd)=>{
    console.log("here Crypted PWD", cryptedPwd);
    req.body.pwd=cryptedPwd;
    req.body.avatar=`${req.protocol}://${req.get("host")}/images/${req.file.filename}`;
    let user=new User(req.body)
     user.save((err,doc)=> {
     console.log("here error",err);
     console.log("USER adeed with sucess");
      err ?  res.json({msg:"Error"})
       :res.json({msg:"USER Added with sucess"});
    });
  });
});

// Bl login user
app.post("/api/users/login", (req, res) => {
  console.log("here into bl lgoin ",req.body);
  let user;
  User.findOne({email:req.body.email}).then((doc)=>{
    console.log("here doc",doc);
    user=doc;
    // send email
    if (!doc) {
      res.json({msg:"Please checkEmail"});
      
    } else {
      // check PWD
      return bcrypt.compare(req.body.pwd, doc.pwd);
      
    }
  })
  .then ((isEqual)=>{
    console.log("here equal", isEqual);
    if (!isEqual) {
      res.json({msg:"Check PWD"});
      
    } else {
      let userToSend={
        userID: user._id,
        email :user.email,
        fName:user.firstName
      };
      res.json({user:userToSend,msg:`Welcom ${user.firstName}`})
      
    }
  })
})
// Get user by id
app.get("/api/players/:id", (req, res) => {
  console.log("hereeeeeeeee intooooo BL Get matche by ID ");
  let id=req.params.id;
 
  User.findOne({_id:_id}).then((doc)=>{
    res.json({user:doc});
  })
});

// make app importable to other files
module.exports = app