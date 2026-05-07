import { Component } from '@angular/core';

@Component({
  selector: 'app-why-us',
  standalone: true,
  imports: [],
  templateUrl: './why-us.component.html',
  styleUrl: './why-us.component.scss'})
export class WhyUsComponent {
  values = [
    { index: '01', title: 'Sin intermediarios', description: 'Hablás directo con los que desarrollan tu proyecto. Sin ruidos ni demoras.' },
    { index: '02', title: 'Claridad total', description: 'Desde el minuto uno sabés qué se puede hacer y qué no. Honestidad técnica.' },
    { index: '03', title: 'A medida', description: 'No adaptamos tu idea a un molde, creamos el molde específico para tu necesidad.' },
    { index: '04', title: 'Criterio Técnico', description: 'Elegimos tecnología estable para que tu inversión dure y escale durante años.' },
    { index: '05', title: 'Acompañamiento', description: 'Seguimos ahí después de la entrega para que todo rinda como el primer día.' }
  ];
}
