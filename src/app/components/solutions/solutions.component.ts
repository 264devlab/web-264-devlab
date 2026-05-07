import { Component } from '@angular/core';

@Component({
  selector: 'app-solutions',
  standalone: true,
  imports: [],
  templateUrl: './solutions.component.html',
  styleUrl: './solutions.component.scss'
})
export class SolutionsComponent {
  projects = [
    {
      title: 'Sigma S.A.',
      description: 'Plataforma web institucional con catálogo de servicios y soluciones industriales.',
      image: 'projects/sigma-sa-portada.webp',
      link: 'https://sigmasa.com',
      isDevelopment: false
    },
    {
      title: 'Proprius',
      description: 'Software de gestión (SaaS) con arquitectura Clean Architecture para multi-tenancy.',
      image: 'projects/proprius-portada.webp',
      link: null,
      isDevelopment: true
    }
  ];
}
