import { Component, inject, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../../services/portfolio.service';

@Component({
  selector: 'app-parcours',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './parcours.component.html',
  styleUrls: ['./parcours.component.css']
})
export class ParcoursComponent {
  portfolioService = inject(PortfolioService);

  // ✅ Signaux pour la réactivité
  lang = this.portfolioService.currentLang;
  data = this.portfolioService.data;

  // ✅ Données réactives
  currentData = computed(() => this.data.content[this.lang()]);

  get sectionTitle() {
    return this.currentData().titles.parcours;
  }

  get parcoursList() {
    return this.data.parcours;
  }

  // ✅ Afficher la description dans la bonne langue
  getDescription(item: any): string {
    return this.lang() === 'fr' ? item.description : (item.descriptionEn || item.description);
  }
}