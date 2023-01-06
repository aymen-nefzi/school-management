import { Router } from '@angular/router';
import { TeacherService } from './../../services/teacher.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teachers-list',
  templateUrl: './teachers-list.component.html',
  styleUrls: ['./teachers-list.component.css']
})
export class TeachersListComponent implements OnInit {
  teachers:any;
  constructor(private teacherservice:TeacherService,private router:Router) { }

  ngOnInit() {
    this.teacherservice.displayAllTeachers().subscribe(
      (data)=>{
        this.teachers=data.teachersTable;   
      }     
    )
  }
  deleteTeacher(id) {
    this.teacherservice.deleteTeacherById(id).subscribe((data) => {
      this.teacherservice.displayAllTeachers().subscribe((data) => {
        this.teachers = data.teachersTable;
      });
    });
  }
  editTeacher(id) {
    this.router.navigate([`edit-teacher/${id}`]);
  }

  signout(){
    window.localStorage.clear();
    this.router.navigate([""])
  }
}
