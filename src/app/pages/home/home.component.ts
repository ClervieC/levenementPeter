import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  private seo = inject(SeoService);

  services = [
    {
      icon: 'rings',
      title: 'Mariage en Bretagne',
      desc: 'Organisation complète de votre mariage, du premier rendez-vous au dernier accord musical. Wedding planning haut de gamme à Rennes et dans toute la Bretagne.',
      link: '/mariage',
      label: 'Découvrir'
    },
    {
      icon: 'flower',
      title: 'Design & Décoration',
      desc: 'Création florale, mise en scène et décoration de mariage sur mesure. Nous transformons vos idées en un univers visuel unique et inoubliable.',
      link: '/design-decoration',
      label: 'Découvrir'
    },
    {
      icon: 'briefcase',
      title: 'Séminaires & Corporate',
      desc: 'Conception et organisation de séminaires d\'entreprise, team-building et événements corporate en Bretagne. Des expériences qui marquent les esprits.',
      link: '/seminaires',
      label: 'Découvrir'
    },
    {
      icon: 'candle',
      title: 'Obsèques & Cérémonies',
      desc: 'Un accompagnement digne et attentionné pour organiser des obsèques et cérémonies funèbres en Bretagne, dans le respect de vos volontés.',
      link: '/contact',
      label: 'Nous contacter'
    }
  ];

  zones = [
    'Rennes', 'Saint-Malo', 'Brest', 'Lorient', 'Vannes',
    'Quimper', 'Ille-et-Vilaine', 'Morbihan', 'Finistère', 'Côtes-d\'Armor'
  ];

  ngOnInit(): void {
    this.seo.update({
      title: "Wedding Planner & Agence Événementielle Bretagne Rennes",
      description: "L'Événement Peter, agence événementielle à Rennes. Organisation de mariages, décoration mariage, séminaires et obsèques en Bretagne. Service haut de gamme et sur mesure.",
      keywords: "mariage bretagne, mariage rennes, wedding planner bretagne, wedding planner rennes, organisation mariage bretagne, décoration mariage bretagne, agence événementielle rennes, séminaire bretagne",
      canonical: '/'
    });
  }
}
