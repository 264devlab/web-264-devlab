import { Component, AfterViewInit, ElementRef, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-why-us',
  standalone: true,
  imports: [],
  templateUrl: './why-us.component.html',
  styleUrl: './why-us.component.scss'
})
export class WhyUsComponent implements AfterViewInit {
  values = [
    { index: '01', title: 'Sin intermediarios', description: 'Hablás directo con los que desarrollan tu proyecto. Sin ruidos ni demoras.' },
    { index: '02', title: 'Claridad total', description: 'Desde el minuto uno sabés qué se puede hacer y qué no. Honestidad técnica.' },
    { index: '03', title: 'A medida', description: 'No adaptamos tu idea a un molde, creamos el molde específico para tu necesidad.' },
    { index: '04', title: 'Criterio Técnico', description: 'Elegimos tecnología estable para que tu inversión dure y escale durante años.' },
    { index: '05', title: 'Acompañamiento', description: 'Seguimos ahí después de la entrega para que todo rinda como el primer día.' }
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
        
        const headers = host.querySelectorAll('.header-left .reveal');
        const cards = host.querySelectorAll('.value-card');

        if (reduceMotion) {
          gsap.set([headers, cards], { autoAlpha: 1, y: 0 });
          return;
        }

        gsap.set([headers, cards], { autoAlpha: 0, y: 30 });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: host.querySelector('.why-us'),
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
          })
          .to(cards, {
            autoAlpha: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            stagger: 0.15
          }, '-=0.4');

        return () => {};
      }
    );
  }
}
