import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [],
  template: `
    <section class="services section-low py-32">
      <div class="container">
        <div class="header-split mb-16 reveal">
          <div>
            <span class="label-md">Expertise</span>
            <h2 class="display-lg mt-4">Qué hacemos</h2>
          </div>
          <p class="body-lg max-w-md">Transformamos ideas complejas en soluciones digitales simples, escalables y orientadas a resultados.</p>
        </div>

        <div class="services-grid">
          @for (service of services; track service.title; let i = $index) {
            <div class="service-card card-high reveal" [class.offset-y]="i % 2 !== 0">
              <div class="service-num-bar">
                <span class="service-number text-gradient-primary">0{{ i + 1 }}</span>
              </div>
              <h3 class="title-lg mt-8">{{ service.title }}</h3>
              <p class="mt-6 body-md opacity-80">{{ service.description }}</p>
              
              <div class="glow-line mt-8"></div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styles: [`
    .services { position: relative; overflow: hidden; }
    .header-split { display: flex; justify-content: space-between; align-items: flex-end; gap: 2rem; flex-wrap: wrap; }
    .max-w-md { max-width: 450px; }
    
    .services-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      gap: 3rem;
      padding-bottom: 4rem;
    }

    .service-card {
      position: relative;
      display: flex;
      flex-direction: column;
      padding: 3.5rem 3rem;
      border: 1px solid var(--outline-variant);
      background: linear-gradient(180deg, var(--surface-highest) 0%, var(--surface-high) 100%);
      overflow: hidden;
      border-radius: 1.5rem;
    }

    .offset-y { transform: translateY(2.5rem); }

    .service-num-bar {
      display: flex;
      align-items: center;
      margin-bottom: 2rem;
    }

    .service-number {
      font-family: var(--font-display);
      font-size: 0.875rem;
      font-weight: 800;
      letter-spacing: 0.1em;
    }

    .glow-line {
      width: 0%;
      height: 2px;
      background: linear-gradient(90deg, var(--primary), transparent);
      transition: width 0.6s var(--ease-premium);
    }

    .service-card:hover .glow-line { width: 100%; }

    .service-card:hover {
      border-color: var(--primary-container);
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
      filter: brightness(1.05);
    }

    h3 { color: var(--on-surface); }
    .opacity-80 { opacity: 0.8; }
    .mt-6 { margin-top: 1.5rem; }

    @media (max-width: 968px) {
      .offset-y { transform: none; }
      .services-grid { gap: 1.5rem; padding-bottom: 0; }
      .header-split { flex-direction: column; align-items: flex-start; }
      .service-card { padding: 2.5rem 2rem; }
    }
  `]
})
export class ServicesComponent {
  services = [
    {
      title: 'Desarrollo de sistemas',
      description: 'Software a medida para gestionar tu negocio sin las limitaciones de herramientas genéricas.'
    },
    {
      title: 'Desarrollo web',
      description: 'Sitios de alto impacto, rápidos y optimizados para convertir visitas en clientes reales.'
    },
    {
      title: 'Automatización',
      description: 'Liberamos a tu equipo de tareas repetitivas conectando procesos digitales de forma fluida.'
    },
    {
      title: 'Integraciones',
      description: 'Hacemos que tus herramientas actuales se hablen entre sí: CRMs, ERPs, y más.'
    },
    {
      title: 'Soporte y mejoras',
      description: 'No te dejamos solo. Mantenemos tus sistemas actualizados y evolucionamos según tus necesidades.'
    }
  ];
}
