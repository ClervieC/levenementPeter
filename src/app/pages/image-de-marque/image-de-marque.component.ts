import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { SeoService } from '../../services/seo.service';
import { PhotoCarouselComponent } from '../../components/photo-carousel/photo-carousel.component';

@Component({
  selector: 'app-image-de-marque',
  imports: [RouterLink, TranslateModule, PhotoCarouselComponent],
  templateUrl: './image-de-marque.component.html',
  styleUrl: './image-de-marque.component.scss'
})
export class ImageDeMarqueComponent implements OnInit {
  private seo = inject(SeoService);

  ngOnInit(): void {
    this.seo.update({
      title: "Événements image de marque | L'Événement Peter",
      description: "Lancement de produit, soirée presse, expérience de marque, événement influenceurs… L'Événement Peter crée des événements qui incarnent votre identité et rayonnent votre marque.",
      keywords: "événement image de marque, lancement produit bretagne, soirée presse rennes, expérience de marque, brand event bretagne",
      canonical: '/image-de-marque'
    });
  }
}
