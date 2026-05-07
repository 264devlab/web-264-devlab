import { Component, AfterViewInit, HostListener, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { HeroComponent } from './components/hero/hero.component';
import { ServicesComponent } from './components/services/services.component';
import { ProcessComponent } from './components/process/process.component';
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
      const scrollPosition = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
      this.isScrolled = scrollPosition > 50;
    }
  }

  ngAfterViewInit() {
    // Component specific animations are handled in their respective components
  }
}
