import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {
  editForm:FormGroup;
  id:any;
  student:{}
  constructor(private formBuilder:FormBuilder,private studentService:StudentService,private route:Router,private ActivatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.editForm = this.formBuilder.group({
      firstName: ["", [Validators.required, Validators.minLength(3)]],
      lastName: ["", [Validators.required, Validators.minLength(5)]],
      Tel: ["", [Validators.required, Validators.minLength(8)]],
      level: ["", [Validators.required]],
   
    })
    this.id= this.ActivatedRoute.snapshot.paramMap.get("id")
    this.studentService.displayStudentById(this.id).subscribe((data)=>{
      this.student=data.dispStudent
    })
  }
  edit(){
      this.studentService.editStudent(this.student).subscribe((data)=>{
        if (data) {
            this.route.navigate(["students-list"])
        }
      })
    
  }

}
