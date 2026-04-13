import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  template: `
    <footer class="contact-footer section-lowest py-24">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-brand">
            <div class="logo mb-8"><span class="text-gradient-primary">264</span>DevLab</div>
            <p class="body-md">Ingeniería digital enfocada en resultados. Desarrollamos herramientas que simplifican el crecimiento de tu negocio.</p>
          </div>
          
          <div class="footer-nav">
            <div class="footer-group">
              <span class="label-md mb-4">Explorar</span>
              <a href="#services">Qué hacemos</a>
              <a href="#process">Cómo trabajamos</a>
              <a href="#faq">Preguntas</a>
            </div>
            <div class="footer-group">
              <span class="label-md mb-4">Contacto</span>
              <a href="mailto:contacto&#64;devlab.com.ar" class="contact-link">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                contacto&#64;devlab.com.ar
              </a>
              <a href="mailto:soporte&#64;devlab.com.ar" class="contact-link">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
                soporte&#64;devlab.com.ar
              </a>
              <a href="https://wa.me/5492644518136?text=Hola%20264DevLab%2C%20me%20gustar%C3%ADa%20consultar%20por%20un%20desarrollo." target="_blank" class="btn-whatsapp mt-4">
                WhatsApp
              </a>
            </div>
          </div>
        </div>
        
        <div class="footer-bottom mt-16 pt-8">
          <p class="label-md">© 2026 264DevLab. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .footer-grid {
      display: grid;
      grid-template-columns: 1fr 1.5fr;
      gap: 6rem;
    }
    .footer-brand { max-width: 400px; }
    .footer-nav {
      display: grid;
      grid-template-columns: 1fr 1.5fr;
      gap: 4rem;
    }
    .footer-group { display: flex; flex-direction: column; gap: 0.75rem; }
    .footer-group a {
      color: var(--on-surface-variant);
      text-decoration: none;
      font-size: 0.9375rem;
      transition: all 0.3s var(--ease-premium);
      display: flex;
      align-items: center;
    }
    .footer-group a:hover { color: var(--primary); transform: translateX(5px); }
    
    .contact-link svg { opacity: 0.6; }
    .footer-bottom { border-top: 1px solid var(--outline-variant); text-align: center; }
    .footer-bottom p { opacity: 0.6; letter-spacing: 0.1em; }

    .footer-social { display: flex; gap: 1rem; }
    .social-link {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      border: 1px solid var(--outline-variant);
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--on-surface-variant);
      transition: all 0.3s var(--ease-premium);
    }
    .social-link:hover {
      background: var(--primary);
      color: white;
      border-color: var(--primary);
      transform: translateY(-3px);
    }

    .btn-whatsapp {
      background: rgba(79, 156, 249, 0.1);
      color: var(--primary) !important;
      padding: 0.75rem 1.5rem;
      border-radius: 0.75rem;
      border: 1px solid var(--primary-container);
      width: fit-content;
      font-weight: 600;
      margin-top: 1rem;
    }
    .btn-whatsapp:hover {
      background: var(--primary) !important;
      color: white !important;
      transform: translateY(-2px) !important;
    }

    .mr-2 { margin-right: 0.5rem; }

    @media (max-width: 968px) {
      .footer-grid { grid-template-columns: 1fr; gap: 4rem; }
      .footer-nav { grid-template-columns: 1fr; gap: 3rem; }
    }
  `]
})
export class ContactComponent { }
