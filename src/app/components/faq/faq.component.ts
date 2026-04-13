import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [],
  template: `
    <section class="faq section-low py-32">
      <div class="container">
        <div class="header-center mb-16">
          <span class="label-md reveal">Soporte y Dudas</span>
          <h2 class="display-lg mt-4 reveal">Preguntas Frecuentes</h2>
        </div>

        <div class="faq-list reveal">
          @for (item of faqs; track item.question) {
            <details class="faq-item mb-8">
              <summary class="title-lg">
                <span>{{ item.question }}</span>
                <span class="chevron-arrow">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                </span>
              </summary>
              <div class="faq-content">
                <p class="body-md pt-6">{{ item.answer }}</p>
              </div>
            </details>
          }
        </div>
      </div>
    </section>
  `,
  styles: [`
    .header-center { text-align: center; margin-bottom: 5rem; }
    .faq-list { max-width: 850px; margin: 0 auto; }
    
    .faq-item { 
      background-color: var(--surface-highest); 
      border-radius: 1.5rem;
      border: 1px solid var(--outline-variant);
      transition: all 0.4s var(--ease-premium);
      overflow: hidden;
    }

    .faq-item[open] {
      border-color: var(--primary-container);
      background-color: var(--surface-high);
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
      filter: brightness(1.02);
    }

    summary {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 2rem 2.5rem;
      cursor: pointer;
      list-style: none;
      user-select: none;
    }

    summary::-webkit-details-marker { display: none; }

    .chevron-arrow {
      color: var(--primary);
      transition: all 0.4s var(--ease-premium);
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: var(--surface-low);
      border: 1px solid var(--outline-variant);
    }

    .faq-item[open] .chevron-arrow {
      transform: rotate(180deg);
      background: var(--primary);
      color: white;
      border-color: var(--primary);
    }

    .faq-content {
      padding: 0 2.5rem 2.5rem 2.5rem;
      animation: slideDown 0.5s var(--ease-premium);
    }

    .faq-content p { 
      color: var(--on-surface-variant); 
      opacity: 0.9;
      line-height: 1.8;
      border-top: 1px solid var(--outline-variant);
    }

    @keyframes slideDown {
      from { opacity: 0; transform: translateY(-15px); }
      to { opacity: 1; transform: translateY(0); }
    }

    .faq-item:hover {
      border-color: var(--primary);
      transform: translateY(-2px);
    }

    @media (max-width: 768px) {
      .header-center { margin-bottom: 3rem; }
      .faq-item { border-radius: 1rem; }
      summary { padding: 1.5rem; }
      .faq-content { padding: 0 1.5rem 1.5rem 1.5rem; }
    }
  `]
})
export class FaqComponent {
  faqs = [
    { question: '¿Cómo se manejan los costos?', answer: 'Trabajamos con presupuestos cerrados por hitos de entrega. Sabés exactamente cuánto y cuándo vas a invertir.' },
    { question: '¿Cuánto tiempo lleva un desarrollo?', answer: 'Depende de la complejidad. Un MVP suele tomar de 4 a 8 semanas, mientras que sistemas robustos se escalan en iteraciones continuas.' },
    { question: '¿Qué servicios de seguimiento ofrecen?', answer: 'Ofrecemos auditorías técnicas mensuales y mantenimiento evolutivo para que tu herramienta nunca se quede atrás.' }
  ];
}
