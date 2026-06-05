import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-seminaires',
  imports: [RouterLink],
  templateUrl: './seminaires.component.html',
  styleUrl: './seminaires.component.scss'
})
export class SeminairesComponent implements OnInit {
  private seo = inject(SeoService);

  types = [
    { icon: '🎯', title: 'Séminaires résidentiels', desc: 'Un ou plusieurs jours en immersion, avec hébergement, repas et animations. Nous gérons tout de A à Z.' },
    { icon: '💡', title: 'Team-building', desc: "Activités originales et fédératrices pour renforcer la cohésion d'équipe en plein cœur de la Bretagne." },
    { icon: '🎤', title: 'Conférences & conventions', desc: 'Scénographie de scène, régie technique, accueil des participants et coordination des intervenants.' },
    { icon: '🥂', title: 'Soirées d\'entreprise', desc: "Galas, dîners de fin d'année, cocktails de prestige. Des soirées mémorables qui renforcent vos liens professionnels." },
    { icon: '🏆', title: 'Incentives', desc: "Programmes sur mesure pour récompenser et motiver vos équipes avec des expériences uniques en Bretagne." },
    { icon: '📋', title: 'Assemblées générales', desc: 'Organisation logistique et technique de vos AG, congrès et réunions plénières en Bretagne.' },
  ];

  ngOnInit(): void {
    this.seo.update({
      title: "Organisation Séminaires & Événements Entreprise Bretagne Rennes",
      description: "L'Événement Peter organise vos séminaires d'entreprise, team-building, conventions et soirées corporate en Bretagne et à Rennes. Événements professionnels haut de gamme et sur mesure.",
      keywords: "séminaire bretagne, séminaire rennes, séminaire entreprise bretagne, team building bretagne, événement corporate rennes, organisation séminaire ille-et-vilaine, convention bretagne, soirée entreprise rennes",
      canonical: '/seminaires'
    });
  }
}
