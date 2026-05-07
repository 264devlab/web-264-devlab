import { Component, ElementRef, ViewChild, AfterViewInit, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent implements AfterViewInit {
  @ViewChild('title') title!: ElementRef;
  @ViewChild('text') text!: ElementRef;
  @ViewChild('cta') cta!: ElementRef;
  @ViewChild('visual') visual!: ElementRef;
  @ViewChild('glow') glow!: ElementRef;

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

        if (reduceMotion) {
          gsap.set([this.title.nativeElement, this.text.nativeElement, this.cta.nativeElement, this.visual.nativeElement], { autoAlpha: 1, y: 0 });
          return;
        }

        const tl = gsap.timeline({ defaults: { ease: 'power4.out', duration: 1.2 } });

        // Set initial state
        gsap.set([this.title.nativeElement, this.text.nativeElement, this.cta.nativeElement, this.visual.nativeElement], { autoAlpha: 0, y: 30 });
        gsap.set(this.visual.nativeElement, { scale: 0.95, rotateY: 5 });

        tl.to(this.title.nativeElement, { autoAlpha: 1, y: 0 })
          .to(this.text.nativeElement, { autoAlpha: 1, y: 0 }, '-=0.9')
          .to(this.cta.nativeElement, { autoAlpha: 1, y: 0 }, '-=0.9')
          .to(this.visual.nativeElement, { autoAlpha: 1, y: 0, scale: 1, rotateY: -5 }, '-=0.9')
          .to(this.glow.nativeElement, { 
            scale: 1.2, 
            autoAlpha: 0.15, 
            duration: 2, 
            ease: 'power2.out' 
          }, '-=1');

        return () => {};
      }
    );
  }
}
