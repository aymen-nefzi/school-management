import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { UserService } from "src/app/services/user.service";
import { MustMatch } from "src/app/validators/pwd";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"],
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit() {
    this.signupForm = this.formBuilder.group(
      {
        firstName: ["", [Validators.required, Validators.minLength(3)]],
        lastName: ["", [Validators.required, Validators.minLength(5)]],
        email: ["", [Validators.email, Validators.required]],
        phone: ["", [Validators.required, Validators.minLength(8)]],
        cin: [
          "",
          [
            Validators.required,
            Validators.minLength(8),
            Validators.maxLength(8),
          ],
        ],
        speciality: ["", [Validators.required]],
        role: ["", [Validators.required]],
        level: ["", [Validators.required]],
        password: [
          "",
          [
            Validators.required,
            Validators.pattern(
              "(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,}"
            ),
          ],
        ],
        confirmPassword: [""],
      },
      {
        validators: MustMatch("password", "confirmPassword"),
      }
    );
  }
  signup() {
    this.userService.addUser(this.signupForm.value).subscribe();
    this.router.navigate(["login"]);
  }
}
