import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss'})
export class FaqComponent {
  faqs = [
    { question: '¿Cómo se manejan los costos?', answer: 'Trabajamos con presupuestos cerrados por hitos de entrega. Sabés exactamente cuánto y cuándo vas a invertir.' },
    { question: '¿Cuánto tiempo lleva un desarrollo?', answer: 'Depende de la complejidad. Un MVP suele tomar de 4 a 8 semanas, mientras que sistemas robustos se escalan en iteraciones continuas.' },
    { question: '¿Qué servicios de seguimiento ofrecen?', answer: 'Ofrecemos auditorías técnicas mensuales y mantenimiento evolutivo para que tu herramienta nunca se quede atrás.' }
  ];
}
