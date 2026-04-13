import { Component } from '@angular/core';

@Component({
  selector: 'app-process',
  standalone: true,
  imports: [],
  template: `
    <section class="process py-32">
      <div class="container">
        <div class="header-center mb-16">
          <span class="label-md reveal">Metodología</span>
          <h2 class="display-lg mt-4 reveal">Nuestro Proceso</h2>
          <p class="body-lg mt-4 reveal">Un flujo de trabajo diseñado para que cada paso aporte valor real a tu proyecto.</p>
        </div>

        <div class="timeline">
          <div class="timeline-line"></div>
          @for (step of steps; track step.title; let i = $index) {
            <div class="timeline-item reveal" [class.reverse]="i % 2 !== 0">
              <div class="timeline-dot">
                <span>{{ i + 1 }}</span>
              </div>
              <div class="timeline-content card-high">
                <span class="step-tag">{{ step.tag }}</span>
                <h3 class="title-lg mt-2 mb-4">{{ step.title }}</h3>
                <p class="body-md">{{ step.description }}</p>
              </div>
              <div class="timeline-spacer"></div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styles: [`
    .header-center { text-align: center; max-width: 700px; margin-left: auto; margin-right: auto; }
    .timeline { position: relative; max-width: 1000px; margin: 0 auto; padding: 2rem 0; }
    .timeline-line {
      position: absolute;
      left: 50%; top: 0; bottom: 0;
      width: 1px; background: linear-gradient(to bottom, transparent, var(--outline-variant) 10%, var(--outline-variant) 90%, transparent);
      transform: translateX(-50%);
    }
    .timeline-item {
      display: grid;
      grid-template-columns: 1fr 60px 1fr;
      align-items: center;
      margin-bottom: 4rem;
    }
    .timeline-item.reverse .timeline-content { grid-column: 3; }
    .timeline-item.reverse .timeline-spacer { grid-column: 1; grid-row: 1; }
    
    .timeline-dot {
      grid-column: 2;
      width: 40px; height: 40px;
      background: var(--surface-low);
      border: 1px solid var(--outline-variant);
      border-radius: 50%;
      display: flex; align-items: center; justify-content: center;
      z-index: 2; margin: 0 auto;
      font-weight: 800; color: var(--primary);
      box-shadow: 0 0 20px rgba(0,0,0,0.3);
    }
    .timeline-content { padding: 2.5rem; }
    .step-tag { font-size: 0.7rem; font-weight: 700; text-transform: uppercase; color: var(--primary); opacity: 0.6; letter-spacing: 0.1em; }
    
    @media (max-width: 768px) {
      .timeline-line { left: 20px; }
      .timeline-item { grid-template-columns: 40px 1fr; gap: 1.5rem; }
      .timeline-item.reverse .timeline-content { grid-column: 2; }
      .timeline-dot { grid-column: 1; margin: 0; width: 32px; height: 32px; }
      .timeline-spacer { display: none; }
    }
  `]
})
export class ProcessComponent {
  steps = [
    { tag: 'Exploración', title: 'Mapeo de la Visión', description: 'Nos contás tu problema o visión inicial. Escuchamos qué necesitás resolver sin vueltas técnicas innecesarias.' },
    { tag: 'Estrategia', title: 'Plan de Acción Técnico', description: 'Diseñamos el camino técnico más eficiente. Te presentamos una hoja de ruta clara con costos y tiempos cerrados.' },
    { tag: 'Ejecución', title: 'Desarrollo Ágil', description: 'Construimos iterando y mostrándote avances reales. Estás en contacto directo con los que pican el código.' },
    { tag: 'Despliegue', title: 'Puesta en Marcha', description: 'Lanzamos la solución pulida al 100%. Te entregamos todo listo para funcionar, sin cabos sueltos ni sorpresas.' },
    { tag: 'Evolución', title: 'Mejora Continua', description: 'Auditamos y mejoramos según el uso real. Tu éxito a largo plazo es nuestro mejor portfolio.' }
  ];
}
