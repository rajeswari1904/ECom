import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

import { Product } from '../../core/models/product.model';
import { CartService } from '../../core/services/cart.service';
import { ProductService } from '../../core/services/product.service';

@Component({
  selector: 'app-product-details-page',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="container py-12" *ngIf="product; else notFound">
      <div class="mb-8">
        <a routerLink="/products" class="text-sm font-semibold text-slate-700">← Back to products</a>
      </div>

      <div class="grid gap-10 lg:grid-cols-2">
        <div class="space-y-4">
          <img [src]="product.image" [alt]="product.name" class="h-[450px] w-full rounded-[32px] object-cover shadow-soft" />
          <div class="grid grid-cols-3 gap-3">
            <img *ngFor="let image of product.gallery" [src]="image" [alt]="product.name" class="h-24 w-full rounded-2xl object-cover" />
          </div>
        </div>

        <div>
          <div class="mb-3 inline-flex rounded-full bg-amber-100 px-2 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-amber-700">{{ product.badge }}</div>
          <h1 class="text-4xl font-black text-slate-900">{{ product.name }}</h1>
          <div class="mt-4 flex items-center gap-3">
            <span class="rounded-full bg-amber-100 px-2 py-1 text-xs font-semibold text-amber-700">{{ product.rating }} ★</span>
            <span class="text-sm text-slate-500">{{ product.reviews }} reviews</span>
          </div>

          <div class="mt-6 flex items-end gap-3">
            <div class="text-4xl font-black text-slate-900">₹{{ product.price }}</div>
            <div class="text-lg text-slate-400 line-through">₹{{ product.originalPrice }}</div>
            <div class="rounded-full bg-emerald-100 px-2 py-1 text-sm font-semibold text-emerald-700">{{ ((product.originalPrice - product.price) / product.originalPrice * 100) | number: '1.0-0' }}% OFF</div>
          </div>

          <p class="mt-6 text-slate-600">
            {{ product.description }}
          </p>

          <div class="mt-6 flex items-center gap-4">
            <label class="text-sm font-semibold text-slate-700">Quantity</label>
            <div class="flex items-center rounded-full border border-slate-200 bg-slate-50 px-2 py-1">
              <button type="button" class="h-8 w-8 text-xl font-medium text-slate-700" (click)="decrementQuantity()">-</button>
              <span class="w-8 text-center text-sm font-semibold">{{ quantity }}</span>
              <button type="button" class="h-8 w-8 text-xl font-medium text-slate-700" (click)="incrementQuantity()">+</button>
            </div>
          </div>

          <div class="mt-8 flex flex-wrap gap-4">
            <button type="button" class="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white" (click)="addToCart()">Add to cart</button>
            <button type="button" class="rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700">Add to wishlist</button>
          </div>

          <div class="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <h3 class="font-bold text-slate-900">Specifications</h3>
            <ul class="mt-3 space-y-2 text-sm text-slate-600">
              <li *ngFor="let spec of product.specs">• {{ spec.label }}: {{ spec.value }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <ng-template #notFound>
      <div class="container py-20 text-center">
        <h2 class="text-3xl font-black text-slate-900">Product not found</h2>
        <a routerLink="/products" class="mt-4 inline-block rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white">Browse collection</a>
      </div>
    </ng-template>
  `,
})
export class ProductDetailsPage implements OnInit {
  product: Product | undefined;
  quantity = 1;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService,
    private cartService: CartService,
  ) {}

  ngOnInit(): void {
    const productId = Number(this.route.snapshot.paramMap.get('id'));
    this.product = this.productService.getProductById(productId) ?? this.productService.products[0];
  }

  incrementQuantity(): void {
    this.quantity += 1;
  }

  decrementQuantity(): void {
    this.quantity = Math.max(1, this.quantity - 1);
  }

  addToCart(): void {
    if (!this.product) {
      return;
    }

    this.cartService.addItem(this.product, this.quantity);
    this.router.navigateByUrl('/cart');
  }
}
