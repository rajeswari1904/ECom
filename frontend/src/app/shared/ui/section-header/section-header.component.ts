import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="mb-8">
      <p class="text-xs font-semibold uppercase tracking-[0.22em] text-amber-600">{{ eyebrow }}</p>
      <h2 class="mt-2 text-3xl font-black text-slate-900 md:text-4xl">{{ title }}</h2>
      <p *ngIf="subtitle" class="mt-3 max-w-2xl text-base text-slate-600">{{ subtitle }}</p>
    </div>
  `,
})
export class SectionHeaderComponent {
  @Input() eyebrow = 'Section';
  @Input() title = 'Title';
  @Input() subtitle = '';
}
