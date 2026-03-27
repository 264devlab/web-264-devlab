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
            <div class="faq-item card-high mb-4">
              <summary class="title-lg">{{ item.question }}</summary>
              <p class="body-md mt-4">{{ item.answer }}</p>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styles: [`
    .header-center { text-align: center; }
    .faq-list { max-width: 800px; margin: 0 auto; }
    .faq-item { padding: 1.5rem 2rem; cursor: pointer; }
    .faq-item p { color: var(--on-surface-variant); opacity: 0.8; }
  `]
})
export class FaqComponent {
  faqs = [
    { question: '¿Cómo se manejan los costos?', answer: 'Trabajamos con presupuestos cerrados por hitos de entrega. Sabés exactamente cuánto y cuándo vas a invertir.' },
    { question: '¿Cuánto tiempo lleva un desarrollo?', answer: 'Depende de la complejidad. Un MVP suele tomar de 4 a 8 semanas, mientras que sistemas robustos se escalan en iteraciones continuas.' },
    { question: '¿Qué servicios de seguimiento ofrecen?', answer: 'Ofrecemos auditorías técnicas mensuales y mantenimiento evolutivo para que tu herramienta nunca se quede atrás.' }
  ];
}
