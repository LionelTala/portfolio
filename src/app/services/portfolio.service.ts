import { Injectable, signal } from '@angular/core';
import { PORTFOLIO_DATA, PortfolioData } from '../data/portfolio.data';

@Injectable({
    providedIn: 'root'
})
export class PortfolioService {
    readonly data: PortfolioData = PORTFOLIO_DATA;

    // Signals
    currentLang = signal<'fr' | 'en'>(this.getSavedLanguage());
    currentTheme = signal<'light' | 'dark'>(this.getSavedTheme());
    isLoading = signal<boolean>(false);

    constructor() {
        this.applyTheme(this.currentTheme());
    }

    // ✅ Bascule instantanée de la langue
    toggleLanguage() {
        const newLang = this.currentLang() === 'fr' ? 'en' : 'fr';
        this.currentLang.set(newLang);
        localStorage.setItem('language', newLang);
    }

    // ✅ Bascule du thème avec loader
    toggleTheme() {
        const newTheme = this.currentTheme() === 'dark' ? 'light' : 'dark';
        
        // ✅ Appliquer le thème IMMÉDIATEMENT sur le DOM
        this.applyTheme(newTheme);
        
        // ✅ Mettre à jour le signal
        this.currentTheme.set(newTheme);
        localStorage.setItem('theme', newTheme);
        
        // ✅ Afficher le loader PENDANT la transition
        this.isLoading.set(true);
        
        // ✅ Cacher le loader après la transition CSS
        setTimeout(() => {
            this.isLoading.set(false);
        }, 400);
    }

    private applyTheme(theme: 'light' | 'dark') {
        const html = document.documentElement;
        html.setAttribute('data-bs-theme', theme);
        
        // ✅ Forcer le reflow pour que la transition soit fluide
        // Cela force le navigateur à appliquer immédiatement le changement
        void html.offsetHeight;
    }

    private getSavedLanguage(): 'fr' | 'en' {
        const saved = localStorage.getItem('language');
        return (saved === 'en' || saved === 'fr') ? saved : 'fr';
    }

    private getSavedTheme(): 'light' | 'dark' {
        const saved = localStorage.getItem('theme');
        return (saved === 'dark' || saved === 'light') ? saved : 'light';
    }
}