import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import gsap from 'gsap';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'})
export class HeroComponent implements AfterViewInit {
  @ViewChild('title') title!: ElementRef;
  @ViewChild('text') text!: ElementRef;
  @ViewChild('cta') cta!: ElementRef;
  @ViewChild('visual') visual!: ElementRef;
  @ViewChild('glow') glow!: ElementRef;

  ngAfterViewInit() {
    let mm = gsap.matchMedia();

    mm.add(
      {
        reduceMotion: '(prefers-reduced-motion: reduce)',
        isDesktop: '(min-width: 800px)',
        isMobile: '(max-width: 799px)'
      },
      (context) => {
        const { reduceMotion } = context.conditions as { reduceMotion: boolean; isDesktop: boolean; isMobile: boolean };

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
            duration: 4, 
            repeat: -1, 
            yoyo: true, 
            ease: 'sine.inOut' 
          }, 0);
          
        return () => {}; // cleanup
      }
    );
  }
}
