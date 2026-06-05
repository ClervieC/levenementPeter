import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-mariage',
  imports: [RouterLink, TranslateModule],
  templateUrl: './mariage.component.html',
  styleUrl: './mariage.component.scss'
})
export class MariageComponent implements OnInit {
  private seo = inject(SeoService);

  ngOnInit(): void {
    this.seo.update({
      title: "Organisation Mariage Bretagne Rennes – Wedding Planner",
      description: "Organisez votre mariage en Bretagne avec L'Événement Peter, wedding planner à Rennes. Coordination complète, Jour J, accompagnement sur mesure.",
      keywords: "organisation mariage bretagne, mariage rennes, wedding planner bretagne, wedding planner rennes",
      canonical: '/mariage'
    });
  }
}
