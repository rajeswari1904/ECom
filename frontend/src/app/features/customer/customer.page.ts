import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-customer-page',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container py-12">
      <div class="mb-8 flex items-center justify-between gap-4">
        <div>
          <p class="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">Account</p>
          <h1 class="mt-2 text-4xl font-black text-slate-900">Customer dashboard</h1>
        </div>
        <button class="rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white">Edit profile</button>
      </div>

      <div class="grid gap-6 md:grid-cols-3">
        <div class="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div class="text-sm text-slate-500">Orders</div>
          <div class="mt-2 text-3xl font-black text-slate-900">12</div>
          <div class="mt-2 text-sm text-emerald-600">2 delivered this month</div>
        </div>
        <div class="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div class="text-sm text-slate-500">Wishlist</div>
          <div class="mt-2 text-3xl font-black text-slate-900">8</div>
          <div class="mt-2 text-sm text-slate-500">3 expiring soon</div>
        </div>
        <div class="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div class="text-sm text-slate-500">Saved addresses</div>
          <div class="mt-2 text-3xl font-black text-slate-900">3</div>
          <div class="mt-2 text-sm text-slate-500">Office + home + warehouse</div>
        </div>
      </div>

      <div class="mt-8 grid gap-8 xl:grid-cols-[1.1fr_0.9fr]">
        <div class="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 class="text-2xl font-bold text-slate-900">Recent orders</h2>
          <div class="mt-5 space-y-4">
            <div class="flex items-center justify-between rounded-2xl border border-slate-200 p-4">
              <div>
                <div class="font-semibold text-slate-900">#ABC-1140</div>
                <div class="text-sm text-slate-500">Smart LED Bulb × 2</div>
              </div>
              <div class="text-right">
                <div class="font-semibold text-slate-900">₹1,598</div>
                <div class="text-xs font-medium text-emerald-600">Delivered</div>
              </div>
            </div>
            <div class="flex items-center justify-between rounded-2xl border border-slate-200 p-4">
              <div>
                <div class="font-semibold text-slate-900">#ABC-1119</div>
                <div class="text-sm text-slate-500">RGB Strip Kit × 1</div>
              </div>
              <div class="text-right">
                <div class="font-semibold text-slate-900">₹1,899</div>
                <div class="text-xs font-medium text-amber-600">In transit</div>
              </div>
            </div>
            <div class="flex items-center justify-between rounded-2xl border border-slate-200 p-4">
              <div>
                <div class="font-semibold text-slate-900">#ABC-1102</div>
                <div class="text-sm text-slate-500">Streetguard Flood × 1</div>
              </div>
              <div class="text-right">
                <div class="font-semibold text-slate-900">₹2,399</div>
                <div class="text-xs font-medium text-slate-600">Processing</div>
              </div>
            </div>
          </div>
        </div>

        <div class="space-y-6">
          <div class="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 class="text-xl font-bold text-slate-900">Saved addresses</h2>
            <div class="mt-4 space-y-3 text-sm text-slate-600">
              <div class="rounded-2xl bg-slate-50 p-3">
                <div class="font-semibold text-slate-900">Home</div>
                <div class="mt-1">204, Blossom Avenue, Bengaluru</div>
              </div>
              <div class="rounded-2xl bg-slate-50 p-3">
                <div class="font-semibold text-slate-900">Office</div>
                <div class="mt-1">12th Floor, Electronic City, Bengaluru</div>
              </div>
            </div>
          </div>

          <div class="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 class="text-xl font-bold text-slate-900">Rewards</h2>
            <div class="mt-4 rounded-2xl bg-amber-50 p-4">
              <div class="text-sm text-amber-700">Current points</div>
              <div class="mt-2 text-3xl font-black text-slate-900">2,480</div>
              <div class="mt-2 text-sm text-slate-600">₹500 worth of cashback available</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class CustomerPage {}
