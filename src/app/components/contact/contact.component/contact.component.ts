import { Component, inject, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { PortfolioService } from '../../../services/portfolio.service';
import emailjs from '@emailjs/browser'; // <-- 1. Import de EmailJS

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
  currentData = computed(() => this.data.content[this.lang()]);

  // ✅ Variables du formulaire
  formData = { nom: '', email: '', sujet: '', message: '' };
  isSubmitting = false;
  submitSuccess = false;
  submitError = false;

  // ✅ Config EmailJS (À REMPLACER PAR TES VRAIES VALEURS)
  private readonly EMAILJS_CONFIG = {
    serviceId: 'service_mutksjl',      // Ex: 'service_abc1234'
    templateId: 'template_bp69j1x',    // Ex: 'template_xyz5678'
    publicKey: 'qt1WBvZag8cF09fci'        // Ex: 'user_AbCdEfGhIjKlMnOp'
  };

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

  // ✅ Soumission du formulaire (VRAIE VERSION SÉCURISÉE)
  async onSubmit(form: NgForm): Promise<void> {
    // Validation Angular native
    if (form.invalid) {
      form.form.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;
    this.submitSuccess = false;
    this.submitError = false;

    // Paramètres qui doivent correspondre EXACTEMENT aux variables dans ton template EmailJS (ex: {{nom}}, {{email}})
    const templateParams = {
      nom: this.formData.nom,
      email: this.formData.email,
      sujet: this.formData.sujet || 'Nouveau message depuis le portfolio',
      message: this.formData.message,
      // Optionnel : ajouter la date ou la langue
      date: new Date().toLocaleString(this.lang() === 'fr' ? 'fr-FR' : 'en-US')
    };

    try {
      // Envoi via EmailJS
      const response = await emailjs.send(
        this.EMAILJS_CONFIG.serviceId,
        this.EMAILJS_CONFIG.templateId,
        templateParams,
        this.EMAILJS_CONFIG.publicKey
      );

      if (response.status === 200) {
        this.submitSuccess = true;
        this.formData = { nom: '', email: '', sujet: '', message: '' }; // Reset des données
        form.resetForm(); // Reset de l'état du formulaire Angular
        
        setTimeout(() => { this.submitSuccess = false; }, 5000);
      }
    } catch (error) {
      console.error('Erreur EmailJS:', error);
      this.submitError = true;
      setTimeout(() => { this.submitError = false; }, 5000);
    } finally {
      this.isSubmitting = false;
    }
  }
}