import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = 'http://localhost:4000';

  constructor(private http: HttpClient) {}

  getBestSellingProducts(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/products/best-selling`);
  }
}
