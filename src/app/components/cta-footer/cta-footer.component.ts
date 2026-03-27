import { Component } from '@angular/core';

@Component({
  selector: 'app-cta-footer',
  standalone: true,
  imports: [],
  template: `
    <section class="cta-footer container py-32 reveal">
      <div class="cta-card shadow-2xl">
        <h2 class="display-lg mb-8">¿Cuándo resolver algo con tecnología?</h2>
        <div class="cta-btns">
          <button class="btn-primary">¡Hablar por WhatsApp!</button>
          <button class="btn-glass">Ver propuesta</button>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .cta-footer { perspective: 1000px; }
    .cta-card {
      background: linear-gradient(135deg, var(--primary), var(--secondary));
      padding: 6rem 4rem;
      border-radius: 2rem;
      text-align: center;
      color: white;
      box-shadow: 0 50px 100px rgba(0,0,0,0.5);
    }
    .display-lg { color: white; }
    .cta-btns { display: flex; gap: 2rem; justify-content: center; }
    .btn-primary { background: white; color: var(--surface); }
    .btn-glass { border-color: rgba(255,255,255,0.3); color: white; }
    
    @media (max-width: 768px) {
      .cta-btns { flex-direction: column; align-items: stretch; }
      .cta-card { padding: 4rem 2rem; }
    }
  `]
})
export class CtaFooterComponent {}
