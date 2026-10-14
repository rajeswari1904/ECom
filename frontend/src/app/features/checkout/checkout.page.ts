import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { CartItem, CartService } from '../../core/services/cart.service';
import { AuthService } from '../../core/services/auth.service';
import { OrderService } from '../../core/services/order.service';
import { ShippingAddress } from '../../core/models/order.model';

@Component({
  selector: 'app-checkout-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="container py-12">
      <h1 class="text-4xl font-black text-slate-900">Checkout</h1>

      <div *ngIf="successMessage" class="mt-6 rounded-3xl border border-emerald-200 bg-emerald-50 p-5 text-emerald-700">
        {{ successMessage }}
      </div>

      <div *ngIf="items.length === 0 && !successMessage; else checkoutForm" class="mt-8 rounded-3xl border border-dashed border-slate-200 bg-white p-10 text-center shadow-sm">
        <h2 class="text-2xl font-bold text-slate-900">Cart is empty</h2>
        <p class="mt-2 text-slate-600">Add products before continuing to checkout.</p>
      </div>

      <ng-template #checkoutForm>
        <div class="mt-8 grid gap-8 lg:grid-cols-[1.3fr_0.7fr]">
          <div class="space-y-6">
            <div class="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 class="text-xl font-bold text-slate-900">Delivery address</h3>
              <div class="mt-4 grid gap-4 md:grid-cols-2">
                <div class="md:col-span-2">
                  <label class="mb-2 block text-sm font-semibold text-slate-700">Address</label>
                  <input [(ngModel)]="address.line1" class="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3" />
                </div>
                <div>
                  <label class="mb-2 block text-sm font-semibold text-slate-700">City</label>
                  <input [(ngModel)]="address.city" class="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3" />
                </div>
                <div>
                  <label class="mb-2 block text-sm font-semibold text-slate-700">State</label>
                  <input [(ngModel)]="address.state" class="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3" />
                </div>
                <div>
                  <label class="mb-2 block text-sm font-semibold text-slate-700">Postal code</label>
                  <input [(ngModel)]="address.postcode" class="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3" />
                </div>
                <div>
                  <label class="mb-2 block text-sm font-semibold text-slate-700">Country</label>
                  <input [(ngModel)]="address.country" class="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3" />
                </div>
              </div>
            </div>

            <div class="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 class="text-xl font-bold text-slate-900">Payment method</h3>
              <div class="mt-4 space-y-3">
                <label class="flex items-center gap-3 rounded-2xl border border-slate-200 p-3">
                  <input type="radio" name="paymentMethod" checked />
                  <span>Razorpay</span>
                </label>
                <label class="flex items-center gap-3 rounded-2xl border border-slate-200 p-3">
                  <input type="radio" name="paymentMethod" />
                  <span>Cash on Delivery</span>
                </label>
              </div>
            </div>
          </div>

          <aside class="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 class="text-2xl font-bold text-slate-900">Summary</h3>
            <div class="mt-5 space-y-3 text-sm text-slate-600">
              <div class="flex justify-between"><span>Subtotal</span><span>₹{{ subtotal }}</span></div>
              <div class="flex justify-between"><span>Shipping</span><span>₹{{ shipping }}</span></div>
              <div class="flex justify-between"><span>Discount</span><span>-₹{{ discount }}</span></div>
              <div class="mt-4 flex justify-between border-t border-slate-200 pt-4 text-base font-bold text-slate-900"><span>Total</span><span>₹{{ total }}</span></div>
            </div>

            <div *ngIf="error" class="mt-4 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
              {{ error }}
            </div>

            <button type="button" (click)="placeOrder()" [disabled]="isSubmitting" class="mt-6 block w-full rounded-full bg-amber-500 px-4 py-3 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:bg-amber-300">
              {{ isSubmitting ? 'Placing order...' : 'Place order' }}
            </button>
          </aside>
        </div>
      </ng-template>
    </div>
  `,
})
export class CheckoutPage implements OnInit {
  items: CartItem[] = [];
  isSubmitting = false;
  successMessage = '';
  error = '';

  address: ShippingAddress = {
    line1: 'Flat 402, Green Park',
    city: 'New Delhi',
    state: 'Delhi',
    postcode: '110016',
    country: 'India',
  };

  constructor(
    private cartService: CartService,
    private authService: AuthService,
    private orderService: OrderService,
    private router: Router
  ) {}

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

  placeOrder(): void {
    if (!this.items.length) {
      this.error = 'Your cart is empty.';
      return;
    }

    if (!this.authService.isAuthenticated()) {
      this.router.navigateByUrl('/login');
      return;
    }

    this.error = '';
    this.isSubmitting = true;

    this.orderService
      .checkout(
        this.items.map((item) => ({
          productId: item.product.id,
          quantity: item.quantity,
        })),
        this.address,
        'razorpay'
      )
      .subscribe({
        next: (order) => {
          this.successMessage = `Order placed successfully! ${order.orderNumber}`;
          this.cartService.clearCart();
          this.isSubmitting = false;
        },
        error: (error) => {
          this.error = error?.error?.message || 'Unable to place order.';
          this.isSubmitting = false;
        },
      });
  }
}
