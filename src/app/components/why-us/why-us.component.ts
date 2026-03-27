import { Component } from '@angular/core';

@Component({
  selector: 'app-why-us',
  standalone: true,
  imports: [],
  template: `
    <section class="why-us section-low py-32">
      <div class="container">
        <div class="header-left mb-16">
          <span class="label-md reveal">Nuestros Valores</span>
          <h2 class="display-lg mt-4 reveal">¿Por qué trabajar con nosotros?</h2>
          <p class="body-lg mt-4 reveal">Un enfoque artesanal para desafíos digitales complejos.</p>
        </div>

        <div class="values-grid">
          @for (item of values; track item.title) {
            <div class="value-card reveal">
              <div class="value-index">{{ item.index }}</div>
              <h3 class="title-lg mb-2">{{ item.title }}</h3>
              <p class="body-md">{{ item.description }}</p>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styles: [`
    .values-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 3rem;
    }
    .value-index {
      font-size: 0.75rem;
      font-weight: 800;
      color: var(--primary);
      margin-bottom: 1rem;
      opacity: 0.5;
    }
    .value-card h3 { color: var(--on-surface); }
    .value-card p { color: var(--on-surface-variant); }
  `]
})
export class WhyUsComponent {
  values = [
    { index: '01', title: 'Sin intermediarios', description: 'Hablás directo con los que desarrollan tu proyecto. Sin ruidos ni demoras.' },
    { index: '02', title: 'Claridad total', description: 'Desde el minuto uno sabés qué se puede hacer y qué no. Honestidad técnica.' },
    { index: '03', title: 'A medida', description: 'No adaptamos tu idea a un molde, creamos el molde específico para tu necesidad.' },
    { index: '04', title: 'Criterio Técnico', description: 'Elegimos tecnología estable para que tu inversión dure y escale durante años.' },
    { index: '05', title: 'Acompañamiento', description: 'Seguimos ahí después de la entrega para que todo rinda como el primer día.' }
  ];
}
