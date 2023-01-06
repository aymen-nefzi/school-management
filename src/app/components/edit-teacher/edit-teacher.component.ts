import { Router, ActivatedRoute } from '@angular/router';
import { TeacherService } from 'src/app/services/teacher.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-teacher',
  templateUrl: './edit-teacher.component.html',
  styleUrls: ['./edit-teacher.component.css']
})
export class EditTeacherComponent implements OnInit {
  editForm:FormGroup;
  id:any;
  teacher:{}
  constructor(private formBuilder:FormBuilder,private teacherService:TeacherService,private route:Router,private ActivatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.editForm = this.formBuilder.group({
      firstName: ["", [Validators.required, Validators.minLength(3)]],
      lastName: ["", [Validators.required, Validators.minLength(5)]],
      Tel: ["", [Validators.required, Validators.minLength(8)]],
      level: ["", [Validators.required]],
   
    })
    this.id= this.ActivatedRoute.snapshot.paramMap.get("id")
    this.teacherService.displayTeacherById(this.id).subscribe((data)=>{
      this.teacher=data.foundTeacher
    })
  }
  edit(){
   
   
    
    this.teacherService.editTeacher(this.teacher).subscribe((data)=>{
      if (data) {
          this.route.navigate(["teachers-list"])
      }
    })
  
}
}
