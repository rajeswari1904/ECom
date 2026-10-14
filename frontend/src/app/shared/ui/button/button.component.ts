import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button
      [type]="type"
      [class]="classes"
      [disabled]="disabled"
    >
      <ng-content></ng-content>
    </button>
  `,
})
export class ButtonComponent {
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() variant: 'primary' | 'secondary' | 'dark' | 'outline' = 'primary';
  @Input() disabled = false;

  get classes(): string {
    const base = 'inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition duration-200 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2';

    const variants: Record<string, string> = {
      primary: 'bg-amber-500 text-white hover:bg-amber-600 shadow-soft',
      secondary: 'bg-white text-slate-700 border border-slate-200 hover:border-slate-300',
      dark: 'bg-slate-900 text-white hover:bg-slate-800',
      outline: 'border border-slate-200 bg-transparent text-slate-700 hover:border-slate-300',
    };

    return `${base} ${variants[this.variant]} ${this.disabled ? 'cursor-not-allowed opacity-60' : ''}`.trim();
  }
}
