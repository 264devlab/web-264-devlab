import { Component } from '@angular/core';

@Component({
  selector: 'app-solutions',
  standalone: true,
  imports: [],
  templateUrl: './solutions.component.html',
  styleUrl: './solutions.component.scss'})
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
