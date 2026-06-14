import { Component, OnInit, signal } from '@angular/core';
import { ProductService } from './product.service';
import { IProduct } from './IProduct';
import { CommonModule } from '@angular/common';
import{ FormsModule} from '@angular/forms';
import { Status } from "./status/status";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, Status],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  providers:[ProductService]
})
export class App implements OnInit{

  product: IProduct = {id: 0,name: '', price: 0, type: ''};

  protected readonly title = signal('Prog4_Angular_ProductApp');

  products: IProduct[] = [];
  pId!:number;

  constructor(private productService:ProductService){
     this.products= [];
  }
  ngOnInit() {
    this.productService.getAllProducts().subscribe((data)=>this.products=data);
  }

  loadProducts() {
    this.productService.getAllProducts().subscribe(data => this.products=data);
  }
  addProduct() {
    console.log(this.product);
  this.productService.saveProduct(this.product).subscribe(() => {
    console.log(this.product.id)
    this.loadProducts();  // reload table
    });
  }

  deleteProduct(){
   this.productService.deleteProductById(this.pId) .subscribe(()=> {
    this.loadProducts();  // reload table
    });
  }

}
