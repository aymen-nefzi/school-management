import { StudentsPerTeacherComponent } from './../students-per-teacher/students-per-teacher.component';
import { StudentService } from './../../services/student.service';
import {  Router } from '@angular/router';
import { TestService } from './../../services/test.service';
import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-test',
  templateUrl: './add-test.component.html',
  styleUrls: ['./add-test.component.css']
})
export class AddTestComponent implements OnInit {
  addTestForm:FormGroup;
  test:any={};
  displayTest:any;
  ConnectedUser:any;
  idTeacherConnected:any;
  students:any=[];
  reponses:any=[];
  note=[]
 
  constructor(private testService:TestService,private route:Router,private studentService:StudentService,private router:Router ) { }

  ngOnInit() {
    this.ConnectedUser=JSON.parse(localStorage.getItem("ConnectedUser"))
    this.idTeacherConnected=this.ConnectedUser._id
    this.studentService.displayAllStudents().subscribe((data)=>{
      var x =data.studentsTable
      for (let i = 0; i < x.length; i++) {
        if ((x[i].speciality==this.ConnectedUser.speciality) &&(x[i].level==this.ConnectedUser.level)) {
          this.students[i]=x[i]
        }
        
      }
       
    })
    this.testService.displayNote().subscribe((data)=>{
      this.note=data.noteTable
      for (let i = 0; i < this.note.length; i++) {
        for (let j = 0; j < this.students.length; j++) {
          if (this.students[j]._id==this.note[i].idStudent) {
            this.students[j].note=this.note[i].score ;
            break;
           
          }
        }
       }     
    }) 
    this.testService.getReponse().subscribe((data)=>{
      
      this.reponses=data.reponseTable
      for (let j = 0; j < this.students.length; j++) {
        if (this.students[j]._id==this.reponses[j].idStudent) {
          this.students[j].reponse=this.reponses[j].reponse ;
        
         
        }
      }
    })
  }
  addTest(){
    this.test.idTeacher=this.idTeacherConnected;
    console.log("here data :",this.test);
    this.testService.addTest(this.test).subscribe()
   
    
  }
  displayTests(){
    this.testService.displayTests().subscribe((data)=>{
      this.displayTest=data.testsTable
    })
  }
  deleteStudent(id) {
    this.studentService.deleteStudentById(id).subscribe((data) => {
      this.studentService.displayAllStudents().subscribe((data) => {
        this.students = data.studentsTable;
      });
    });
  }
  signout(){
    localStorage.clear();
    this.router.navigate([""])
  }

}
