import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-seminaires',
  imports: [RouterLink, TranslateModule],
  templateUrl: './seminaires.component.html',
  styleUrl: './seminaires.component.scss'
})
export class SeminairesComponent implements OnInit {
  private seo = inject(SeoService);

  ngOnInit(): void {
    this.seo.update({
      title: "Organisation Séminaires & Événements Entreprise Bretagne Rennes",
      description: "L'Événement Peter organise vos séminaires d'entreprise, team-building et soirées corporate en Bretagne et à Rennes.",
      keywords: "séminaire bretagne, séminaire rennes, team building bretagne, événement corporate rennes",
      canonical: '/seminaires'
    });
  }
}
