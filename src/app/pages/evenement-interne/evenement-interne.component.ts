import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { SeoService } from '../../services/seo.service';
import { PhotoCarouselComponent } from '../../components/photo-carousel/photo-carousel.component';


@Component({
  selector: 'app-evenement-interne',
  imports: [RouterLink, TranslateModule, PhotoCarouselComponent],
  templateUrl: './evenement-interne.component.html',
  styleUrl: './evenement-interne.component.scss'
})
export class EvenementInterneComponent implements OnInit {
  private seo = inject(SeoService);

  ngOnInit(): void {
    this.seo.update({
      title: "Événements internes d'entreprise | Kalist",
      description: "Soirée de gala, inauguration, remise de prix, team-building, fête de fin d'année… Kalist crée des événements internes d'exception qui marquent vos équipes.",
      keywords: "soirée gala entreprise rennes, inauguration bretagne, remise de prix corporate, événement interne bretagne, fête fin d'année entreprise rennes",
      canonical: '/evenement-interne'
    });
  }
}
