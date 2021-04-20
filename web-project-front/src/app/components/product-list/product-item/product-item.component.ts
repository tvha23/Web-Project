import { Component, OnInit } from '@angular/core';
import {ProductListComponent} from '../product-list.component'
import { Product } from 'src/app/models';
import { ProductItemService } from 'src/app/services/product-item.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  products:Product[]=[];
  constructor(private productService:ProductItemService) { }

  ngOnInit(): void {
    this.getProducts()
  }

  getProducts(){
    this.productService.getProductItems().subscribe((data=>{
      // console.log(data);
      this.products=data;
    }))
  }

}
