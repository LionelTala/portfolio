import { Component, inject, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../../services/portfolio.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  portfolioService = inject(PortfolioService);

  // ✅ Signaux pour la réactivité
  lang = this.portfolioService.currentLang;
  data = this.portfolioService.data;

  // ✅ Données réactives
  currentData = computed(() => this.data.content[this.lang()]);

  get sectionTitle() {
    return this.currentData().titles.projects;
  }

  get projectsList() {
    return this.data.projects;
  }

  // ✅ Afficher la description dans la bonne langue
  getDescription(project: any): string {
    return this.lang() === 'fr' ? project.description : (project.descriptionEn || project.description);
  }

  // ✅ Traduire le bouton "Voir le projet"
  getViewButtonText(): string {
    return this.lang() === 'fr' ? 'Voir le projet' : 'View Project';
  }
}