import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  teahcherURL:string="http://localhost:3000/teachers";
  teahcherURL2:string="http://localhost:3000/teachers2";
  constructor(private httpClient:HttpClient) { }

  displayAllTeachers(){
    return this.httpClient.get<{teachersTable:any}>(this.teahcherURL)
  }

  addStudentsToTeacher(obj){
    return this.httpClient.post(this.teahcherURL,obj)
  }
  deleteTeacherById(id){
    return this.httpClient.delete<{message:any}>(`${this.teahcherURL}/${id}`)
  }
  
  displayTeacherById(id){
     return this.httpClient.get<{foundTeacher:any}>(`${this.teahcherURL}/${id}`)
   }
   editTeacher(obj){
    return this.httpClient.put<{message :any}>(this.teahcherURL,obj)
   }
   displayStudentsByTeacher(id){
    return this.httpClient.get<{studentsPicked}>(`${this.teahcherURL2}/${id}`)
   }
}
