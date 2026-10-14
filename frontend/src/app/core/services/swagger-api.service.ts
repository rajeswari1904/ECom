import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { AuthResponse, LoginRequest, RegisterRequest, User } from '../models/user.model';
import { OrderResponse, OrderItemInput, ShippingAddress } from '../models/order.model';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class SwaggerApiService {
  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${environment.apiBaseUrl}/products`);
  }

  getProduct(id: number): Observable<Product> {
    return this.http.get<Product>(`${environment.apiBaseUrl}/products/${id}`);
  }

  login(payload: LoginRequest): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${environment.apiBaseUrl}/auth/login`, payload);
  }

  register(payload: RegisterRequest): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${environment.apiBaseUrl}/auth/register`, payload);
  }

  getCurrentUser(): Observable<{ user: User }> {
    const token = localStorage.getItem('abc-led-token');
    const headers = new HttpHeaders({
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    });

    return this.http.get<{ user: User }>(`${environment.apiBaseUrl}/auth/me`, { headers });
  }

  checkout(items: OrderItemInput[], shippingAddress?: ShippingAddress, paymentMethod: 'razorpay' | 'cod' = 'razorpay'): Observable<OrderResponse> {
    const token = localStorage.getItem('abc-led-token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    });

    return this.http.post<OrderResponse>(`${environment.apiBaseUrl}/orders/checkout`, {
      items,
      shippingAddress,
      paymentMethod,
    }, { headers });
  }
}
