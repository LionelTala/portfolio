import { Component, inject, computed, AfterViewInit, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../../services/portfolio.service';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements AfterViewInit {
  portfolioService = inject(PortfolioService);

  // ✅ Signaux pour la réactivité (GARDÉS INTACTS)
  lang = this.portfolioService.currentLang;
  data = this.portfolioService.data;

  // ✅ Données réactives
  currentData = computed(() => this.data.content[this.lang()]);

  get sectionTitle() {
    return this.currentData().titles.skills;
  }

  get skillsList() {
    return this.data.skills || []; // Ajout de || [] par sécurité si le tableau est vide au chargement
  }

  // ✅ NOUVEAU : Récupère tous les éléments HTML qui ont la référence #skillBar
  @ViewChildren('skillBar') skillBars!: QueryList<ElementRef>;

  // ✅ NOUVEAU : Se déclenche une fois que le HTML du composant est entièrement affiché
  ngAfterViewInit(): void {
    this.initSkillAnimations();
  }

  private initSkillAnimations(): void {
    // Petit délai pour s'assurer que le rendu est totalement stable
    setTimeout(() => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const bar = entry.target as HTMLElement;
            const targetWidth = bar.getAttribute('data-width') || '0%';
            
            // C'est ici que la magie opère : on change la largeur, 
            // et le CSS (transition: width 1.4s...) fait l'animation fluide.
            bar.style.width = targetWidth;
            
            // On arrête d'observer cet élément pour ne l'animer qu'une seule fois
            observer.unobserve(bar);
          }
        });
      }, { 
        threshold: 0.3 // L'animation se lance quand 30% de la barre est visible à l'écran
      });

      // On applique l'observateur à chaque barre de compétence
      this.skillBars.forEach(barRef => {
        observer.observe(barRef.nativeElement);
      });
    }, 300);
  }
}