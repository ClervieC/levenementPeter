import { Component, OnInit, inject, signal } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import emailjs from '@emailjs/browser';
import { SeoService } from '../../services/seo.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, TranslateModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit {
  private seo       = inject(SeoService);
  private fb        = inject(FormBuilder);
  private translate = inject(TranslateService);

  sent    = signal(false);
  loading = signal(false);
  error   = signal('');

  form = this.fb.group({
    prenom:        ['', Validators.required],
    nom:           ['', Validators.required],
    email:         ['', [Validators.required, Validators.email]],
    telephone:     [''],
    typeEvenement: ['', Validators.required],
    dateEvenement: [''],
    message:       ['', [Validators.required, Validators.minLength(20)]],
  });

  get typesEvenement(): string[] {
    return this.translate.instant('CONTACT.FORM.TYPES') as string[];
  }

  isInvalid(field: string): boolean {
    const ctrl = this.form.get(field);
    return !!(ctrl && ctrl.invalid && (ctrl.dirty || ctrl.touched));
  }

  async submit(): Promise<void> {
    if (this.form.invalid) { this.form.markAllAsTouched(); return; }
    this.loading.set(true);
    this.error.set('');
    const v = this.form.value;
    try {
      await emailjs.send(
        environment.emailjs.serviceId,
        environment.emailjs.templateId,
        {
          prenom: v.prenom ?? '', nom: v.nom ?? '', email: v.email ?? '',
          telephone: v.telephone ?? 'Non renseigné',
          typeEvenement: v.typeEvenement ?? '',
          dateEvenement: v.dateEvenement ?? 'Non précisée',
          message: v.message ?? '',
          to_email: 'levenementpeter@gmail.com',
        },
        environment.emailjs.publicKey
      );
      this.sent.set(true);
    } catch {
      this.error.set(this.translate.instant('CONTACT.FORM.ERROR_SEND'));
    } finally {
      this.loading.set(false);
    }
  }

  ngOnInit(): void {
    this.seo.update({
      title: "Contactez L'Événement Peter – Devis Mariage Bretagne Rennes",
      description: "Contactez L'Événement Peter pour organiser votre mariage, séminaire ou événement en Bretagne. Devis gratuit et personnalisé sous 48 heures.",
      keywords: "contact wedding planner bretagne, devis mariage bretagne, devis mariage rennes",
      canonical: '/contact'
    });
  }
}
