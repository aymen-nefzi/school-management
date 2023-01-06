
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BannerComponent } from './components/banner/banner.component';
import { CoursesComponent } from './components/courses/courses.component';
import { BoxTeachingComponent } from './components/box-teaching/box-teaching.component';
import { TrendingCoursesComponent } from './components/trending-courses/trending-courses.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { FooterComponent } from './components/footer/footer.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SignupAdminComponent } from './components/signup-admin/signup-admin.component';
import { LoginComponent } from './components/login/login.component';
import { LoginAdminComponent } from './components/login-admin/login-admin.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { TeacherDashboardComponent } from './components/teacher-dashboard/teacher-dashboard.component';
import { StudentDashboardComponent } from './components/student-dashboard/student-dashboard.component';

import { ManageClassroomsComponent } from './components/manage-classrooms/manage-classrooms.component';
import { RouterModule } from '@angular/router';
import { StudentsListComponent } from './components/students-list/students-list.component';
import { EditStudentComponent } from './components/edit-student/edit-student.component';
import { TeachersListComponent } from './components/teachers-list/teachers-list.component';
import { EditTeacherComponent } from './components/edit-teacher/edit-teacher.component';
import { StudentsPerTeacherComponent } from './components/students-per-teacher/students-per-teacher.component';
import { AddTestComponent } from './components/add-test/add-test.component';
import { tablefilter } from './pipes/table-filter.pipe';
import { FilterMoyennePipe } from './pipes/filter-moyenne.pipe';
import { ErrorPageComponent } from './components/error-page/error-page.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    CoursesComponent,
    BoxTeachingComponent,
    TrendingCoursesComponent,
    ReviewsComponent,
    FooterComponent,
    SignupComponent,
    HomeComponent,
    SignupAdminComponent,
    LoginComponent,
    LoginAdminComponent,
    AdminDashboardComponent,
    TeacherDashboardComponent,
    StudentDashboardComponent,

    ManageClassroomsComponent,
    StudentsListComponent,
    EditStudentComponent,
    TeachersListComponent,
    EditTeacherComponent,
    StudentsPerTeacherComponent,
    AddTestComponent,
    tablefilter,
    FilterMoyennePipe,
    ErrorPageComponent,

 

  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    BrowserModule,

    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
