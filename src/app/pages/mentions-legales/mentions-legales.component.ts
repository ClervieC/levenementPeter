import { Component, OnInit, inject } from '@angular/core';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-mentions-legales',
  imports: [],
  templateUrl: './mentions-legales.component.html',
  styleUrl: './mentions-legales.component.scss'
})
export class MentionsLegalesComponent implements OnInit {
  private seo = inject(SeoService);

  ngOnInit(): void {
    this.seo.update({
      title: "Mentions Légales",
      description: "Mentions légales de L'Événement Peter, agence événementielle SARL basée à Rennes, Bretagne.",
      canonical: '/mentions-legales'
    });
  }
}
