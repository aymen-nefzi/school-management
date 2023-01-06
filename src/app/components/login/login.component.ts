import { Router } from '@angular/router';
import { UserService } from './../../services/user.service';
import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
user={};
teacher:any
emailError:any;
errorAccount:any;
loginForm:FormGroup;
  constructor(private userService:UserService,private router:Router) { }

  ngOnInit() {
  }
  verifEmailIdn(obj){
    
    if (obj.emailIdn.includes("@")) {  
      this.userService.loginEmail(this.user).subscribe((data)=>{
        if (data.message=="Student") {
          localStorage.setItem("ConnectedUser",JSON.stringify(data.obj) );
          this.router.navigate(["student-dashboard"]);
        }else if (data.message=="Teacher") {
          localStorage.setItem("ConnectedUser",JSON.stringify(data.obj) );
          this.teacher = JSON.parse(localStorage.getItem("ConnectedUser"));
          this.router.navigate([`teacher-dashboard/${this.teacher._id}`]);
        }
        else if (data.message=="0") {
          this.emailError="Check Your Email"
        }else{
          this.emailError="Check Your Password"
        }
  
      })
    }else{
      
      this.userService.loginIdn(this.user).subscribe((data)=>{
         
        if (data.message=="Student") {
          this.router.navigate(["student-dashboard"]);
        }else if (data.message=="Teacher") {
          this.router.navigate(["teacher-dashboard"]);
        }else if (data.message=="0") {
          this.emailError="Check Your IDN"
        }else{
          this.emailError="Check Your Password"
        }
      })

    }
  }
  login(){
    
    this.verifEmailIdn(this.user)
  }

}
