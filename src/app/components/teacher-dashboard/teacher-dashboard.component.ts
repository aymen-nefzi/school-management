import { TeacherService } from './../../services/teacher.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teacher-dashboard',
  templateUrl: './teacher-dashboard.component.html',
  styleUrls: ['./teacher-dashboard.component.css']
})
export class TeacherDashboardComponent implements OnInit {
id:any;
students:any;
ConnectedUser:any

  constructor(private activatedRoute:ActivatedRoute,private teacherService:TeacherService,private router:Router) { }

  ngOnInit() {
    this.ConnectedUser=JSON.parse(localStorage.getItem("ConnectedUser"))
    this.id= this.activatedRoute.snapshot.paramMap.get("id")
    this.teacherService.displayStudentsByTeacher(this.id).subscribe((data)=>{
      console.log("here data : ",data.studentsPicked[0].students);
      this.students=data.studentsPicked[0].students
     
      
    })
  }
  signout(){
    localStorage.clear();
    this.router.navigate([""])
  }

}
