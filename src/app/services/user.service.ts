import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userURL="http://localhost:3000/user"
  constructor(private httpClient:HttpClient) { }
  addUser(obj){
    return this.httpClient.post(`${this.userURL}/signup`,obj);
  }
  loginEmail(obj){
    return this.httpClient.post<{message ,obj: any}>(`${this.userURL}/login/email`,obj);
  }
  loginIdn(obj){
    return this.httpClient.post<{message : any}>(`${this.userURL}/login/idn`,obj);
  }
  loginAdmin(obj){
    return this.httpClient.post<{message : any}>(`${this.userURL}/admin`,obj);
  }
}
