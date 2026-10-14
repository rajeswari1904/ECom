import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

import { CartItem, CartService } from '../../core/services/cart.service';

@Component({
  selector: 'app-cart-page',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="container py-12">
      <h1 class="text-4xl font-black text-slate-900">Your cart</h1>

      <div *ngIf="items.length === 0; else cartList" class="mt-8 rounded-3xl border border-dashed border-slate-200 bg-white p-10 text-center shadow-sm">
        <h2 class="text-2xl font-bold text-slate-900">Your cart is empty</h2>
        <p class="mt-2 text-slate-600">Add a few LED products to see them here.</p>
        <a routerLink="/products" class="mt-6 inline-block rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white">Browse products</a>
      </div>

      <ng-template #cartList>
        <div class="mt-8 grid gap-8 lg:grid-cols-[1.5fr_0.8fr]">
          <div class="space-y-4">
            <div *ngFor="let item of items" class="flex items-center gap-4 rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
              <img [src]="item.product.image" [alt]="item.product.name" class="h-24 w-24 rounded-2xl object-cover" />
              <div class="flex-1">
                <h3 class="text-lg font-bold text-slate-900">{{ item.product.name }}</h3>
                <p class="text-sm text-slate-500">{{ item.product.category }} • Qty: {{ item.quantity }}</p>
              </div>
              <div class="flex items-center gap-3">
                <div class="flex items-center rounded-full border border-slate-200 bg-slate-50 px-2 py-1">
                  <button type="button" class="h-8 w-8 text-xl font-medium text-slate-700" (click)="decrement(item)">-</button>
                  <span class="w-8 text-center text-sm font-semibold">{{ item.quantity }}</span>
                  <button type="button" class="h-8 w-8 text-xl font-medium text-slate-700" (click)="increment(item)">+</button>
                </div>
                <button type="button" class="text-sm font-semibold text-rose-600" (click)="remove(item)">Remove</button>
              </div>
              <div class="text-lg font-bold text-slate-900">₹{{ item.product.price * item.quantity }}</div>
            </div>
          </div>

          <aside class="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 class="text-2xl font-bold text-slate-900">Order summary</h3>
            <div class="mt-5 space-y-3 text-sm text-slate-600">
              <div class="flex justify-between"><span>Subtotal</span><span>₹{{ subtotal }}</span></div>
              <div class="flex justify-between"><span>Shipping</span><span>₹{{ shipping }}</span></div>
              <div class="flex justify-between"><span>Discount</span><span>-₹{{ discount }}</span></div>
              <div class="mt-4 flex justify-between border-t border-slate-200 pt-4 text-base font-bold text-slate-900"><span>Total</span><span>₹{{ total }}</span></div>
            </div>
            <a routerLink="/checkout" class="mt-6 block rounded-full bg-slate-900 px-4 py-3 text-center text-sm font-semibold text-white">Checkout</a>
          </aside>
        </div>
      </ng-template>
    </div>
  `,
})
export class CartPage implements OnInit {
  items: CartItem[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.cartItems$.subscribe((items) => {
      this.items = items;
    });
  }

  get subtotal(): number {
    return this.cartService.getSubtotal();
  }

  get shipping(): number {
    return this.cartService.getShipping();
  }

  get discount(): number {
    return this.cartService.getDiscount();
  }

  get total(): number {
    return this.cartService.getTotal();
  }

  increment(item: CartItem): void {
    this.cartService.updateQuantity(item.product.id, item.quantity + 1);
  }

  decrement(item: CartItem): void {
    this.cartService.updateQuantity(item.product.id, item.quantity - 1);
  }

  remove(item: CartItem): void {
    this.cartService.removeItem(item.product.id);
  }
}
