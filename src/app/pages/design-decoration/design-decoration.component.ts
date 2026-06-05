import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-design-decoration',
  imports: [RouterLink, TranslateModule],
  templateUrl: './design-decoration.component.html',
  styleUrl: './design-decoration.component.scss'
})
export class DesignDecorationComponent implements OnInit {
  private seo = inject(SeoService);

  ngOnInit(): void {
    this.seo.update({
      title: "Décoration & Design Mariage Bretagne – Fleurs, Scénographie",
      description: "Design et décoration de mariage en Bretagne avec L'Événement Peter. Création florale, scénographie, mise en scène sur mesure à Rennes.",
      keywords: "décoration mariage bretagne, design mariage rennes, fleurs mariage bretagne, scénographie mariage",
      canonical: '/design-decoration'
    });
  }
}
