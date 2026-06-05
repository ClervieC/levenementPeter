import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { SeoService } from '../../services/seo.service';
import { PhotoCarouselComponent } from '../../components/photo-carousel/photo-carousel.component';

@Component({
  selector: 'app-fetes',
  imports: [RouterLink, TranslateModule, PhotoCarouselComponent],
  templateUrl: './fetes.component.html',
  styleUrl: './fetes.component.scss'
})
export class FetesComponent implements OnInit {
  private seo = inject(SeoService);

  ngOnInit(): void {
    this.seo.update({
      title: "Fêtes & Célébrations sur mesure | L'Événement Peter",
      description: "Anniversaire, Divorce Party, soirée à thème… L'Événement Peter crée des fêtes uniques et mémorables, entièrement personnalisées selon vos désirs.",
      keywords: "fête anniversaire rennes, divorce party bretagne, soirée à thème rennes, organisation fête bretagne, événementiel particulier rennes",
      canonical: '/fetes-celebrations'
    });
  }
}
