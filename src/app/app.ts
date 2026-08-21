import { Component, signal, OnInit, AfterViewInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./components/navbar/navbar.component/navbar.component";
import { HeroComponent } from "./components/hero/hero.component/hero.component";
import { ParcoursComponent } from "./components/parcours/parcours.component/parcours.component";
import { SkillsComponent } from "./components/skills/skills.component/skills.component";
import { ProjectsComponent } from "./components/projects/projects.component/projects.component";
import { ContactComponent } from "./components/contact/contact.component/contact.component";
import { PortfolioService } from './services/portfolio.service';
import { CommonModule } from '@angular/common';

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

  // ✅ Exposer le signal de chargement
  isLoading = this.portfolioService.isLoading;

  ngOnInit(): void {
    if (typeof AOS !== 'undefined') {
      AOS.init({
        duration: 900,
        once: true,
        offset: 60,
        easing: 'ease-out-cubic'
      });
    }
  }

  ngAfterViewInit(): void {
    setTimeout(() => this.hidePreloader(), 300);
    setTimeout(() => this.hidePreloader(), 5000);
  }

  private hidePreloader(): void {
    const preloader = document.getElementById('preloader');
    if (!preloader || preloader.classList.contains('hide')) return;
    preloader.classList.add('hide');
    setTimeout(() => {
      preloader.style.display = 'none';
    }, 600);
  }
}