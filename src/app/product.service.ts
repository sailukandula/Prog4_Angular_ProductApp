import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProduct } from './IProduct';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class ProductService  {

  httpStatus:Observable<String>=new Observable<String>;

  constructor(private httpClient:HttpClient){

  }

  saveProduct(product:IProduct){
    return this.httpClient.post("http://localhost:8080/api/product/addProduct",product);
  }

  getAllProducts(){
    return this.httpClient.get<IProduct[]>("http://localhost:8080/api/product/list");
  }

  deleteProductById(id:number){
    return this.httpClient.delete<number>("http://localhost:8080/api/product/deleteProductById");
  }

  
}
