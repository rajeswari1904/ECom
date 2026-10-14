import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { finalize } from 'rxjs';

import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  template: `
    <div class="flex min-h-screen items-center justify-center bg-[radial-gradient(circle_at_top,_#fff8e8,_#ffffff_50%)] p-6">
      <div class="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-8 shadow-soft">
        <div class="mb-6 text-center">
          <div class="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 text-xl font-bold text-amber-700">A</div>
          <h1 class="mt-4 text-3xl font-black text-slate-900">Welcome back</h1>
          <p class="mt-2 text-sm text-slate-600">Login to continue shopping</p>
        </div>

        <form class="space-y-4" (ngSubmit)="submit()">
          <div>
            <label class="mb-2 block text-sm font-semibold text-slate-700">Email</label>
            <input
              type="email"
              name="email"
              [(ngModel)]="form.email"
              class="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-amber-400"
              placeholder="you@example.com"
              required
            />
          </div>
          <div>
            <label class="mb-2 block text-sm font-semibold text-slate-700">Password</label>
            <input
              type="password"
              name="password"
              [(ngModel)]="form.password"
              class="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-amber-400"
              placeholder="••••••••"
              required
            />
          </div>

          <div *ngIf="error" class="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            {{ error }}
          </div>

          <button type="submit" [disabled]="isSubmitting" class="w-full rounded-full bg-slate-900 px-4 py-3 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:bg-slate-400">
            {{ isSubmitting ? 'Logging in...' : 'Login' }}
          </button>
        </form>

        <div class="mt-6 text-center text-sm text-slate-600">
          New here? <a routerLink="/register" class="font-semibold text-amber-600">Create an account</a>
        </div>
      </div>
    </div>
  `,
})
export class LoginPage {
  form = {
    email: '',
    password: '',
  };

  error = '';
  isSubmitting = false;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  submit(): void {
    this.error = '';
    this.isSubmitting = true;

    this.authService
      .login({
        email: this.form.email,
        password: this.form.password,
      })
      .pipe(finalize(() => (this.isSubmitting = false)))
      .subscribe({
        next: () => this.router.navigateByUrl('/products'),
        error: (error) => {
          this.error = error?.error?.message || 'Unable to log in. Please try again.';
        },
      });
  }
}
