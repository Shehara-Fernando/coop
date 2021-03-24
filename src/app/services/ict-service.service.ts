import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IctServiceService {
  apiUrl = 'http://localhost:8080';// backend url 
  constructor(private httpClient: HttpClient) { }

  saveIct(ictObject){
    return this.httpClient.post(this.apiUrl + '/ict/saveIct', ictObject);
  }
}
