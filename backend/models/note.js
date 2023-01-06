// import mongoose module
const mongoose = require("mongoose");
// create match schema (attributes)
const noteSchema=mongoose.Schema({
    idStudent:String,
    score:Number
})
// create model ( PascalCase)
const note=mongoose.model("Note",noteSchema)
module.exports=note;