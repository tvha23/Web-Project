import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ProductItemService {

  ROOT_URL = 'http://localhost:8000';

  constructor(private http:HttpClient) { }

  getProductItems(categoryName:string):Observable<Product[]>{
    return this.http.get<Product[]>(`${this.ROOT_URL}/api/products/${categoryName}`);
  }
}
