import { Component } from '@angular/core';

@Component({
  selector: 'app-process',
  standalone: true,
  imports: [],
  templateUrl: './process.component.html',
  styleUrl: './process.component.scss'})
export class ProcessComponent {
  steps = [
    { tag: 'Exploración', title: 'Mapeo de la Visión', description: 'Nos contás tu problema o visión inicial. Escuchamos qué necesitás resolver sin vueltas técnicas innecesarias.' },
    { tag: 'Estrategia', title: 'Plan de Acción Técnico', description: 'Diseñamos el camino técnico más eficiente. Te presentamos una hoja de ruta clara con costos y tiempos cerrados.' },
    { tag: 'Ejecución', title: 'Desarrollo Ágil', description: 'Construimos iterando y mostrándote avances reales. Estás en contacto directo con los que pican el código.' },
    { tag: 'Despliegue', title: 'Puesta en Marcha', description: 'Lanzamos la solución pulida al 100%. Te entregamos todo listo para funcionar, sin cabos sueltos ni sorpresas.' },
    { tag: 'Evolución', title: 'Mejora Continua', description: 'Auditamos y mejoramos según el uso real. Tu éxito a largo plazo es nuestro mejor portfolio.' }
  ];
}
