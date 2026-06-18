import { Component, OnInit, inject, signal } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { SeoService } from '../../services/seo.service';


interface GalerieCategory {
  id: string;
  nameKey: string;
  eyebrowKey: string;
  count: number;
}

@Component({
  selector: 'app-galerie',
  imports: [TranslateModule],
  templateUrl: './galerie.component.html',
  styleUrl: './galerie.component.scss'
})
export class GalerieComponent implements OnInit {
  private seo = inject(SeoService);
  private translate = inject(TranslateService);

  categories: GalerieCategory[] = [
    { id: 'mariage',       nameKey: 'GALERIE.CATEGORIES.MARIAGE.NAME',       eyebrowKey: 'GALERIE.CATEGORIES.MARIAGE.EYEBROW',       count: 8 },
    { id: 'seminaire',     nameKey: 'GALERIE.CATEGORIES.SEMINAIRES.NAME',     eyebrowKey: 'GALERIE.CATEGORIES.SEMINAIRES.EYEBROW',     count: 6 },
    { id: 'anniversaire',  nameKey: 'GALERIE.CATEGORIES.ANNIVERSAIRE.NAME',  eyebrowKey: 'GALERIE.CATEGORIES.ANNIVERSAIRE.EYEBROW',  count: 6 },
    { id: 'soiree-theme',  nameKey: 'GALERIE.CATEGORIES.SOIREES_THEME.NAME',  eyebrowKey: 'GALERIE.CATEGORIES.SOIREES_THEME.EYEBROW',  count: 5 },
    { id: 'divorce-party', nameKey: 'GALERIE.CATEGORIES.DIVORCE_PARTY.NAME', eyebrowKey: 'GALERIE.CATEGORIES.DIVORCE_PARTY.EYEBROW', count: 5 },
    { id: 'ceremonies',    nameKey: 'GALERIE.CATEGORIES.CEREMONIES.NAME',    eyebrowKey: 'GALERIE.CATEGORIES.CEREMONIES.EYEBROW',    count: 5 },
  ];

  selected = signal<GalerieCategory | null>(null);

  photos(count: number): number[] {
    return Array.from({ length: count }, (_, i) => i);
  }

  selectCategory(cat: GalerieCategory): void { this.selected.set(cat); }
  back(): void { this.selected.set(null); }

  ngOnInit(): void {
    this.translate.get([
      'GALERIE.SEO.TITLE',
      'GALERIE.SEO.DESCRIPTION',
      'GALERIE.SEO.KEYWORDS'
    ]).subscribe(translations => {
      this.seo.update({
        title: translations['GALERIE.SEO.TITLE'],
        description: translations['GALERIE.SEO.DESCRIPTION'],
        keywords: translations['GALERIE.SEO.KEYWORDS'],
        canonical: '/galerie'
      });
    });
  }
}
