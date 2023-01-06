// import express module
const express = require("express");
// import body parser module 
const bodyParser = require("body-parser");
// import mongoose module
const mongoose = require("mongoose");
// import bcrypt module
const bcrypt = require("bcrypt");
// connect app with Data Base (sportDB : DB Name)
mongoose.connect('mongodb://localhost:27017/ecoleDB')
// creates express application : app 
const app = express();
//  body-parser Configuration
// 1. Send response with JSON format
app.use(bodyParser.json());
// 2. Parse Request object
app.use(bodyParser.urlencoded({ extended: true }));
const User = require("./models/user");
const Classrooms = require("./models/classrooms");
const Test = require("./models/test");
const Note = require("./models/note");
const Reponse = require("./models/reponse");




// Security configuration
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, DELETE, OPTIONS, PATCH, PUT"
    );
    next();
  });

// import user model



// **********************************************
// add user buisness logic
app.post("/user/signup",(req,res)=>{
    bcrypt.hash(req.body.password, 10).then(
        (cryptedPwd) => {
            let user = req.body
            // insert user req.body into database (users)
            let userObj = new User({
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                cin: user.cin,
                Tel:user.phone,
                speciality:user.speciality,
                level:user.level,
                role: user.role,
                password: cryptedPwd,
                idTeacher: null,
                note: null,
                reponse: null,

            })

            userObj.save();
        }
    )



})
// login user buisness logic
// login par email
app.post("/user/login/email",(req,res)=>{ 
        User.findOne({ email: req.body.emailIdn})
        .then((response) => {
          if (!response) {
            res.json({ message: "0" });
          }
          return bcrypt.compare(req.body.password, response.password);
        })
        .then((responsePwd) => {
          if (!responsePwd) {
            res.json({ message: "1" });
          }
          User.findOne({ email: req.body.emailIdn}).then((finalResult) => {
           
                if (finalResult.role=="Student") {
                    res.json({ message: "Student",obj : finalResult });
                }else if (finalResult.role=="Teacher") {
                  
                  res.json({ message: "Teacher",obj : finalResult });
                }
            
          });
        });
    
      
  })
  // login par Cin
  app.post("/user/login/idn",(req,res)=>{
        User.findOne({cin:req.body.emailIdn})
        .then((response) => {
          if (!response) {
            res.json({ message: "0" });
          }
          return bcrypt.compare(req.body.password, response.password);
        })
        .then((responsePwd) => {
          if (!responsePwd) {
            res.json({ message: "1" });
          }
          User.findOne({cin:req.body.emailIdn}).then((finalResult) => {
           
                if (finalResult.role=="Student") {  
                    res.json({ message: "Student" });
                }else if (finalResult.role=="Teacher") {
                  res.json({ message: "Teacher" });
                }
            
          });
        });
    
      
  })
// login admin
  app.post("/user/admin",(req,res)=>{ 
    User.findOne({ email: req.body.email})
    .then((response) => {
      if (!response) {
        res.json({ message: "0" });
      }
      return bcrypt.compare(req.body.password, response.password);
    })
    .then((responsePwd) => {
      if (!responsePwd) {
        res.json({ message: "1" });
      }
      User.findOne({ email: req.body.email}).then((finalResult) => {
       
            if (finalResult.role=="admin") {
               
                res.json({ message: "admin" });
            }
        
      });
    });

  
})

// display all teachers buisness logic
app.get("/teachers", (req, res) => {
  
  User.find({role:"Teacher"}).then((docs) => {
    
      if (docs) {
          res.json({ teachersTable: docs })
      }
  })
})
// display all students buisness logic
app.get("/students", (req, res) => {
  
  User.find({role:"Student"}).then((docs) => {
    
      if (docs) {
          res.json({ studentsTable: docs })
      }
  })
})
// add students to teacher business logic
app.post("/teachers",(req,res)=>{
  
  let classroom = req.body
            // insert user req.body into database (users)
            let classroomObj = new Classrooms({        
                students:classroom
            })
            classroomObj.save();
})
// delete student by ID
app.delete("/students/:id", (req, res) => {

  User.deleteOne({ _id: req.params.id }).then((data)=>{
    res.json({message : data})
  });
});
// get student by id 
app.get("/students/:id", (req, res) => {
  User.findOne({ _id: req.params.id }).then((doc) => {
    if (doc) {
      res.json({ dispStudent: doc });
    }
  });
});
// edit student by id 
app.put("/students", (req, res) => {
  
  User.updateOne({ _id: req.body._id }, 
    req.body
    ).then((doc)=>{
      res.json({message : "Updated"})
    });
})
// delete teacher by ID
app.delete("/teachers/:id", (req, res) => {

  User.deleteOne({ _id: req.params.id }).then((data)=>{
    res.json({message : data})
  });
});
// get teacher by id 
app.get("/teachers/:id", (req, res) => {
  User.findOne({ _id: req.params.id }).then((doc) => {
    if (doc) {
      res.json({ foundTeacher: doc });
    }
  });
});
// edit teacher by id 
app.put("/teachers", (req, res) => {
  
  User.updateOne({ _id: req.body._id }, 
    req.body
    ).then((doc)=>{
      res.json({message : "Updated"})
    });
})
// display students with their teacher 
app.get("/teachers2/:id", (req, res) => {


   Classrooms.find({"students.idTeacher" : req.params.id}).then((doc)=>{
    if (doc) {
      res.json({studentsPicked : doc})
    }
   })
});
// add Test 
app.post("/test", (req, res) => {

  // insert user req.body into database (users)
  let test = new Test(req.body)
  test.save();

  });
  // get all Tests
app.get("/test", (req, res) => {
  Test.find().then((docs) => {
    
    if (docs) {
        res.json({ testsTable: docs })
    }
})

  });
// add note in DB 
app.post("/note",(req,res)=>{
            // insert not  into database (Test)
            let noteObj = new Note({        
                idStudent:req.body.idStudent,
                score:req.body.score
            })
            noteObj.save();
})
// get note from DB 
app.get("/note",(req,res)=>{
  Note.find().then((doc) => {
    if (doc) {
      res.json({noteTable: doc})
    }
  });
        
})
// add reponse of a student 
app.post("/reponse/:id", (req, res) => {

  // insert user req.body into database (users)
  let reponse = new Reponse({
    idStudent: req.params.id,
    reponse : req.body
  })
  reponse.save();

  });
  // get reponse from DB 
app.get("/reponse",(req,res)=>{
  Reponse.find().then((doc) => {
    if (doc) {
      res.json({reponseTable: doc})
    }
  });
        
})
module.exports = app;