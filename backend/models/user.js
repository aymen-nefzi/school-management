// import mongoose module
const mongoose = require("mongoose");
// create match schema (attributes)
const userSchema=mongoose.Schema({
    firstName:String,
    lastName:String,
    email:String,
    cin:Number,
    speciality:String,
    level:String,
    students:Object,
    Tel:Number,
    role:String,
    password:String,
    idTeacher:String,
    note:Number,
    reponse:Number,
    
})
// create model ( PascalCase)
const user=mongoose.model("User",userSchema)
module.exports=user;