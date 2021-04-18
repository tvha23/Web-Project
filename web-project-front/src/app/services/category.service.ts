import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../models';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  ROOT_URL = 'http://localhost:8000';

  constructor(private http: HttpClient) { }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.ROOT_URL}/api/categories/`);     //Gotta implement Endpoint with Serializer at the Django side
  }
}
