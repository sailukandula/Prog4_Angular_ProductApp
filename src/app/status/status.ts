import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-status',
  imports: [],
  templateUrl: './status.html',
  styleUrl: './status.css',
})
export class Status implements OnInit,OnDestroy {

  status:string="";
  subscription!: Subscription;

productService=inject(ProductService);

  ngOnInit(): void{
  
 this.subscription= this.productService.httpStatus.subscribe((status)=>{
     this.status=status;
    })
  } 
  ngOnDestroy():void{
    this.subscription.unsubscribe();
  }
}
