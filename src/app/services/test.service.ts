import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  testURL="http://localhost:3000/test"
  noteURL="http://localhost:3000/note"
  reponseURL="http://localhost:3000/reponse"
  
  constructor(private httpClient:HttpClient) { }
  addTest(obj){
    return this.httpClient.post(this.testURL,obj)
  } 
  displayTests(){
    return this.httpClient.get<{testsTable:any}>(this.testURL)
  }
  addNote(obj){
    return this.httpClient.post(this.noteURL,obj)
  }
  displayNote(){
    return this.httpClient.get<{noteTable:any}>(this.noteURL)
  }
  addReponse(obj,id){
    return this.httpClient.post(`${this.reponseURL}/${id}`,obj)
  }
  getReponse(){
    return this.httpClient.get<{reponseTable:any}>(this.reponseURL)
  }
}
