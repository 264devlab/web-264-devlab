import { Component, AfterViewInit, ElementRef, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-process',
  standalone: true,
  imports: [],
  templateUrl: './process.component.html',
  styleUrl: './process.component.scss'
})
export class ProcessComponent implements AfterViewInit {
  steps = [
    { tag: 'Exploración', title: 'Mapeo de la Visión', description: 'Nos contás tu problema o visión inicial. Escuchamos qué necesitás resolver sin vueltas técnicas innecesarias.' },
    { tag: 'Estrategia', title: 'Plan de Acción Técnico', description: 'Diseñamos el camino técnico más eficiente. Te presentamos una hoja de ruta clara con costos y tiempos cerrados.' },
    { tag: 'Ejecución', title: 'Desarrollo Ágil', description: 'Construimos iterando y mostrándote avances reales. Estás en contacto directo con los que pican el código.' },
    { tag: 'Despliegue', title: 'Puesta en Marcha', description: 'Lanzamos la solución pulida al 100%. Te entregamos todo listo para funcionar, sin cabos sueltos ni sorpresas.' },
    { tag: 'Evolución', title: 'Mejora Continua', description: 'Auditamos y mejoramos según el uso real. Tu éxito a largo plazo es nuestro mejor portfolio.' }
  ];

  constructor(
    private el: ElementRef,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    if (isPlatformBrowser(this.platformId)) {
      gsap.registerPlugin(ScrollTrigger);
    }
  }

  ngAfterViewInit() {
    if (!isPlatformBrowser(this.platformId)) return;

    let mm = gsap.matchMedia();

    mm.add(
      {
        reduceMotion: '(prefers-reduced-motion: reduce)',
        isDesktop: '(min-width: 800px)',
        isMobile: '(max-width: 799px)'
      },
      (context) => {
        const { reduceMotion } = context.conditions as { reduceMotion: boolean; isDesktop: boolean; isMobile: boolean };
        const host = this.el.nativeElement;
        
        const headers = host.querySelectorAll('.header-center .reveal');
        const items = host.querySelectorAll('.timeline-item');
        const line = host.querySelector('.timeline-line');

        if (reduceMotion) {
          gsap.set([headers, items, line], { autoAlpha: 1, y: 0 });
          return;
        }

        gsap.set([headers, items], { autoAlpha: 0, y: 30 });
        if (line) gsap.set(line, { scaleY: 0, transformOrigin: 'top center' });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: host.querySelector('.process'),
            start: 'top 75%',
            toggleActions: 'play none none none'
          }
        });

        tl.to(headers, {
            autoAlpha: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            stagger: 0.1
          });

        if (line) {
          tl.to(line, {
            scaleY: 1,
            duration: 1.5,
            ease: 'power2.inOut'
          }, '-=0.4');
        }

        tl.to(items, {
            autoAlpha: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            stagger: 0.2
          }, line ? '-=1.2' : '-=0.4');

        return () => {};
      }
    );
  }
}
