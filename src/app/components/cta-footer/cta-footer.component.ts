import { Component, AfterViewInit, ElementRef, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-cta-footer',
  standalone: true,
  imports: [],
  templateUrl: './cta-footer.component.html',
  styleUrl: './cta-footer.component.scss'
})
export class CtaFooterComponent implements AfterViewInit {
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
            trigger: host.querySelector('.cta-footer'),
            start: 'top 85%',
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
