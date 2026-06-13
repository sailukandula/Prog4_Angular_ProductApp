import { Component, OnInit, signal } from '@angular/core';
import { ProductService } from './product.service';
import { IProduct } from './IProduct';
import { CommonModule } from '@angular/common';
import{ FormsModule} from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  providers:[ProductService]
})
export class App implements OnInit{

  newProduct: IProduct = {id: 0,name: '', price: 0, type: ''};

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
  this.productService.saveProduct(this.newProduct).subscribe(() => {
    this.loadProducts();  // reload table
    });
  }

  deleteProduct(){
   this.productService.deleteProductById(this.pId) .subscribe(()=> {
    this.loadProducts();  // reload table
    });
  }

}
