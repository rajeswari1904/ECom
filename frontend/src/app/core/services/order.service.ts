import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { OrderItemInput, OrderResponse, ShippingAddress } from '../models/order.model';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor(private http: HttpClient) {}

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
