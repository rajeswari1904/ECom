import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Product } from '../models/product.model';

export interface CartItem {
  product: Product;
  quantity: number;
}

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private readonly storageKey = 'abc-led-cart';
  private readonly cartItemsSubject = new BehaviorSubject<CartItem[]>([]);
  private readonly cartCountSubject = new BehaviorSubject<number>(0);

  readonly cartItems$ = this.cartItemsSubject.asObservable();
  readonly cartCount$ = this.cartCountSubject.asObservable();

  private items: CartItem[] = [];

  constructor() {
    this.items = this.readFromStorage();
    this.syncState();
  }

  addItem(product: Product, quantity = 1): void {
    const existing = this.items.find((item) => item.product.id === product.id);

    if (existing) {
      existing.quantity += quantity;
    } else {
      this.items.push({ product, quantity });
    }

    this.syncState();
  }

  updateQuantity(productId: number, quantity: number): void {
    const item = this.items.find((entry) => entry.product.id === productId);

    if (!item) {
      return;
    }

    if (quantity <= 0) {
      this.items = this.items.filter((entry) => entry.product.id !== productId);
    } else {
      item.quantity = quantity;
    }

    this.syncState();
  }

  removeItem(productId: number): void {
    this.items = this.items.filter((entry) => entry.product.id !== productId);
    this.syncState();
  }

  clearCart(): void {
    this.items = [];
    this.syncState();
  }

  getCart(): CartItem[] {
    return [...this.items];
  }

  getSubtotal(): number {
    return this.items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  }

  getShipping(): number {
    return this.items.length ? 99 : 0;
  }

  getDiscount(): number {
    return this.items.reduce((sum, item) => sum + Math.round(item.product.price * item.quantity * 0.08), 0);
  }

  getTotal(): number {
    return this.getSubtotal() + this.getShipping() - this.getDiscount();
  }

  private syncState(): void {
    const totalItems = this.items.reduce((sum, item) => sum + item.quantity, 0);
    this.cartItemsSubject.next([...this.items]);
    this.cartCountSubject.next(totalItems);
    this.writeToStorage();
  }

  private readFromStorage(): CartItem[] {
    try {
      const raw = localStorage.getItem(this.storageKey);
      return raw ? (JSON.parse(raw) as CartItem[]) : [];
    } catch {
      return [];
    }
  }

  private writeToStorage(): void {
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(this.items));
    } catch {
      // Ignore storage quota or browser restriction issues.
    }
  }
}
