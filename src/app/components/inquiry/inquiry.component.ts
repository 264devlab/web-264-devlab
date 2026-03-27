import { Component } from '@angular/core';

@Component({
  selector: 'app-inquiry',
  standalone: true,
  imports: [],
  template: `
    <section class="inquiry section-high py-32">
      <div class="container text-center">
        <div class="inquiry-card card-high reveal">
          <h2 class="display-lg mb-4">¿Tenés algo en mente y no sabés si se puede hacer?</h2>
          <p class="body-lg mb-8">Antes de descartar esa idea por "imposible", preguntanos. Te damos un veredicto técnico honesto.</p>
          <button class="btn-primary">Consultar ahora</button>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .text-center { text-align: center; }
    .inquiry-card {
      max-width: 900px;
      margin: 0 auto;
      padding: 4rem 2rem;
      background: linear-gradient(135deg, var(--surface-highest), var(--surface-high));
    }
  `]
})
export class InquiryComponent {}
