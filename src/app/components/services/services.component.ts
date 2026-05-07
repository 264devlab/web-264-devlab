import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'})
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
