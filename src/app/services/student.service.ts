import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  studentURL :string="http://localhost:3000/students";
  
  constructor(private httpClient:HttpClient) { }
  displayAllStudents(){
    return this.httpClient.get<{studentsTable:any}>(this.studentURL)
  }
  deleteStudentById(id){
    return this.httpClient.delete<{message:any}>(`${this.studentURL}/${id}`)
  }
  editStudent(obj){
    return this.httpClient.put<{message :any}>(this.studentURL,obj)
  }
  displayStudentById(id){
    return this.httpClient.get<{dispStudent:any}>(`${this.studentURL}/${id}`)
}

}
