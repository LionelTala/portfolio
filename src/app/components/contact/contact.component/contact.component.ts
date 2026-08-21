import { Component, inject, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PortfolioService } from '../../../services/portfolio.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  portfolioService = inject(PortfolioService);

  // ✅ Signaux pour la réactivité
  lang = this.portfolioService.currentLang;
  data = this.portfolioService.data;

  // ✅ Données réactives
  currentData = computed(() => this.data.content[this.lang()]);

  // ✅ Variables du formulaire
  formData = {
    nom: '',
    email: '',
    sujet: '',
    message: ''
  };

  isSubmitting = false;
  submitSuccess = false;
  submitError = false;

  get sectionTitle() {
    return this.currentData().titles.contact;
  }

  get contactTexts() {
    return {
      title: this.currentData().hero.btnContact || 'Me contacter',
      description: this.lang() === 'fr' 
        ? 'Étudiant motivé, disponible pour des stages, des projets académiques ou des collaborations. N\'hésitez pas à me contacter !'
        : 'Motivated student, available for internships, academic projects or collaborations. Feel free to contact me!',
      email: this.lang() === 'fr' ? 'Email' : 'Email',
      phone: this.lang() === 'fr' ? 'Téléphone' : 'Phone',
      location: this.lang() === 'fr' ? 'Localisation' : 'Location',
      namePlaceholder: this.lang() === 'fr' ? 'Votre nom' : 'Your name',
      emailPlaceholder: this.lang() === 'fr' ? 'Votre email' : 'Your email',
      subjectPlaceholder: this.lang() === 'fr' ? 'Sujet' : 'Subject',
      messagePlaceholder: this.lang() === 'fr' ? 'Votre message...' : 'Your message...',
      submitButton: this.lang() === 'fr' ? 'Envoyer le message' : 'Send message',
      successMessage: this.lang() === 'fr' 
        ? '✅ Message envoyé avec succès ! Je vous répondrai dans les plus brefs délais.'
        : '✅ Message sent successfully! I will get back to you shortly.',
      errorMessage: this.lang() === 'fr'
        ? '❌ Une erreur est survenue. Veuillez réessayer.'
        : '❌ An error occurred. Please try again.'
    };
  }

  // ✅ Soumission du formulaire
  async onSubmit(form: any): Promise<void> {
    if (this.formData.nom && this.formData.email && this.formData.message) {
      this.isSubmitting = true;
      this.submitSuccess = false;
      this.submitError = false;

      try {
        // Simulation d'envoi (à remplacer par un vrai appel API)
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // Simuler un succès
        this.submitSuccess = true;
        this.formData = { nom: '', email: '', sujet: '', message: '' };
        form.resetForm();
        
        // Cacher le message de succès après 5s
        setTimeout(() => {
          this.submitSuccess = false;
        }, 5000);
      } catch (error) {
        this.submitError = true;
        setTimeout(() => {
          this.submitError = false;
        }, 5000);
      } finally {
        this.isSubmitting = false;
      }
    }
  }
}