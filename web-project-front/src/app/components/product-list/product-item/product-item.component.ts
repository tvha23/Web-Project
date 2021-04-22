import { Component, OnInit, Input } from '@angular/core';
import {ProductListComponent} from '../product-list.component'
import { Product } from 'src/app/models';
import { ProductItemService } from 'src/app/services/product-item.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CartService } from './../../../services/cart.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input()
  product!: Product;
  @Input() categoryName='all';
  products:Product[]=[];
  filteredProduct:Product[]=[];
  constructor(private productService:ProductItemService, private cartService: CartService) { }

  ngOnInit(): void {
    this.getProducts()
  }

  getProducts(){
    this.productService.getProductItems('all').subscribe((data=>{
      // console.log(data);
      this.products=data;
    }))
  }

  // title = 'appBootstrap';
  
  public isCollapsed = true;

  
  addToCart() {
    this.cartService.addToCart(this.product)
  }
  filterByCategory(){
    
  }
  
}

