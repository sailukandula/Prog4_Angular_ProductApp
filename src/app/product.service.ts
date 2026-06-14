import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProduct } from './IProduct';
import { Observable } from 'rxjs/internal/Observable';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root',
})
export class ProductService  {

  httpStatus:Subject<string>=new Subject<string>;

  constructor(private httpClient:HttpClient){

  }

  saveProduct(product:IProduct){
    console.log(product)
    this.httpStatus.next("Product Save in Progress");
    return this.httpClient.post("http://localhost:8080/api/product/addProduct",product);
  }

  getAllProducts(){
    this.httpStatus.next("Products getting is in Progress");
    return this.httpClient.get<IProduct[]>("http://localhost:8080/api/product/list");
  }

  deleteProductById(id:number){
    this.httpStatus.next("Product Delete in Progress");
    return this.httpClient.delete<number>("http://localhost:8080/api/product/deleteProductById");
  }

  
}
