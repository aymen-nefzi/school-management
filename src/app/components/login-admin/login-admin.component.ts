import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {
  loginAdminForm:FormGroup;
  user={};
  emailError:any;
  constructor(private userService:UserService,private router:Router) { }

  ngOnInit() {
  }
  login(){
    this.userService.loginAdmin(this.user).subscribe((data)=>{
       
      if (data.message=="admin") {
        this.router.navigate(["admin-dashboard"]);
      }else if (data.message=="0") {
        this.emailError="Check Your Email"
      }else{
        this.emailError="Check Your Password"
      }

    })
  }
}
