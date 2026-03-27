import { Component } from '@angular/core';

@Component({
  selector: 'app-solutions',
  standalone: true,
  imports: [],
  template: `
    <section class="solutions section-lower py-32">
      <div class="container">
        <span class="label-md reveal">Featured Work</span>
        <h2 class="headline-lg mt-4 mb-16 reveal">Soluciones Recientes</h2>
        
        <div class="solutions-grid">
          @for (project of projects; track project.title) {
            <div class="solution-card reveal shadow-2xl">
              <div class="card-visual">
                <div class="mock-screenshot" [style.background]="project.gradient"></div>
              </div>
              <div class="card-body">
                <h3 class="title-lg mb-2">{{ project.title }}</h3>
                <p class="body-md">{{ project.description }}</p>
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styles: [`
    .solutions {
      position: relative;
      overflow: hidden;
    }
    .solutions-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
      gap: 3rem;
    }
    .solution-card {
      background: var(--surface-high);
      border-radius: 1.5rem;
      overflow: hidden;
      border: 1px solid rgba(255, 255, 255, 0.05);
      transition: transform 0.4s var(--ease-premium);
    }
    .solution-card:hover {
      transform: translateY(-8px);
    }
    .card-visual {
      height: 280px;
      padding: 1.5rem;
      background: var(--surface-low);
    }
    .mock-screenshot {
      width: 100%;
      height: 100%;
      border-radius: 0.75rem;
      opacity: 0.6;
      position: relative;
    }
    .mock-screenshot::after {
      content: '';
      position: absolute;
      inset: 0;
      background: radial-gradient(circle at top right, rgba(255,255,255,0.1), transparent);
    }
    .card-body {
      padding: 2.5rem;
    }
    p {
      color: var(--on-surface-variant);
      line-height: 1.6;
    }

    @media (max-width: 768px) {
      .solutions-grid { grid-template-columns: 1fr; }
      .card-visual { height: 200px; }
    }
  `]
})
export class SolutionsComponent {
  projects = [
    {
      title: 'Automatización de gestión comercial',
      description: 'Sistema centralizado para el control de stock y ventas en tiempo real, optimizando la logística de distribución.',
      gradient: 'linear-gradient(135deg, #1e293b, #0f172a)'
    },
    {
      title: 'Soluciones Web a medida',
      description: 'Plataforma educativa con alta escalabilidad diseñada para miles de usuarios simultáneos y contenido dinámico.',
      gradient: 'linear-gradient(135deg, #2e1065, #1e1b4b)'
    }
  ];
}
