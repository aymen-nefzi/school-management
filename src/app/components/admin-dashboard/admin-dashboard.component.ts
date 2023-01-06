import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';
import { TeacherService } from 'src/app/services/teacher.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  teachers:any
  students:any
  teacherStudents:any;
  chosenteacher:any
  clicked:string="0"
  selected:any;
  totalTeachers:Number;
  totalStudents:Number;
  constructor(private teacherService:TeacherService , private router:Router,private studentService:StudentService) { }
  object:any
  ngOnInit() {
    this.teacherService.displayAllTeachers().subscribe(
      (data)=>{
        
        this.teachers=data.teachersTable;
        this.totalTeachers=(this.teachers).length
      }
    )
    this.studentService.displayAllStudents().subscribe(
      (data)=>{
        this.students=data.studentsTable; 
        this.totalStudents=(this.students).length  
      }   
    )  
   

  }
  

  choose(id){
    this.studentService.displayAllStudents().subscribe(
      (data)=>{
        this.students=data.studentsTable;   
      }   
    )
    this.clicked="1"
    for (let i = 0; i < this.teachers.length; i++) {
      if (this.teachers[i]._id==id) {
        this.chosenteacher=this.teachers[i]._id
      }
    }
    localStorage.setItem("teacher",JSON.stringify(this.chosenteacher) );
    
  }

  submit(){
    var t = this.students
    .filter(opt => opt.checked)
    .map(opt => opt);
  this.selected = t; 
  for (let i = 0; i < this.selected.length; i++) {
    this.selected[i].idTeacher=this.chosenteacher
  }
  this.teacherService.addStudentsToTeacher(this.selected).subscribe();
 
  }

  signout(){
    localStorage.clear();
    this.router.navigate([""])
  }

}
