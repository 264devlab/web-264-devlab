import { Component } from '@angular/core';

@Component({
  selector: 'app-philosophy',
  standalone: true,
  imports: [],
  template: `
    <section class="philosophy section-low py-32">
      <div class="container grid">
        <div class="philosophy-visual reveal">
          <div class="abstract-shape">
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
          </div>
        </div>
        <div class="philosophy-content">
          <span class="label-md reveal">Filosofía Dev</span>
          <h2 class="display-lg mt-4 mb-8 reveal">Devs apasionados por resolver problemas</h2>
          <div class="markdown-body reveal">
            <p class="body-lg mb-6">
              No somos una agencia masiva que delega proyectos. Somos un laboratorio de software compacto donde cada línea de código tiene un propósito.
            </p>
            <p class="body-md mb-6">
              Nuestro foco no es venderte un sistema, es ayudarte a que tu tecnología sea un motor y no una carga. Trabajamos con transparencia, código limpio y mucha comunicación.
            </p>
            <div class="feature-tag">
              <span class="dot"></span> No todo es hacer un sistema de cero
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .grid {
      display: grid;
      grid-template-columns: 1fr 1.2fr;
      align-items: center;
      gap: 6rem;
    }
    .abstract-shape {
      position: relative;
      height: 400px;
      background: var(--surface-lowest);
      border-radius: 2rem;
      border: 1px solid var(--outline-variant);
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 2rem;
      padding: 4rem;
    }
    .line { height: 1px; background: var(--outline-variant); width: 100%; position: relative; }
    .line::after { content: ''; position: absolute; left: 20%; top: -2px; width: 40px; height: 5px; background: var(--primary); filter: blur(4px); }
    
    .feature-tag {
      display: inline-flex;
      align-items: center;
      gap: 0.75rem;
      padding: 0.75rem 1.5rem;
      background: var(--surface-highest);
      border-radius: 100px;
      font-weight: 600;
      color: var(--on-surface);
    }
    .dot { width: 8px; height: 8px; background: var(--primary); border-radius: 50%; box-shadow: 0 0 10px var(--primary-glow); }

    @media (max-width: 968px) {
      .grid { grid-template-columns: 1fr; gap: 4rem; }
      .philosophy-visual { order: 2; }
    }
  `]
})
export class PhilosophyComponent {}
