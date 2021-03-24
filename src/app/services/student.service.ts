import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  apiUrl = 'http://localhost:8080';// backend url 

  constructor(private httpClient: HttpClient) { }
  
  saveStudent(studentObject){
    return this.httpClient.post(this.apiUrl + '/student/saveStudent', studentObject);
  }
  getStudents(){
    return this.httpClient.get(this.apiUrl + '/student/listAllStudent');
  }
  deleteStudent(studentId){
    return this.httpClient.delete(this.apiUrl + '/student/deleteStudent/'+ studentId);
  }
  getStudentsById(studentId){
    return this.httpClient.get(this.apiUrl + '/student/getStudentById/' + studentId);
  }
  updateStudent(studentId){
    return this.httpClient.put(this.apiUrl + '/student/updateStudent/' , studentId);
  }
 

}
