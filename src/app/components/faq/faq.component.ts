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
    {
      question: '¿Tengo que saber de tecnología para trabajar con ustedes?',
      answer: 'Para nada. Nosotros hablamos tu mismo idioma: el de los negocios. Vos nos contás qué problema operativo tenés o qué querés lograr comercialmente, y nosotros nos encargamos de traducirlo a la tecnología adecuada. Cero tecnicismos innecesarios.'
    },
    {
      question: '¿Qué pasa si el sistema falla o necesito ayuda después?',
      answer: 'No te dejamos a la deriva. Todo proyecto que entregamos incluye un periodo de garantía post-lanzamiento para asegurar que todo funcione perfecto en el mundo real. Además, ofrecemos planes de soporte y mantenimiento para que tu herramienta siga evolucionando junto a tu negocio.'
    },
    {
      question: '¿Cómo se manejan los costos y los pagos?',
      answer: 'Olvidate de los presupuestos sorpresa. Trabajamos con costos cerrados y cobramos por "hitos" (etapas del proyecto). Esto significa que solo pagás a medida que nosotros te demostramos avances reales y tangibles. Total transparencia desde el día uno.'
    },
    {
      question: '¿Cuánto tiempo lleva construir un sistema?',
      answer: 'Depende de qué tan grande sea tu idea. Por lo general, una primera versión funcional (para que ya puedas usarla o probarla con clientes) nos toma entre 4 y 8 semanas. A partir de ahí, vamos sumando nuevas funcionalidades mes a mes para que no tengas que esperar un año para ver resultados.'
    }
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

        return () => { };
      }
    );
  }
}
