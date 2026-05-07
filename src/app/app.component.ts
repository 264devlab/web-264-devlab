import { Component, AfterViewInit, HostListener, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { HeroComponent } from './components/hero/hero.component';
import { ServicesComponent } from './components/services/services.component';
import { ProcessComponent } from './components/process/process.component';
import { PhilosophyComponent } from './components/philosophy/philosophy.component';
import { ContactComponent } from './components/contact/contact.component';
import { SolutionsComponent } from './components/solutions/solutions.component';
import { WhyUsComponent } from './components/why-us/why-us.component';
import { InquiryComponent } from './components/inquiry/inquiry.component';
import { FaqComponent } from './components/faq/faq.component';
import { CtaFooterComponent } from './components/cta-footer/cta-footer.component';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeroComponent,
    ServicesComponent,
    ProcessComponent,
    PhilosophyComponent,
    ContactComponent,
    SolutionsComponent,
    WhyUsComponent,
    InquiryComponent,
    FaqComponent,
    CtaFooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit {
  isScrolled = false;
  isMenuOpen = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    if (this.isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

  closeMenu() {
    this.isMenuOpen = false;
    document.body.style.overflow = '';
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (isPlatformBrowser(this.platformId)) {
      this.isScrolled = window.scrollY > 50;
      const header = document.querySelector('header');
      if (header) {
        if (this.isScrolled) header.classList.add('scrolled');
        else header.classList.remove('scrolled');
      }
    }
  }

  ngAfterViewInit() {
    // Component specific animations are handled in their respective components
  }
}
