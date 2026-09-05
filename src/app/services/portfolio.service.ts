import { Injectable, signal, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { PORTFOLIO_DATA, PortfolioData } from '../data/portfolio.data';

@Injectable({
    providedIn: 'root'
})
export class PortfolioService {
    readonly data: PortfolioData = PORTFOLIO_DATA;

    // 1. Initialiser avec des valeurs par défaut SÉCURISÉES pour le serveur (SSR)
    currentLang = signal<'fr' | 'en'>('fr');
    currentTheme = signal<'light' | 'dark'>('light');
    isLoading = signal<boolean>(false);

    // 2. Injecter PLATFORM_ID pour savoir si on est côté navigateur ou serveur
    constructor(@Inject(PLATFORM_ID) private platformId: Object) {
        // 3. Exécuter les lectures de localStorage UNIQUEMENT côté navigateur
        if (isPlatformBrowser(this.platformId)) {
            this.currentLang.set(this.getSavedLanguage());
            const savedTheme = this.getSavedTheme();
            this.currentTheme.set(savedTheme);
            this.applyTheme(savedTheme);
        }
    }

    // ✅ Bascule instantanée de la langue
    toggleLanguage() {
        const newLang = this.currentLang() === 'fr' ? 'en' : 'fr';
        this.currentLang.set(newLang);
        
        if (isPlatformBrowser(this.platformId)) {
            localStorage.setItem('language', newLang);
        }
    }

    // ✅ Bascule du thème avec loader
    toggleTheme() {
        const newTheme = this.currentTheme() === 'dark' ? 'light' : 'dark';
        
        if (isPlatformBrowser(this.platformId)) {
            this.applyTheme(newTheme);
            localStorage.setItem('theme', newTheme);
        }
        
        this.currentTheme.set(newTheme);
        this.isLoading.set(true);
        
        setTimeout(() => {
            this.isLoading.set(false);
        }, 400);
    }

    private applyTheme(theme: 'light' | 'dark') {
        if (isPlatformBrowser(this.platformId)) {
            const html = document.documentElement;
            html.setAttribute('data-bs-theme', theme);
            // Force le reflow pour que la transition soit fluide
            void html.offsetHeight; 
        }
    }

    private getSavedLanguage(): 'fr' | 'en' {
        if (isPlatformBrowser(this.platformId)) {
            const saved = localStorage.getItem('language');
            return (saved === 'en' || saved === 'fr') ? saved : 'fr';
        }
        return 'fr'; // Fallback sécurisé pour le serveur
    }

    private getSavedTheme(): 'light' | 'dark' {
        if (isPlatformBrowser(this.platformId)) {
            const saved = localStorage.getItem('theme');
            return (saved === 'dark' || saved === 'light') ? saved : 'light';
        }
        return 'light'; // Fallback sécurisé pour le serveur
    }
}