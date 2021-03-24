import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl = 'http://localhost:8080';// backend url 
  constructor(private httpClient:HttpClient) { }
  login(authObject){
    return this.httpClient.post(this.apiUrl + '/auth/login', authObject);
  }
}
