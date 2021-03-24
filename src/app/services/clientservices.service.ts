import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientservicesService {
  apiUrl = 'http://localhost:8080';// backend url 
  constructor(private httpClient: HttpClient) { }
  saveClient(clientObject){
    return this.httpClient.post(this.apiUrl + '/client/saveClient', clientObject);

  }
  getClients(){
    return this.httpClient.get(this.apiUrl + '/client/listAllClients');
  }
  deleteClient(clientId){
    return this.httpClient.delete(this.apiUrl + '/client/deleteClient/'+ clientId);
  }
  getClientsById(clientId){
    return this.httpClient.get(this.apiUrl + '/client/getClientsById/' + clientId);
  }
  updateClient(clientId){
    return this.httpClient.put(this.apiUrl + '/client/updateClient/' , clientId);
  }
 
}
