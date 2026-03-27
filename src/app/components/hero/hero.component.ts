import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import gsap from 'gsap';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  template: `
    <section class="hero container">
      <div class="hero-content">
        <h1 #title class="display-lg reveal">
          Soluciones tecnológicas <br>
          <span class="text-gradient-primary">claras, sin vueltas</span>
        </h1>
        <p #text class="hero-description reveal">
          Desarrollamos sistemas, páginas web y herramientas digitales pensadas para resolver problemas reales. 
          Nos contás qué necesitás y lo vemos juntos.
        </p>
        <div #cta class="hero-btns reveal">
          <button class="btn-primary">Contactanos</button>
          <button class="btn-glass">Ver qué hacemos</button>
        </div>
      </div>
      <div class="hero-visual reveal shadow-xl" #visual>
        <div class="browser-frame">
          <div class="browser-header">
            <span class="dot"></span><span class="dot"></span><span class="dot"></span>
          </div>
          <div class="browser-content">
            <div class="mock-ui">
              <div class="mock-sidebar"></div>
              <div class="mock-main">
                <div class="mock-row"></div>
                <div class="mock-row"></div>
                <div class="mock-chart"></div>
              </div>
            </div>
          </div>
        </div>
        <div #glow class="obsidian-glow"></div>
      </div>
    </section>
  `,
  styles: [`
    .hero {
      position: relative;
      min-height: 100vh;
      display: grid;
      grid-template-columns: 1.2fr 1fr;
      align-items: center;
      gap: 4rem;
      padding-top: 8rem;
    }
    .hero-content {
      z-index: 5;
    }
    .hero-description {
      font-size: 1.25rem;
      color: var(--on-surface-variant);
      margin: 2rem 0 3.5rem;
      max-width: 580px;
    }
    .hero-btns {
      display: flex;
      gap: 1.5rem;
    }
    .btn-glass {
      padding: 0.875rem 2rem;
      border-radius: 0.75rem;
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid rgba(255, 255, 255, 0.05);
      color: var(--on-surface);
      font-weight: 600;
      backdrop-filter: blur(10px);
      cursor: pointer;
      transition: all 0.3s var(--ease-premium);
    }
    .btn-glass:hover {
      background: rgba(255, 255, 255, 0.08);
      border-color: rgba(255, 255, 255, 0.1);
    }
    .hero-visual {
      position: relative;
      perspective: 1000px;
    }
    .browser-frame {
      background: #1c2025;
      border-radius: 1rem;
      overflow: hidden;
      border: 1px solid rgba(255, 255, 255, 0.05);
      box-shadow: 0 40px 100px rgba(0,0,0,0.5);
      transform: rotateY(-5deg) rotateX(2deg);
    }
    .browser-header {
      padding: 0.75rem 1rem;
      background: #262a30;
      display: flex;
      gap: 0.5rem;
    }
    .dot { width: 8px; height: 8px; border-radius: 50%; background: rgba(255,255,255,0.1); }
    .browser-content { height: 400px; padding: 1.5rem; }
    .mock-ui { display: flex; gap: 1rem; height: 100%; }
    .mock-sidebar { width: 60px; background: rgba(255,255,255,0.02); border-radius: 4px; }
    .mock-main { flex: 1; display: flex; flex-direction: column; gap: 0.75rem; }
    .mock-row { height: 12px; border-radius: 2px; background: rgba(255,255,255,0.02); }
    .mock-chart { flex: 1; background: linear-gradient(to bottom, rgba(79, 156, 249, 0.05), transparent); border-radius: 8px; }
    
    .obsidian-glow {
      position: absolute;
      top: 50%; left: 50%;
      width: 400px; height: 400px;
      background: var(--primary);
      filter: blur(120px);
      opacity: 0.1;
      transform: translate(-50%, -50%);
      z-index: -1;
    }

    @media (max-width: 968px) {
      .hero { grid-template-columns: 1fr; text-align: center; padding-top: 6rem; }
      .hero-content { display: flex; flex-direction: column; align-items: center; }
      .hero-btns { justify-content: center; }
      .hero-visual { display: none; }
    }
  `]
})
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
