import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models';
import { ProductItemService } from 'src/app/services/product-item.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  // products:Product[]=[];
  // constructor(private producService:ProductItemService) { }

  ngOnInit(): void {
    // this.getProducts()
  }

  // getProducts(){
  //   this.producService.getProductItems().subscribe((data=>{
  //     this.products=data;
  //   }))
  // }
}
