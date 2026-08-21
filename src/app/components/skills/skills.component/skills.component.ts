import { Component, inject, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../../services/portfolio.service';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  portfolioService = inject(PortfolioService);

  // ✅ Signaux pour la réactivité
  lang = this.portfolioService.currentLang;
  data = this.portfolioService.data;

  // ✅ Données réactives
  currentData = computed(() => this.data.content[this.lang()]);

  get sectionTitle() {
    return this.currentData().titles.skills;
  }

  get skillsList() {
    return this.data.skills;
  }
}