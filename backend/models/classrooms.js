// import mongoose module
const mongoose = require("mongoose");
// create match schema (attributes)
const classroomsSchema=mongoose.Schema({
    students:Object,
})
// create model ( PascalCase)
const classrooms=mongoose.model("Classrooms",classroomsSchema)
module.exports=classrooms;