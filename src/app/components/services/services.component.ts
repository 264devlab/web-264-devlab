import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [],
  template: `
    <section class="services section-low">
      <div class="container">
        <h2 class="headline-lg">Qué hacemos</h2>
        <div class="services-grid">
          @for (service of services; track service.title) {
            <div class="card-high">
              <div class="service-icon">
                <div class="pip"></div>
              </div>
              <h3 class="title-lg">{{ service.title }}</h3>
              <p>{{ service.description }}</p>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styles: [`
    .services {
      padding: 10rem 2rem;
    }
    .container {
      max-width: 1200px;
      margin: 0 auto;
    }
    h2 {
      margin-bottom: 4rem;
    }
    .services-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 1.5rem;
    }
    .service-icon {
      margin-bottom: 1.5rem;
    }
    .pip {
      width: 8px;
      height: 8px;
      background: var(--primary);
      box-shadow: 0 0 10px var(--primary-glow);
    }
    h3 {
      margin-bottom: 1rem;
      color: var(--primary);
    }
    p {
      color: var(--on-surface-variant);
      font-size: 0.9375rem;
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
