import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

export interface SeoConfig {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
}

const BASE_URL  = 'https://www.levenement-peter.fr';
const SITE_NAME = "L'Événement Peter";
const DEFAULT_IMAGE = `${BASE_URL}/assets/og-image.jpg`;

@Injectable({ providedIn: 'root' })
export class SeoService {
  private meta  = inject(Meta);
  private title = inject(Title);

  update(config: SeoConfig): void {
    const fullTitle = `${config.title} | ${SITE_NAME}`;

    this.title.setTitle(fullTitle);

    this.meta.updateTag({ name: 'description',        content: config.description });
    this.meta.updateTag({ property: 'og:title',       content: fullTitle });
    this.meta.updateTag({ property: 'og:description', content: config.description });
    this.meta.updateTag({ property: 'og:url',         content: `${BASE_URL}${config.canonical ?? '/'}` });
    this.meta.updateTag({ property: 'og:image',       content: config.ogImage ?? DEFAULT_IMAGE });

    if (config.keywords) {
      this.meta.updateTag({ name: 'keywords', content: config.keywords });
    }

    this.setCanonical(`${BASE_URL}${config.canonical ?? '/'}`);
  }

  private setCanonical(url: string): void {
    let link = document.querySelector("link[rel='canonical']") as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    link.setAttribute('href', url);
  }
}
