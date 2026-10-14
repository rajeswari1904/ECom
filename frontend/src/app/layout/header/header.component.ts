import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

import { CartService } from '../../core/services/cart.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <header class="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-sm">
      <div class="container flex items-center justify-between gap-4 py-4">
        <div class="flex items-center gap-3">
          <div class="flex h-10 w-10 items-center justify-center rounded-full bg-amber-400 text-lg font-bold text-white">A</div>
          <div>
            <div class="text-xl font-black tracking-tight text-slate-900">ABC LED</div>
            <div class="text-[10px] uppercase tracking-[0.24em] text-slate-500">Light Up Your World</div>
          </div>
        </div>

        <nav class="hidden items-center gap-6 text-sm font-medium text-slate-700 md:flex">
          <a routerLink="/" class="hover:text-amber-600">Home</a>
          <a routerLink="/products" class="hover:text-amber-600">Products</a>
          <a routerLink="/categories" class="hover:text-amber-600">Categories</a>
          <a routerLink="/offers" class="hover:text-amber-600">Offers</a>
          <a routerLink="/customer" class="hover:text-amber-600">Account</a>
        </nav>

        <div class="flex items-center gap-2 md:gap-3">
          <div class="hidden items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-600 md:flex">
            <span>🔍</span>
            <input class="w-36 bg-transparent outline-none" placeholder="Search" />
          </div>
          <a routerLink="/login" class="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700">Login</a>
          <a routerLink="/cart" class="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white">Cart ({{ cartCount }})</a>
        </div>
      </div>
    </header>
  `,
})
export class HeaderComponent implements OnInit {
  cartCount = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.cartCount$.subscribe((count) => {
      this.cartCount = count;
    });
  }
}
