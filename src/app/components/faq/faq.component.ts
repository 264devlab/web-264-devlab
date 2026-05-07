import { Component, AfterViewInit, ElementRef, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss'
})
export class FaqComponent implements AfterViewInit {
  faqs = [
    { question: '¿Cómo se manejan los costos?', answer: 'Trabajamos con presupuestos cerrados por hitos de entrega. Sabés exactamente cuánto y cuándo vas a invertir.' },
    { question: '¿Cuánto tiempo lleva un desarrollo?', answer: 'Depende de la complejidad. Un MVP suele tomar de 4 a 8 semanas, mientras que sistemas robustos se escalan en iteraciones continuas.' },
    { question: '¿Qué servicios de seguimiento ofrecen?', answer: 'Ofrecemos auditorías técnicas mensuales y mantenimiento evolutivo para que tu herramienta nunca se quede atrás.' }
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
        
        const reveals = host.querySelectorAll('.reveal');

        if (reduceMotion) {
          gsap.set(reveals, { autoAlpha: 1, y: 0 });
          return;
        }

        gsap.set(reveals, { autoAlpha: 0, y: 30 });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: host.querySelector('.faq'),
            start: 'top 75%',
            toggleActions: 'play none none none'
          }
        });

        tl.to(reveals, {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          stagger: 0.15
        });

        return () => {};
      }
    );
  }
}
