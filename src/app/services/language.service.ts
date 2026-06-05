import { Injectable, inject, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

export type Lang = 'fr' | 'en';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private translate = inject(TranslateService);

  current = signal<Lang>('fr');

  init(): void {
    const saved = (localStorage.getItem('lang') ?? 'fr') as Lang;
    this.set(saved);
  }

  set(lang: Lang): void {
    this.translate.use(lang);
    this.current.set(lang);
    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang;
  }

  toggle(): void {
    this.set(this.current() === 'fr' ? 'en' : 'fr');
  }
}
