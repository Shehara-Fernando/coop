import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  apiUrl = 'http://localhost:8080';// backend url 

  constructor(private httpClient:HttpClient) { }

  saveProduct(productObject){
    return this.httpClient.post(this.apiUrl + '/product/saveProducts', productObject);
  }
  getProducts(){
    return this.httpClient.get(this.apiUrl + '/product/listAllProducts');
  }
  deleteProduct(id){
    return this.httpClient.delete(this.apiUrl + '/product/deleteProduct/'+ id);
  }
  getProductsById(id){
    return this.httpClient.get(this.apiUrl + '/product/getProductsById/' + id);
  }
  updateProducts(id){
    return this.httpClient.put(this.apiUrl + '/product/updateProducts/', id);
  }
 
}
