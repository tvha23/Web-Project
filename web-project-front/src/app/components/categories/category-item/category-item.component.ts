import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category-item',
  templateUrl: './category-item.component.html',
  styleUrls: ['./category-item.component.css']
})
export class CategoryItemComponent implements OnInit {

  categories:Category[]=[];

  constructor(private categoryService:CategoryService) { }

  ngOnInit(): void {
    this.getCategories()
  }

  getCategories(){
    this.categoryService.getCategories().subscribe((data=>{
      // console.log(data);
    this.categories=data;
    }))
  }
}
