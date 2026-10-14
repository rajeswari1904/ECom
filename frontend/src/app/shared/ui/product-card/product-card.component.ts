import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <article class="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
      <img [src]="image" [alt]="name" class="h-64 w-full object-cover" />
      <div class="p-5">
        <div class="flex items-center justify-between gap-3">
          <span class="rounded-full bg-amber-100 px-2 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-amber-700">{{ badge }}</span>
          <span class="text-xs text-slate-500">{{ stock }}</span>
        </div>

        <h3 class="mt-4 text-xl font-bold text-slate-900">{{ name }}</h3>
        <p class="mt-2 text-sm text-slate-600">{{ description }}</p>

        <div class="mt-5 flex items-center justify-between">
          <div>
            <div class="text-2xl font-black text-slate-900">₹{{ price }}</div>
            <div *ngIf="originalPrice" class="text-sm text-slate-400 line-through">₹{{ originalPrice }}</div>
          </div>

          <a [routerLink]="productLink" class="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white">View</a>
        </div>
      </div>
    </article>
  `,
})
export class ProductCardComponent {
  @Input() image = 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80';
  @Input() name = 'Smart LED Bulb';
  @Input() description = 'Premium LED lighting product';
  @Input() badge = 'Popular';
  @Input() stock = 'In stock';
  @Input() price = '799';
  @Input() originalPrice = '899';
  @Input() productLink = '/products/1';
}
