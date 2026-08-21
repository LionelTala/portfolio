import { Component, inject, computed, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../../services/portfolio.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  portfolioService = inject(PortfolioService);

  lang = this.portfolioService.currentLang;
  data = this.portfolioService.data;
  isLoading = this.portfolioService.isLoading;

  currentData = computed(() => this.data.content[this.lang()]);

  mobileMenuOpen = false;
  langDropdownOpen = false;
  langDropdownDesktopOpen = false;

  activeLink: string = 'accueil';

  get navItems() {
    return this.currentData().nav;
  }

  // ✅ HostListener avec paramètre (même si on ne l'utilise pas)
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event) {
    this.updateActiveLink();
  }

  // ✅ HostListener avec paramètre
  @HostListener('window:resize', ['$event'])
  onWindowResize(event: Event) {
    this.updateActiveLink();
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.updateActiveLink();
    }, 300);
  }

  private updateActiveLink(): void {
    const sections = ['accueil', 'parcours', 'competences', 'projets', 'contact'];
    const scrollPosition = window.scrollY + 150;

    let found = false;
    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const top = element.offsetTop;
        const height = element.offsetHeight;
        if (scrollPosition >= top && scrollPosition < top + height) {
          if (this.activeLink !== section) {
            this.activeLink = section;
          }
          found = true;
          break;
        }
      }
    }

    if (!found && window.scrollY < 100) {
      this.activeLink = 'accueil';
    }
  }

  isActive(section: string): boolean {
    return this.activeLink === section;
  }

  toggleLanguage() {
    this.portfolioService.toggleLanguage();
    setTimeout(() => this.updateActiveLink(), 100);
  }

  toggleTheme() {
    this.portfolioService.toggleTheme();
  }

  toggleLangDropdown() {
    this.langDropdownOpen = !this.langDropdownOpen;
    if (this.langDropdownOpen) {
      this.langDropdownDesktopOpen = false;
    }
  }

  toggleLangDropdownDesktop() {
    this.langDropdownDesktopOpen = !this.langDropdownDesktopOpen;
    if (this.langDropdownDesktopOpen) {
      this.langDropdownOpen = false;
    }
  }

  closeMobileMenu() {
    this.mobileMenuOpen = false;
  }
}