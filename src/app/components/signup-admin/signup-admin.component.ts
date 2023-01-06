import { UserService } from 'src/app/services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-admin',
  templateUrl: './signup-admin.component.html',
  styleUrls: ['./signup-admin.component.css']
})
export class SignupAdminComponent implements OnInit {

  signUpForm:FormGroup;
  user={role:"admin"};
  constructor(private router:Router,private userService:UserService) { }

  ngOnInit() {
  }
  signUp(){
    this.userService.addUser(this.user).subscribe()
    this.router.navigate(["admin-login"])
  }

}
