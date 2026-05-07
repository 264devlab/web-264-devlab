import { Component, AfterViewInit, ElementRef, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-solutions',
  standalone: true,
  imports: [],
  templateUrl: './solutions.component.html',
  styleUrl: './solutions.component.scss'
})
export class SolutionsComponent implements AfterViewInit {
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
        
        const labels = host.querySelectorAll('.reveal:not(.solution-card)');
        const cards = host.querySelectorAll('.solution-card');

        if (reduceMotion) {
          gsap.set([labels, cards], { autoAlpha: 1, y: 0 });
          return;
        }

        gsap.set([labels, cards], { autoAlpha: 0, y: 30 });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: host.querySelector('.solutions'),
            start: 'top 75%',
            toggleActions: 'play none none none'
          }
        });

        tl.to(labels, {
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
