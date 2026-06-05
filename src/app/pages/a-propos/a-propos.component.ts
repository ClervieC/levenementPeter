import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-a-propos',
  imports: [RouterLink, TranslateModule],
  templateUrl: './a-propos.component.html',
  styleUrl: './a-propos.component.scss'
})
export class AProposComponent implements OnInit {
  private seo = inject(SeoService);

  ngOnInit(): void {
    this.seo.update({
      title: "Notre Agence Événementielle Bretagne – À Propos",
      description: "Découvrez L'Événement Peter, agence événementielle passionnée basée à Rennes, Bretagne.",
      keywords: "agence événementielle bretagne, wedding planner rennes, agence mariage bretagne",
      canonical: '/a-propos'
    });
  }
}
