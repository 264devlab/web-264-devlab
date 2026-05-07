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
    const tl = gsap.timeline({ defaults: { ease: 'power4.out', duration: 1.5 } });

    tl.to(this.title.nativeElement, { opacity: 1, y: 0 })
      .to(this.text.nativeElement, { opacity: 1, y: 0 }, '-=1.2')
      .to(this.cta.nativeElement, { opacity: 1, y: 0 }, '-=1.2')
      .to(this.visual.nativeElement, { opacity: 1, y: 0, scale: 1, rotateY: -5 }, '-=1.2')
      .to(this.glow.nativeElement, { 
        scale: 1.2, 
        opacity: 0.15, 
        duration: 4, 
        repeat: -1, 
        yoyo: true, 
        ease: 'sine.inOut' 
      }, 0);
  }
}
