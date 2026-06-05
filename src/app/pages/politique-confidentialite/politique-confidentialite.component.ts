import { Component, OnInit, inject } from '@angular/core';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-politique-confidentialite',
  imports: [],
  templateUrl: './politique-confidentialite.component.html',
  styleUrl: './politique-confidentialite.component.scss'
})
export class PolitiqueConfidentialiteComponent implements OnInit {
  private seo = inject(SeoService);

  ngOnInit(): void {
    this.seo.update({
      title: "Politique de Confidentialité",
      description: "Politique de confidentialité et protection des données personnelles de L'Événement Peter, conforme au RGPD.",
      canonical: '/politique-de-confidentialite'
    });
  }
}
