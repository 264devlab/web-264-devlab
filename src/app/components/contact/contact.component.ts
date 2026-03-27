import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  template: `
    <footer class="contact-footer section-lowest py-32">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-brand">
            <div class="logo mb-4"><span class="text-gradient-primary">264</span>DevLab</div>
            <p class="body-md">Ingeniería digital enfocada en resultados. Desarrollamos herramientas que simplifican el crecimiento de tu negocio.</p>
          </div>
          <div class="footer-nav">
            <div class="footer-group">
              <span class="label-md">Explorar</span>
              <a href="#services">Qué hacemos</a>
              <a href="#process">Cómo trabajamos</a>
              <a href="#">Blog</a>
            </div>
            <div class="footer-group">
              <span class="label-md">Contacto</span>
              <a href="mailto:hola&#64;264devlab.com">hola&#64;264devlab.com</a>
              <a href="#">WhatsApp</a>
            </div>
            <div class="footer-group">
              <span class="label-md">Social</span>
              <a href="#">LinkedIn</a>
              <a href="#">GitHub</a>
              <a href="#">Twitter</a>
            </div>
          </div>
        </div>
        <div class="footer-bottom mt-16 pt-8">
          <p class="label-md">© 2024 264DevLab. Digital Obsidian Engineering.</p>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .footer-grid {
      display: grid;
      grid-template-columns: 1fr 2fr;
      gap: 4rem;
    }
    .footer-brand { max-width: 400px; }
    .footer-nav {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 2rem;
    }
    .footer-group { display: flex; flex-direction: column; gap: 1rem; }
    .footer-group a {
      color: var(--on-surface-variant);
      text-decoration: none;
      font-size: 0.9rem;
      transition: color 0.3s var(--ease-premium);
    }
    .footer-group a:hover { color: var(--on-surface); }
    .footer-bottom { border-top: 1px solid var(--outline-variant); text-align: center; opacity: 0.5; }

    @media (max-width: 968px) {
      .footer-grid { grid-template-columns: 1fr; gap: 4rem; }
      .footer-nav { grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); }
    }
  `]
})
export class ContactComponent {}
