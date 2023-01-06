import { AddTestComponent } from './components/add-test/add-test.component';
import { EditTeacherComponent } from './components/edit-teacher/edit-teacher.component';
import { TeachersListComponent } from './components/teachers-list/teachers-list.component';
import { HomeComponent } from './components/home/home.component';
import { SignupComponent } from './components/signup/signup.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupAdminComponent } from './components/signup-admin/signup-admin.component';
import { LoginComponent } from './components/login/login.component';
import { LoginAdminComponent } from './components/login-admin/login-admin.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { TeacherDashboardComponent } from './components/teacher-dashboard/teacher-dashboard.component';
import { StudentDashboardComponent } from './components/student-dashboard/student-dashboard.component';
import { ManageClassroomsComponent } from './components/manage-classrooms/manage-classrooms.component';
import { StudentsListComponent } from './components/students-list/students-list.component';
import { EditStudentComponent } from './components/edit-student/edit-student.component';
import { StudentsPerTeacherComponent } from './components/students-per-teacher/students-per-teacher.component';
import { CoursesComponent } from './components/courses/courses.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';


const routes: Routes = [
  //http://localhost:4200
  {path:"",component :HomeComponent},
  //http://localhost:4200/signup
  {path:"signup",component :SignupComponent},
  //http://localhost:4200/admin-signup
  {path:"admin-signup",component :SignupAdminComponent},
  //http://localhost:4200/login
  {path:"login",component :LoginComponent},
  //http://localhost:4200/admin-login
  {path:"admin-login",component :LoginAdminComponent},
  //http://localhost:4200/admin-dashboard
  {path:"admin-dashboard",component :AdminDashboardComponent},
  //http://localhost:4200/teacher-dashboard
  {path:"teacher-dashboard/:id",component :TeacherDashboardComponent},
  //http://localhost:4200/student-dashboard
  {path:"student-dashboard",component :StudentDashboardComponent},
  //http://localhost:4200/manage-classrooms
  {path:"manage-classrooms",component :ManageClassroomsComponent},
  //http://localhost:4200/students-list
  {path:"students-list",component :StudentsListComponent},
  //http://localhost:4200/courses
  {path:"courses",component :CoursesComponent},
  //http://localhost:4200/teachers-list
  {path:"teachers-list",component :TeachersListComponent},
  //http://localhost:4200/edit-student/:id
  {path:"edit-student/:id",component :EditStudentComponent},
  //http://localhost:4200/edit-teacher/:id
  {path:"edit-teacher/:id",component :EditTeacherComponent},
  //http://localhost:4200/studentsPerTeacher
  {path:"studentsPerTeacher",component :StudentsPerTeacherComponent},
  //http://localhost:4200/addTest
  {path:"addTest",component :AddTestComponent},
  //http://localhost:4200/error
  {path:"**",component :ErrorPageComponent},
 

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
