import { TeacherService } from 'src/app/services/teacher.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-students-per-teacher',
  templateUrl: './students-per-teacher.component.html',
  styleUrls: ['./students-per-teacher.component.css']
})
export class StudentsPerTeacherComponent implements OnInit {
students:any;
teacher:any;
  constructor(private teacherService:TeacherService) { }

  ngOnInit() {
     this.teacher = JSON.parse(localStorage.getItem("ConnectedUser"));
     this.teacherService.displayStudentsByTeacher(this.teacher).subscribe()
     
  }

}
