import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-home',
  imports: [RouterLink, TranslateModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  private seo       = inject(SeoService);
  private translate = inject(TranslateService);

  zones = [
    'Rennes', 'Saint-Malo', 'Brest', 'Lorient', 'Vannes',
    'Quimper', 'Ille-et-Vilaine', 'Morbihan', 'Finistère', "Côtes-d'Armor"
  ];

  ngOnInit(): void {
    this.seo.update({
      title: this.translate.instant('HOME.HERO.EYEBROW'),
      description: "L'Événement Peter, agence événementielle à Rennes. Organisation de mariages, décoration mariage, séminaires et obsèques en Bretagne.",
      keywords: "mariage bretagne, mariage rennes, wedding planner bretagne, wedding planner rennes, décoration mariage bretagne, agence événementielle rennes",
      canonical: '/'
    });
  }
}
