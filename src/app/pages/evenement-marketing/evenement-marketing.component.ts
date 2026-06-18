import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { SeoService } from '../../services/seo.service';
import { PhotoCarouselComponent } from '../../components/photo-carousel/photo-carousel.component';


@Component({
  selector: 'app-evenement-marketing',
  imports: [RouterLink, TranslateModule, PhotoCarouselComponent],
  templateUrl: './evenement-marketing.component.html',
  styleUrl: './evenement-marketing.component.scss'
})
export class EvenementMarketingComponent implements OnInit {
  private seo = inject(SeoService);

  ngOnInit(): void {
    this.seo.update({
      title: "Événements marketing & communication | Kalist",
      description: "Salon professionnel, road show, activation de marque, conférence, journée clients… Kalist conçoit des événements marketing qui génèrent de l'impact.",
      keywords: "salon professionnel bretagne, activation de marque rennes, road show bretagne, conférence rennes, événement marketing bretagne",
      canonical: '/evenement-marketing'
    });
  }
}
