import { Component, AfterViewInit } from '@angular/core';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { ServicesComponent } from './components/services/services.component';
import { ProcessComponent } from './components/process/process.component';
import { SolutionsComponent } from './components/solutions/solutions.component';
import { WhyUsComponent } from './components/why-us/why-us.component';
import { InquiryComponent } from './components/inquiry/inquiry.component';
import { FaqComponent } from './components/faq/faq.component';
import { CtaFooterComponent } from './components/cta-footer/cta-footer.component';
import { FooterComponent } from './components/footer/footer.component';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    HeroComponent,
    ServicesComponent,
    ProcessComponent,
    SolutionsComponent,
    WhyUsComponent,
    InquiryComponent,
    FaqComponent,
    CtaFooterComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit {
  ngAfterViewInit() {
    // Component specific animations are handled in their respective components
  }
}
