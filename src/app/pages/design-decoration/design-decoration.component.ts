import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-design-decoration',
  imports: [RouterLink],
  templateUrl: './design-decoration.component.html',
  styleUrl: './design-decoration.component.scss'
})
export class DesignDecorationComponent implements OnInit {
  private seo = inject(SeoService);

  univers = [
    { label: 'Romantique & Intemporel', desc: 'Roses blanches, bougies et linges fins pour un mariage classique et élégant.' },
    { label: 'Bohème & Nature', desc: 'Pampa, eucalyptus, macramé et tons terracotta pour un esprit libre et chaleureux.' },
    { label: 'Minimaliste & Luxe', desc: 'Lignes épurées, marbre, or et fleurs monochrome pour une esthétique contemporaine.' },
    { label: 'Champêtre & Rustique', desc: 'Bois brut, fleurs champêtres et lumières guirlandes pour un mariage plein de charme.' },
    { label: 'Mariage Breton', desc: 'Broderies, ardoise, lin et fleurs sauvages pour célébrer la beauté de la Bretagne.' },
    { label: 'Sur Mesure', desc: 'Votre univers, votre palette, vos envies. Nous créons le décor unique qui vous ressemble.' },
  ];

  ngOnInit(): void {
    this.seo.update({
      title: "Décoration & Design Mariage Bretagne – Fleurs, Scénographie",
      description: "Design et décoration de mariage en Bretagne avec L'Événement Peter. Création florale, scénographie, mise en scène sur mesure à Rennes. Transformez votre mariage en une œuvre unique.",
      keywords: "décoration mariage bretagne, design mariage rennes, fleurs mariage bretagne, scénographie mariage, décoration mariage rennes, wedding design bretagne, fleuriste mariage rennes, mise en scène mariage bretagne",
      canonical: '/design-decoration'
    });
  }
}
