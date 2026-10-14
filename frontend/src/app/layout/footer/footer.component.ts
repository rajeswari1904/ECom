import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="border-t border-slate-200 bg-white">
      <div class="container grid gap-8 py-12 md:grid-cols-4">
        <div>
          <div class="text-2xl font-black text-slate-900">ABC LED</div>
          <p class="mt-3 text-sm text-slate-600">Thoughtfully designed lighting for every space.</p>
        </div>

        <div>
          <h4 class="text-sm font-bold uppercase tracking-[0.18em] text-slate-900">Shop</h4>
          <ul class="mt-4 space-y-2 text-sm text-slate-600">
            <li>LED Bulbs</li>
            <li>Panel Lights</li>
            <li>Smart LEDs</li>
          </ul>
        </div>

        <div>
          <h4 class="text-sm font-bold uppercase tracking-[0.18em] text-slate-900">Company</h4>
          <ul class="mt-4 space-y-2 text-sm text-slate-600">
            <li>About Us</li>
            <li>Support</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h4 class="text-sm font-bold uppercase tracking-[0.18em] text-slate-900">Newsletter</h4>
          <div class="mt-4 flex gap-2">
            <input class="w-full rounded-full border border-slate-200 px-3 py-2 text-sm outline-none focus:border-amber-400" placeholder="Email address" />
            <button class="rounded-full bg-amber-500 px-4 py-2 text-sm font-semibold text-white">Join</button>
          </div>
        </div>
      </div>
    </footer>
  `,
})
export class FooterComponent {}
