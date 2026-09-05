import { Component, inject, AfterViewInit, ElementRef, ViewChild, effect, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../../services/portfolio.service';

declare const Typed: any;

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements AfterViewInit, OnDestroy {
  portfolioService = inject(PortfolioService);

  // Raccourcis
  lang = this.portfolioService.currentLang;
  data = this.portfolioService.data;

  @ViewChild('typedElement', { static: true }) typedElement!: ElementRef;
  private typedInstance: any = null;

  get heroTexts() {
    return this.data.content[this.lang()].hero;
  }

  constructor() {
    // 🎯 Effet réactif : quand la langue change, on met à jour Typed
    effect(() => {
      const currentLang = this.lang(); // lecture du signal pour déclencher l'effet
      
      // Petit délai pour que le DOM soit mis à jour par Angular
      setTimeout(() => {
        this.initTyped();
      }, 100);
    });
  }

  ngAfterViewInit(): void {
    this.initTyped();
  }

  ngOnDestroy(): void {
    this.destroyTyped();
  }

  private destroyTyped(): void {
    if (this.typedInstance) {
      this.typedInstance.destroy();
      this.typedInstance = null;
    }
  }

  private initTyped(): void {
    if (typeof Typed === 'undefined') return;

    const roles = this.heroTexts.roles || [];
    if (!roles.length) return;

    // Détruire l'ancienne instance proprement avant de recréer
    this.destroyTyped();

    const element = this.typedElement?.nativeElement;
    if (!element) return;

    // Effacer le contenu avant de recréer pour éviter les artefacts visuels
    element.textContent = '';

    // Créer nouvelle instance
    this.typedInstance = new Typed(element, {
      strings: roles,
      typeSpeed: 55,
      backSpeed: 30,
      backDelay: 1800,
      loop: true,
      smartBackspace: true
    });
  }
}