import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-seller-page',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container py-12">
      <div class="mb-8 flex items-center justify-between gap-4">
        <div>
          <p class="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">Seller panel</p>
          <h1 class="mt-2 text-4xl font-black text-slate-900">Seller dashboard</h1>
        </div>
        <button class="rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white">Add new product</button>
      </div>

      <div class="grid gap-6 md:grid-cols-4">
        <div class="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div class="text-sm text-slate-500">Orders</div>
          <div class="mt-2 text-3xl font-black text-slate-900">46</div>
          <div class="mt-2 text-sm text-emerald-600">+12% from last week</div>
        </div>
        <div class="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div class="text-sm text-slate-500">Inventory</div>
          <div class="mt-2 text-3xl font-black text-slate-900">320</div>
          <div class="mt-2 text-sm text-slate-500">18 low-stock items</div>
        </div>
        <div class="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div class="text-sm text-slate-500">Revenue</div>
          <div class="mt-2 text-3xl font-black text-slate-900">₹84k</div>
          <div class="mt-2 text-sm text-emerald-600">+₹11.8k this month</div>
        </div>
        <div class="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div class="text-sm text-slate-500">Conversion</div>
          <div class="mt-2 text-3xl font-black text-slate-900">4.8%</div>
          <div class="mt-2 text-sm text-slate-500">Above category average</div>
        </div>
      </div>

      <div class="mt-8 grid gap-8 xl:grid-cols-[1.4fr_0.8fr]">
        <div class="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div class="mb-5 flex items-center justify-between">
            <h2 class="text-2xl font-bold text-slate-900">Recent orders</h2>
            <span class="rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">Live</span>
          </div>

          <div class="overflow-hidden rounded-2xl border border-slate-200">
            <table class="min-w-full text-left text-sm">
              <thead class="bg-slate-50 text-slate-600">
                <tr>
                  <th class="px-4 py-3 font-semibold">Order</th>
                  <th class="px-4 py-3 font-semibold">Customer</th>
                  <th class="px-4 py-3 font-semibold">Product</th>
                  <th class="px-4 py-3 font-semibold">Status</th>
                  <th class="px-4 py-3 font-semibold text-right">Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr class="border-t border-slate-200">
                  <td class="px-4 py-3 font-medium text-slate-900">#ABC-1042</td>
                  <td class="px-4 py-3 text-slate-600">Asha S.</td>
                  <td class="px-4 py-3 text-slate-600">Ultra Slim Panel</td>
                  <td class="px-4 py-3"><span class="rounded-full bg-emerald-100 px-2 py-1 text-xs font-semibold text-emerald-700">Packed</span></td>
                  <td class="px-4 py-3 text-right font-semibold text-slate-900">₹1,299</td>
                </tr>
                <tr class="border-t border-slate-200">
                  <td class="px-4 py-3 font-medium text-slate-900">#ABC-1041</td>
                  <td class="px-4 py-3 text-slate-600">Nikhil P.</td>
                  <td class="px-4 py-3 text-slate-600">Smart LED Bulb</td>
                  <td class="px-4 py-3"><span class="rounded-full bg-blue-100 px-2 py-1 text-xs font-semibold text-blue-700">Processing</span></td>
                  <td class="px-4 py-3 text-right font-semibold text-slate-900">₹799</td>
                </tr>
                <tr class="border-t border-slate-200">
                  <td class="px-4 py-3 font-medium text-slate-900">#ABC-1037</td>
                  <td class="px-4 py-3 text-slate-600">Riya K.</td>
                  <td class="px-4 py-3 text-slate-600">RGB Strip Kit</td>
                  <td class="px-4 py-3"><span class="rounded-full bg-amber-100 px-2 py-1 text-xs font-semibold text-amber-700">Awaiting pickup</span></td>
                  <td class="px-4 py-3 text-right font-semibold text-slate-900">₹1,899</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="space-y-6">
          <div class="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 class="text-2xl font-bold text-slate-900">Inventory health</h2>
            <div class="mt-5 space-y-4">
              <div>
                <div class="mb-1 flex justify-between text-sm text-slate-600"><span>Smart LED Bulb</span><span>76%</span></div>
                <div class="h-2 rounded-full bg-slate-100"><div class="h-2 w-[76%] rounded-full bg-amber-400"></div></div>
              </div>
              <div>
                <div class="mb-1 flex justify-between text-sm text-slate-600"><span>RGB Strip Kit</span><span>52%</span></div>
                <div class="h-2 rounded-full bg-slate-100"><div class="h-2 w-[52%] rounded-full bg-violet-400"></div></div>
              </div>
              <div>
                <div class="mb-1 flex justify-between text-sm text-slate-600"><span>Streetguard Flood</span><span>89%</span></div>
                <div class="h-2 rounded-full bg-slate-100"><div class="h-2 w-[89%] rounded-full bg-emerald-400"></div></div>
              </div>
            </div>
          </div>

          <div class="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 class="text-xl font-bold text-slate-900">Payout summary</h2>
            <div class="mt-4 space-y-3 text-sm text-slate-600">
              <div class="flex justify-between"><span>Available now</span><span class="font-semibold text-slate-900">₹26,400</span></div>
              <div class="flex justify-between"><span>Pending</span><span class="font-semibold text-slate-900">₹12,200</span></div>
              <div class="flex justify-between"><span>Refunds</span><span class="font-semibold text-slate-900">₹1,120</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class SellerPage {}
