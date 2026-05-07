import { Component, AfterViewInit, ElementRef, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent implements AfterViewInit {
  services = [
    {
      title: 'Desarrollo de sistemas',
      description: 'Software a medida para gestionar tu negocio sin las limitaciones de herramientas genéricas.'
    },
    {
      title: 'Desarrollo web',
      description: 'Sitios de alto impacto, rápidos y optimizados para convertir visitas en clientes reales.'
    },
    {
      title: 'Automatización',
      description: 'Liberamos a tu equipo de tareas repetitivas conectando procesos digitales de forma fluida.'
    },
    {
      title: 'Integraciones',
      description: 'Hacemos que tus herramientas actuales se hablen entre sí: CRMs, ERPs, y más.'
    },
    {
      title: 'Soporte y mejoras',
      description: 'No te dejamos solo. Mantenemos tus sistemas actualizados y evolucionamos según tus necesidades.'
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
        
        const header = host.querySelector('.header-split');
        const cards = host.querySelectorAll('.service-card');

        if (reduceMotion) {
          gsap.set([header, cards], { autoAlpha: 1, y: 0 });
          return;
        }

        // Hide elements initially
        gsap.set([header, cards], { autoAlpha: 0, y: 30 });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: host.querySelector('.services'),
            start: 'top 75%',
            toggleActions: 'play none none none'
          }
        });

        tl.to(header, { autoAlpha: 1, y: 0, duration: 1, ease: 'power3.out' })
          .to(cards, {
            autoAlpha: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            stagger: 0.15
          }, '-=0.5');

        return () => {}; // cleanup
      }
    );
  }
}
