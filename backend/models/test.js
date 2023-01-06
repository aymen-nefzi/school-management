// import mongoose module
const mongoose = require("mongoose");
// create match schema (attributes)
const testSchema=mongoose.Schema({
    idTeacher:String,
    question:String,
    option1:String,
    option2:String,
    option3:String,
    answer:String,
})
// create model ( PascalCase)
const test=mongoose.model("Test",testSchema)
module.exports=test;