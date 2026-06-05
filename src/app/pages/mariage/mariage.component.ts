import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-mariage',
  imports: [RouterLink],
  templateUrl: './mariage.component.html',
  styleUrl: './mariage.component.scss'
})
export class MariageComponent implements OnInit {
  private seo = inject(SeoService);

  prestations = [
    { title: 'Coordination complète', desc: 'De la recherche des prestataires à la coordination le Jour J. Nous orchestrons chaque instant pour que vous viviez votre mariage sereinement.' },
    { title: 'Wedding Day Management', desc: 'Vous avez déjà tout planifié ? Nous intervenons le Jour J pour coordonner prestataires, timing et imprévus. Profitez sans vous soucier de rien.' },
    { title: 'Accompagnement partiel', desc: 'Un coup de pouce ciblé : recherche de lieu, négociation prestataires, création du planning… Nous adaptons notre intervention à vos besoins.' },
    { title: 'Mariage clé en main', desc: 'Confiez-nous l\'intégralité de l\'organisation. Nous gérons chaque détail de A à Z pour un mariage d\'exception en Bretagne.' },
  ];

  ngOnInit(): void {
    this.seo.update({
      title: "Organisation Mariage Bretagne Rennes – Wedding Planner",
      description: "Organisez votre mariage en Bretagne avec L'Événement Peter, wedding planner à Rennes. Coordination complète, Jour J, accompagnement sur mesure. Mariage inoubliable en Ille-et-Vilaine et toute la Bretagne.",
      keywords: "organisation mariage bretagne, mariage rennes, wedding planner bretagne, wedding planner rennes, mariage ille-et-vilaine, organiser mariage bretagne, wedding planning rennes, jour j mariage bretagne",
      canonical: '/mariage'
    });
  }
}
