import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { SeoService } from '../../services/seo.service';
import { PhotoCarouselComponent } from '../../components/photo-carousel/photo-carousel.component';

@Component({
  selector: 'app-officiante-ceremonie',
  imports: [RouterLink, TranslateModule, PhotoCarouselComponent],
  templateUrl: './officiante-ceremonie.component.html',
  styleUrl: './officiante-ceremonie.component.scss'
})
export class OfficianteCeremonieComponent implements OnInit {
  private seo = inject(SeoService);

  ngOnInit(): void {
    this.seo.update({
      title: "Officiante de cérémonie laïque | L'Événement Peter Bretagne",
      description: "L'Événement Peter célèbre vos moments de vie avec des cérémonies laïques personnalisées : mariage, PACS, renouvellement de vœux, naissance, obsèques. Bretagne & partout dans le monde.",
      keywords: "officiante cérémonie laïque rennes, officiante mariage bretagne, cérémonie laïque personnalisée, mariage laïque rennes",
      canonical: '/officiante-ceremonie'
    });
  }
}
