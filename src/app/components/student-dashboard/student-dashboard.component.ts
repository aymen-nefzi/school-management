import { FormGroup } from '@angular/forms';
import { TestService } from './../../services/test.service';

import { TeacherService } from './../../services/teacher.service';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.css']
})
export class StudentDashboardComponent implements OnInit {
idStudent:any;
student:any;
test2:any={};
object:any={};
teacher:any={};
teacherValid:any={};
displayTest:any=[{}];
testFinal:any=[];
answer:any;
submitTestForm:FormGroup;
tableauReponse=[];
questionReponse:any={
  question:"",
  reponse:""
};
tQuestionReponse=[];
noteStudent={
  idStudent:"",
  score: 0
};
score:number=0;



  constructor(private teacherService:TeacherService,private testService:TestService,private router:Router) { }

  ngOnInit() {
    this.student = JSON.parse(localStorage.getItem("ConnectedUser"));
    this.object.level=this.student.level;
    this.object.speciality=this.student.speciality;
    this.teacherService.displayAllTeachers().subscribe((data)=>{
      this.teacher=data.teachersTable
      for (let i = 0; i < this.teacher.length; i++) {
        if ((this.teacher[i].level==this.object.level)&&(this.teacher[i].speciality==this.object.speciality)) {
          this.teacherValid.id=this.teacher[i]._id
          break;
        }   
    }
    })
    
    this.testService.displayTests().subscribe((data)=>{
      this.displayTest=data.testsTable
     console.log(this.displayTest);
     console.log(this.teacherValid.id);
     
       for (let i = 0; i < this.displayTest.length; i++) {
        if (this.displayTest[i].idTeacher==this.teacherValid.id) {
            // this.testFinal[i]=this.displayTest[i] 
             this.testFinal.push(this.displayTest[i] ) 
            
        }       
       }
 console.log(this.testFinal);
 
      
  })
  
  
  
  
  
  }
  submitTest(){

   for (let i = 0; i < this.tableauReponse.length; i++) {
    
    this.questionReponse={
     question : this.testFinal[i].question,
     reponse : this.tableauReponse[i],
    }
    this.tQuestionReponse.push(this.questionReponse);

   }
   for (let i = 0; i < this.testFinal.length; i++) {
      if (this.tQuestionReponse[i].question==this.testFinal[i].question) {
        if (this.tQuestionReponse[i].reponse==this.testFinal[i].answer) {
          this.score+=4
        }
      }
    
   }
   this.testService.addReponse(this.tableauReponse,this.student._id).subscribe()

   this.idStudent=this.student._id
   this.noteStudent.idStudent=this.idStudent
   this.noteStudent.score=this.score
   this.testService.addNote(this.noteStudent).subscribe()
  


  }
  signout(){
    localStorage.clear();
    this.router.navigate([""])
  } 

}
