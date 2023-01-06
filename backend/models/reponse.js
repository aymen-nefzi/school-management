// import mongoose module
const mongoose = require("mongoose");
const { objectify } = require("tslint/lib/utils");
// create match schema (attributes)
const reponseSchema=mongoose.Schema({
    idStudent:String,
    reponse:Object
})
// create model ( PascalCase)
const reponse=mongoose.model("Reponse",reponseSchema)
module.exports=reponse;