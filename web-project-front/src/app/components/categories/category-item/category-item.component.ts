import { Component, Input, OnInit } from '@angular/core';
import { Category } from 'src/app/models';
import { CategoryService } from 'src/app/services/category.service';
import { Product } from 'src/app/models';
import { ProductItemService } from 'src/app/services/product-item.service';
import { ProductItemComponent } from 'src/app/components/product-list/product-item/product-item.component'

@Component({
  selector: 'app-category-item',
  templateUrl: './category-item.component.html',
  styleUrls: ['./category-item.component.css']
})
export class CategoryItemComponent implements OnInit {
  // @Input() categoryName:string='all';
  categories: Category[] = [];
  products: Product[] = []; 
  constructor(private categoryService: CategoryService, private productService: ProductItemService) { }

  ngOnInit(): void {
    this.getCategories()
    this.getProducts()
  }

  getCategories() {
    this.categoryService.getCategories().subscribe((data => {
      // console.log(data);
      this.categories = data;
    }))
  }
  getProducts() {
    this.productService.getProductItems('all').subscribe((data => {
      // console.log(data);
      this.products = data;
    }))
  }
}
