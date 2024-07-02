import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'https://dummyjson.com/products?limit=50';

  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get<any>(this.apiUrl).pipe(
      map(response => response.products)
    );
  }
}
