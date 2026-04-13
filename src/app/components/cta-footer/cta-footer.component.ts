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
          <a href="https://wa.me/5492644518136?text=Hola%20264DevLab%2C%20me%20gustar%C3%ADa%20consultar%20por%20un%20desarrollo." target="_blank" class="btn-primary cta-light">¡Hablar por WhatsApp!</a>
          <a href="mailto:contacto@devlab.com.ar" class="btn-secondary cta-glass">Enviar correo</a>
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
    .cta-btns { display: flex; gap: 1rem; justify-content: center; }
    .btn-primary.cta-light { background: white; color: var(--surface); }
    .btn-primary.cta-light:hover { background: #f0f0f0; box-shadow: 0 10px 30px rgba(255,255,255,0.2); }
    .btn-secondary.cta-glass { border-color: rgba(255,255,255,0.3); color: white; }
    .btn-secondary.cta-glass:hover { background: rgba(255,255,255,0.1); }
    
    @media (max-width: 768px) {
      .cta-btns { flex-direction: column; align-items: stretch; }
      .cta-card { padding: 4rem 2rem; }
    }
  `]
})
export class CtaFooterComponent {}
