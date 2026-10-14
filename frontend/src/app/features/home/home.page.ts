import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { HeaderComponent } from '../../layout/header/header.component';
import { FooterComponent } from '../../layout/footer/footer.component';
import { SectionHeaderComponent } from '../../shared/ui/section-header/section-header.component';
import { ProductCardComponent } from '../../shared/ui/product-card/product-card.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, RouterLink, HeaderComponent, FooterComponent, SectionHeaderComponent, ProductCardComponent],
  template: `
    <app-header></app-header>

    <main>
      <section class="bg-[radial-gradient(circle_at_top,_#fff9ed,_#fffdfb_35%,_#ffffff_100%)]">
        <div class="container grid gap-10 py-16 md:grid-cols-2 md:items-center">
          <div>
            <div class="mb-4 inline-flex rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">
              Premium energy-efficient lighting
            </div>

            <h1 class="max-w-xl text-4xl font-black leading-tight text-slate-900 md:text-6xl">
              Brilliant light for every room.
            </h1>

            <p class="mt-6 max-w-lg text-lg text-slate-600">
              Thoughtfully designed lighting for homes, offices, retail spaces, and outdoor environments.
            </p>

            <div class="mt-8 flex flex-wrap gap-4">
              <a routerLink="/products" class="inline-flex items-center justify-center rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-amber-600">
                Shop Now
              </a>
              <a routerLink="/products" class="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-300">
                Explore Collection
              </a>
            </div>

            <div class="mt-10 flex flex-wrap gap-8 text-sm text-slate-600">
              <div><span class="block text-2xl font-bold text-slate-900">12k+</span> Happy homes</div>
              <div><span class="block text-2xl font-bold text-slate-900">4.9/5</span> Rated quality</div>
              <div><span class="block text-2xl font-bold text-slate-900">35%</span> Energy savings</div>
            </div>
          </div>

          <div class="rounded-[32px] bg-white p-4 shadow-soft ring-1 ring-slate-100">
            <img src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=900&q=80" alt="LED lighting showroom" class="h-[520px] w-full rounded-[24px] object-cover" />
          </div>
        </div>
      </section>

      <section class="py-16">
        <div class="container">
          <div class="mb-10 flex items-end justify-between gap-4">
            <app-section-header
              eyebrow="Popular categories"
              title="Shop by lighting need"
              subtitle=""
            ></app-section-header>
            <a routerLink="/products" class="text-sm font-semibold text-slate-700 hover:text-amber-600">View all</a>
          </div>

          <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div class="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div class="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-amber-100 text-2xl">💡</div>
              <h3 class="text-lg font-bold text-slate-900">LED Bulbs</h3>
              <p class="mt-2 text-sm text-slate-600">Warm, efficient, and long-lasting everyday lighting.</p>
            </div>

            <div class="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div class="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-orange-100 text-2xl">🏢</div>
              <h3 class="text-lg font-bold text-slate-900">Panel Lights</h3>
              <p class="mt-2 text-sm text-slate-600">Clean office and retail illumination with modern finish.</p>
            </div>

            <div class="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div class="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-yellow-100 text-2xl">🔦</div>
              <h3 class="text-lg font-bold text-slate-900">Flood Lights</h3>
              <p class="mt-2 text-sm text-slate-600">Outdoor brightness with weatherproof durability.</p>
            </div>

            <div class="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div class="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-emerald-100 text-2xl">✨</div>
              <h3 class="text-lg font-bold text-slate-900">Smart LEDs</h3>
              <p class="mt-2 text-sm text-slate-600">Connected lighting with automation and scheduling.</p>
            </div>
          </div>
        </div>
      </section>

      <section class="bg-slate-900 py-16 text-white">
        <div class="container">
          <app-section-header
            eyebrow="Best sellers"
            title="Most loved by customers"
            subtitle=""
          ></app-section-header>

          <div class="grid gap-6 md:grid-cols-3">
            <app-product-card
              badge="Best seller"
              stock="In stock"
              name="Smart LED Bulb 12W"
              description="Warm white smart bulb with app and voice support."
              price="799"
              originalPrice="899"
              productLink="/products/1"
            ></app-product-card>

            <app-product-card
              badge="New"
              stock="Low stock"
              name="Ultra Slim Panel 24W"
              description="Modern office panel with uniform brightness and low glare."
              price="1299"
              originalPrice="1499"
              productLink="/products/2"
            ></app-product-card>

            <app-product-card
              badge="Smart"
              stock="In stock"
              name="RGB Strip Kit"
              description="Color-changing strip lighting for modern room accents."
              price="1899"
              originalPrice="2199"
              productLink="/products/3"
            ></app-product-card>
          </div>
        </div>
      </section>

      <section class="py-16">
        <div class="container">
          <div class="rounded-3xl bg-gradient-to-r from-amber-100 via-white to-orange-50 p-10 shadow-soft">
            <div class="grid gap-8 md:grid-cols-2 md:items-center">
              <div>
                <p class="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">Why choose ABC LED</p>
                <h2 class="mt-3 text-3xl font-bold text-slate-900">Energy-conscious lighting that looks premium.</h2>
              </div>

              <div class="grid gap-4 sm:grid-cols-2">
                <div class="rounded-2xl bg-white p-4 shadow-sm">
                  <div class="text-2xl">⚡</div>
                  <h3 class="mt-2 font-bold text-slate-900">Energy saving</h3>
                  <p class="mt-1 text-sm text-slate-600">Low power consumption with long life output.</p>
                </div>
                <div class="rounded-2xl bg-white p-4 shadow-sm">
                  <div class="text-2xl">🌿</div>
                  <h3 class="mt-2 font-bold text-slate-900">Eco friendly</h3>
                  <p class="mt-1 text-sm text-slate-600">Designed to reduce waste and power usage.</p>
                </div>
                <div class="rounded-2xl bg-white p-4 shadow-sm">
                  <div class="text-2xl">✅</div>
                  <h3 class="mt-2 font-bold text-slate-900">Certified quality</h3>
                  <p class="mt-1 text-sm text-slate-600">Reliable products with tested electrical safety.</p>
                </div>
                <div class="rounded-2xl bg-white p-4 shadow-sm">
                  <div class="text-2xl">🛠️</div>
                  <h3 class="mt-2 font-bold text-slate-900">After-sales support</h3>
                  <p class="mt-1 text-sm text-slate-600">Expert guidance for installation and maintenance.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="py-16">
        <div class="container">
          <app-section-header
            eyebrow="Customer stories"
            title="Trusted by homeowners and businesses"
            subtitle=""
          ></app-section-header>

          <div class="grid gap-6 md:grid-cols-3">
            <div class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <p class="text-slate-600">“The brightness and warmth are exactly what we wanted. The entire office looks modern and inviting.”</p>
              <div class="mt-4 font-semibold text-slate-900">Nisha Sharma</div>
              <div class="text-sm text-slate-500">Interior consultant</div>
            </div>

            <div class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <p class="text-slate-600">“Installation was smooth, and the smart dimming feature is excellent for energy control.”</p>
              <div class="mt-4 font-semibold text-slate-900">Rohit Verma</div>
              <div class="text-sm text-slate-500">Homeowner</div>
            </div>

            <div class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <p class="text-slate-600">“Professional quality and fast service. Highly recommended for commercial lighting projects.”</p>
              <div class="mt-4 font-semibold text-slate-900">Amit Singh</div>
              <div class="text-sm text-slate-500">Retail owner</div>
            </div>
          </div>
        </div>
      </section>
    </main>

    <app-footer></app-footer>
  `,
})
export class HomePage {}
