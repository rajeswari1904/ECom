import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

import { Product } from '../../core/models/product.model';
import { ProductService } from '../../core/services/product.service';
import { ProductCardComponent } from '../../shared/ui/product-card/product-card.component';

@Component({
  selector: 'app-products-page',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule, ProductCardComponent],
  template: `
    <div class="container py-12">
      <div class="mb-8 flex items-center justify-between gap-4">
        <div>
          <p class="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">Shop all</p>
          <h1 class="mt-2 text-4xl font-black text-slate-900">LED Lighting Collection</h1>
        </div>
        <a routerLink="/" class="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700">Back home</a>
      </div>

      <div class="mb-8 grid gap-4 md:grid-cols-[240px_1fr]">
        <aside class="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
          <h3 class="text-lg font-bold text-slate-900">Filters</h3>

          <div class="mt-5 space-y-4 text-sm text-slate-600">
            <div>
              <div class="mb-2 font-semibold text-slate-800">Search</div>
              <input
                [(ngModel)]="searchTerm"
                placeholder="Search products..."
                class="w-full rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-sm outline-none focus:border-amber-400"
              />
            </div>

            <div>
              <div class="mb-2 font-semibold text-slate-800">Category</div>
              <button
                type="button"
                class="mb-2 block w-full rounded-full px-3 py-2 text-left transition"
                [class.bg-amber-100]="selectedCategory === 'All'"
                [class.text-amber-700]="selectedCategory === 'All'"
                [class.text-slate-600]="selectedCategory !== 'All'"
                (click)="selectedCategory = 'All'"
              >
                All products
              </button>
              <button
                *ngFor="let category of categories"
                type="button"
                class="mb-2 block w-full rounded-full px-3 py-2 text-left transition"
                [class.bg-amber-100]="selectedCategory === category"
                [class.text-amber-700]="selectedCategory === category"
                [class.text-slate-600]="selectedCategory !== category"
                (click)="selectedCategory = category"
              >
                {{ category }}
              </button>
            </div>

            <div>
              <div class="mb-2 font-semibold text-slate-800">Price</div>
              <div>₹500 - ₹2,500</div>
            </div>
          </div>
        </aside>

        <div>
          <div class="mb-6 flex flex-wrap items-center justify-between gap-4 rounded-2xl bg-slate-50 p-4">
            <div class="text-sm text-slate-600">Showing {{ filteredProducts.length }} of {{ products.length }} products</div>
            <select
              [(ngModel)]="sortBy"
              class="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 outline-none"
            >
              <option value="popularity">Sort by popularity</option>
              <option value="low-high">Price: Low to High</option>
              <option value="high-low">Price: High to Low</option>
              <option value="rating">Top rated</option>
            </select>
          </div>

          <div *ngIf="filteredProducts.length === 0" class="rounded-3xl border border-dashed border-slate-200 bg-white p-10 text-center shadow-sm">
            <h2 class="text-2xl font-bold text-slate-900">No products match your filters</h2>
            <p class="mt-2 text-slate-600">Try a different keyword or switch categories.</p>
          </div>

          <div class="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            <app-product-card
              *ngFor="let product of filteredProducts"
              [image]="product.image"
              [name]="product.name"
              [description]="product.description"
              [badge]="product.badge"
              [stock]="product.stock"
              [price]="product.price.toString()"
              [originalPrice]="product.originalPrice.toString()"
              [productLink]="'/products/' + product.id"
            ></app-product-card>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class ProductsPage implements OnInit {
  products: Product[] = [];
  categories: string[] = [];
  searchTerm = '';
  selectedCategory = 'All';
  sortBy = 'popularity';

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.products = this.productService.products;
    this.categories = [...new Set(this.products.map((product) => product.category))];
  }

  get filteredProducts(): Product[] {
    const normalized = this.searchTerm.trim().toLowerCase();
    let filtered = [...this.products];

    if (this.selectedCategory !== 'All') {
      filtered = filtered.filter((product) => product.category === this.selectedCategory);
    }

    if (normalized) {
      filtered = filtered.filter((product) =>
        product.name.toLowerCase().includes(normalized) || product.description.toLowerCase().includes(normalized)
      );
    }

    switch (this.sortBy) {
      case 'low-high':
        filtered = filtered.sort((a, b) => a.price - b.price);
        break;
      case 'high-low':
        filtered = filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered = filtered.sort((a, b) => b.rating - a.rating);
        break;
      default:
        filtered = filtered.sort((a, b) => b.rating * b.reviews - a.rating * a.reviews);
        break;
    }

    return filtered;
  }
}
