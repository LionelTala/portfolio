import { Component, OnInit, AfterViewInit, inject, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

// Tes composants
import { NavbarComponent } from "./components/navbar/navbar.component/navbar.component";
import { HeroComponent } from "./components/hero/hero.component/hero.component";
import { ParcoursComponent } from "./components/parcours/parcours.component/parcours.component";
import { SkillsComponent } from "./components/skills/skills.component/skills.component";
import { ProjectsComponent } from "./components/projects/projects.component/projects.component";
import { ContactComponent } from "./components/contact/contact.component/contact.component";
import { PortfolioService } from './services/portfolio.service';

declare const AOS: any;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
     NavbarComponent,
    HeroComponent,
    ParcoursComponent,
    SkillsComponent,
    ProjectsComponent,
    ContactComponent
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App implements OnInit, AfterViewInit {
  portfolioService = inject(PortfolioService);
  isLoading = this.portfolioService.isLoading;

  ngOnInit(): void {
    if (typeof AOS !== 'undefined') {
      AOS.init({ duration: 900, once: true, offset: 60, easing: 'ease-out-cubic' });
    }
  }

  ngAfterViewInit(): void {
    // Un seul timeout suffit, 800ms est idéal pour une transition fluide
    setTimeout(() => this.hidePreloader(), 800);
  }

  private hidePreloader(): void {
    const preloader = document.getElementById('preloader');
    if (preloader && !preloader.classList.contains('hide')) {
      preloader.classList.add('hide');
      setTimeout(() => { preloader.style.display = 'none'; }, 600);
    }
  }

  // ✅ EFFET 1 : Retour en haut intelligent
  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const btn = document.querySelector('.back-to-top') as HTMLElement;
    if (btn) {
      if (window.scrollY > 500) {
        btn.classList.add('visible');
      } else {
        btn.classList.remove('visible');
      }
    }
  }

  // ✅ EFFET 2 : Cursor Glow qui suit la souris (Design Premium)
  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    const cursor = document.querySelector('.cursor-glow') as HTMLElement;
    if (cursor) {
      // On utilise requestAnimationFrame pour une animation fluide à 60fps
      requestAnimationFrame(() => {
        cursor.style.left = `${event.clientX}px`;
        cursor.style.top = `${event.clientY}px`;
      });
    }
  }

  // ✅ Action du bouton retour en haut
  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}