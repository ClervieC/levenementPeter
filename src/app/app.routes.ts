import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
    title: "L'Événement Peter | Wedding Planner & Agence Événementielle Bretagne Rennes"
  },
  {
    path: 'mariage',
    loadComponent: () => import('./pages/mariage/mariage.component').then(m => m.MariageComponent),
    title: "Organisation Mariage Bretagne Rennes | L'Événement Peter"
  },
  {
    path: 'design-decoration',
    loadComponent: () => import('./pages/design-decoration/design-decoration.component').then(m => m.DesignDecorationComponent),
    title: "Décoration & Design Mariage Bretagne | L'Événement Peter"
  },
  {
    path: 'fetes-celebrations',
    loadComponent: () => import('./pages/fetes/fetes.component').then(m => m.FetesComponent),
    title: "Fêtes & Célébrations sur mesure | L'Événement Peter"
  },
  {
    path: 'officiante-ceremonie',
    loadComponent: () => import('./pages/officiante-ceremonie/officiante-ceremonie.component').then(m => m.OfficianteCeremonieComponent),
    title: "Officiante de cérémonie laïque | L'Événement Peter"
  },
  {
    path: 'seminaires',
    loadComponent: () => import('./pages/seminaires/seminaires.component').then(m => m.SeminairesComponent),
    title: "Organisation Séminaires & Événements Bretagne Rennes | L'Événement Peter"
  },
  {
    path: 'evenement-interne',
    loadComponent: () => import('./pages/evenement-interne/evenement-interne.component').then(m => m.EvenementInterneComponent),
    title: "Événements internes d'entreprise | L'Événement Peter"
  },
  {
    path: 'image-de-marque',
    loadComponent: () => import('./pages/image-de-marque/image-de-marque.component').then(m => m.ImageDeMarqueComponent),
    title: "Événements image de marque | L'Événement Peter"
  },
  {
    path: 'evenement-marketing',
    loadComponent: () => import('./pages/evenement-marketing/evenement-marketing.component').then(m => m.EvenementMarketingComponent),
    title: "Événements marketing & communication | L'Événement Peter"
  },
  {
    path: 'obseques',
    loadComponent: () => import('./pages/obseques/obseques.component').then(m => m.ObsequesComponent),
    title: "Obsèques & Cérémonies funèbres | L'Événement Peter"
  },
  {
    path: 'galerie',
    loadComponent: () => import('./pages/galerie/galerie.component').then(m => m.GalerieComponent),
    title: "Galerie Réalisations | L'Événement Peter"
  },
  {
    path: 'a-propos',
    loadComponent: () => import('./pages/a-propos/a-propos.component').then(m => m.AProposComponent),
    title: "Notre Agence Événementielle | L'Événement Peter Bretagne"
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent),
    title: "Contactez-nous | L'Événement Peter – Agence Événementielle Bretagne"
  },
  {
    path: 'mentions-legales',
    loadComponent: () => import('./pages/mentions-legales/mentions-legales.component').then(m => m.MentionsLegalesComponent),
    title: "Mentions Légales | L'Événement Peter"
  },
  {
    path: 'politique-de-confidentialite',
    loadComponent: () => import('./pages/politique-confidentialite/politique-confidentialite.component').then(m => m.PolitiqueConfidentialiteComponent),
    title: "Politique de Confidentialité | L'Événement Peter"
  },
  { path: '**', redirectTo: '' }
];
