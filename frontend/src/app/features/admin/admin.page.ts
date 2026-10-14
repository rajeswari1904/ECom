import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-page',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container py-12">
      <div class="mb-8 flex items-center justify-between gap-4">
        <div>
          <p class="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">Operations</p>
          <h1 class="mt-2 text-4xl font-black text-slate-900">Admin dashboard</h1>
        </div>
        <button class="rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700">Export report</button>
      </div>

      <div class="grid gap-6 md:grid-cols-4">
        <div class="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div class="text-sm text-slate-500">Total revenue</div>
          <div class="mt-2 text-3xl font-black text-slate-900">₹2.4L</div>
          <div class="mt-2 text-sm text-emerald-600">+18.2% vs last month</div>
        </div>
        <div class="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div class="text-sm text-slate-500">Orders</div>
          <div class="mt-2 text-3xl font-black text-slate-900">231</div>
          <div class="mt-2 text-sm text-slate-500">36 awaiting review</div>
        </div>
        <div class="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div class="text-sm text-slate-500">Customers</div>
          <div class="mt-2 text-3xl font-black text-slate-900">1.8k</div>
          <div class="mt-2 text-sm text-emerald-600">+280 new this month</div>
        </div>
        <div class="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div class="text-sm text-slate-500">Sellers</div>
          <div class="mt-2 text-3xl font-black text-slate-900">42</div>
          <div class="mt-2 text-sm text-amber-600">7 seller approvals pending</div>
        </div>
      </div>

      <div class="mt-8 grid gap-8 xl:grid-cols-[1.2fr_0.8fr]">
        <div class="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 class="text-2xl font-bold text-slate-900">Recent orders</h2>
          <div class="mt-5 overflow-hidden rounded-2xl border border-slate-200">
            <table class="min-w-full text-left text-sm">
              <thead class="bg-slate-50 text-slate-600">
                <tr>
                  <th class="px-4 py-3 font-semibold">Order</th>
                  <th class="px-4 py-3 font-semibold">Customer</th>
                  <th class="px-4 py-3 font-semibold">Channel</th>
                  <th class="px-4 py-3 font-semibold">Status</th>
                  <th class="px-4 py-3 font-semibold text-right">Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr class="border-t border-slate-200">
                  <td class="px-4 py-3 font-medium text-slate-900">#ABC-2124</td>
                  <td class="px-4 py-3 text-slate-600">Mira D.</td>
                  <td class="px-4 py-3 text-slate-600">Website</td>
                  <td class="px-4 py-3"><span class="rounded-full bg-emerald-100 px-2 py-1 text-xs font-semibold text-emerald-700">Confirmed</span></td>
                  <td class="px-4 py-3 text-right font-semibold text-slate-900">₹7,490</td>
                </tr>
                <tr class="border-t border-slate-200">
                  <td class="px-4 py-3 font-medium text-slate-900">#ABC-2121</td>
                  <td class="px-4 py-3 text-slate-600">Vijay N.</td>
                  <td class="px-4 py-3 text-slate-600">Marketplace</td>
                  <td class="px-4 py-3"><span class="rounded-full bg-amber-100 px-2 py-1 text-xs font-semibold text-amber-700">Processing</span></td>
                  <td class="px-4 py-3 text-right font-semibold text-slate-900">₹3,180</td>
                </tr>
                <tr class="border-t border-slate-200">
                  <td class="px-4 py-3 font-medium text-slate-900">#ABC-2117</td>
                  <td class="px-4 py-3 text-slate-600">Pooja A.</td>
                  <td class="px-4 py-3 text-slate-600">Website</td>
                  <td class="px-4 py-3"><span class="rounded-full bg-blue-100 px-2 py-1 text-xs font-semibold text-blue-700">Shipped</span></td>
                  <td class="px-4 py-3 text-right font-semibold text-slate-900">₹5,205</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="space-y-6">
          <div class="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 class="text-xl font-bold text-slate-900">Seller approvals</h2>
            <div class="mt-5 space-y-4 text-sm">
              <div class="flex items-center justify-between rounded-2xl bg-slate-50 p-3">
                <div>
                  <div class="font-semibold text-slate-900">BrightNest Lights</div>
                  <div class="text-slate-500">Business profile review</div>
                </div>
                <span class="rounded-full bg-amber-100 px-2 py-1 text-xs font-semibold text-amber-700">Pending</span>
              </div>
              <div class="flex items-center justify-between rounded-2xl bg-slate-50 p-3">
                <div>
                  <div class="font-semibold text-slate-900">SolarFlare Studio</div>
                  <div class="text-slate-500">GST verification</div>
                </div>
                <span class="rounded-full bg-amber-100 px-2 py-1 text-xs font-semibold text-amber-700">Pending</span>
              </div>
              <div class="flex items-center justify-between rounded-2xl bg-slate-50 p-3">
                <div>
                  <div class="font-semibold text-slate-900">LED Works Co.</div>
                  <div class="text-slate-500">Approved</div>
                </div>
                <span class="rounded-full bg-emerald-100 px-2 py-1 text-xs font-semibold text-emerald-700">Live</span>
              </div>
            </div>
          </div>

          <div class="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 class="text-xl font-bold text-slate-900">Performance</h2>
            <div class="mt-5 space-y-4">
              <div>
                <div class="mb-1 flex justify-between text-sm text-slate-600"><span>Website sales</span><span>72%</span></div>
                <div class="h-2 rounded-full bg-slate-100"><div class="h-2 w-[72%] rounded-full bg-slate-900"></div></div>
              </div>
              <div>
                <div class="mb-1 flex justify-between text-sm text-slate-600"><span>Marketplace sales</span><span>54%</span></div>
                <div class="h-2 rounded-full bg-slate-100"><div class="h-2 w-[54%] rounded-full bg-amber-500"></div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class AdminPage {}
