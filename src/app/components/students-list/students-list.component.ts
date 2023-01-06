import { Route, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';


@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent implements OnInit {
 
  students:any
 
  constructor(private studentService:StudentService,private router:Router) { }

  ngOnInit() {
    this.studentService.displayAllStudents().subscribe(
      (data)=>{
        this.students=data.studentsTable;   
      }     
    )
  }
  deleteStudent(id) {
    this.studentService.deleteStudentById(id).subscribe((data) => {
      this.studentService.displayAllStudents().subscribe((data) => {
        this.students = data.studentsTable;
      });
    });
  }
  editStudent(id) {
    this.router.navigate([`edit-student/${id}`]);
  }
  signout(){
    window.localStorage.clear();
    this.router.navigate([""])
  }

}
