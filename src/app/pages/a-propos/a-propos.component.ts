import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-a-propos',
  imports: [RouterLink],
  templateUrl: './a-propos.component.html',
  styleUrl: './a-propos.component.scss'
})
export class AProposComponent implements OnInit {
  private seo = inject(SeoService);

  valeurs = [
    { titre: 'Excellence', texte: 'Nous ne transigeons jamais sur la qualité. Chaque prestataire, chaque détail est choisi avec soin pour atteindre l\'excellence.' },
    { titre: 'Sur mesure', texte: 'Aucun événement ne ressemble à un autre. Chaque projet est unique et mérite une attention et une créativité sans compromis.' },
    { titre: 'Écoute', texte: 'Nous prenons le temps de vous connaître, de comprendre vos désirs profonds et de les traduire en réalité avec justesse.' },
    { titre: 'Sérénité', texte: 'Notre rôle est de porter l\'organisation à votre place pour que vous puissiez vivre pleinement chaque instant de votre événement.' },
  ];

  ngOnInit(): void {
    this.seo.update({
      title: "Notre Agence Événementielle Bretagne – À Propos",
      description: "Découvrez L'Événement Peter, agence événementielle passionnée basée à Rennes. Une équipe expérimentée au service de votre mariage et de vos événements en Bretagne.",
      keywords: "agence événementielle bretagne, wedding planner rennes, agence mariage bretagne, organisateur événement bretagne, l'événement peter à propos",
      canonical: '/a-propos'
    });
  }
}
