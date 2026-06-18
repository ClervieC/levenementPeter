import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
    title: "Kalist | Wedding Planner & Agence Événementielle Bretagne Rennes"
  },
  {
    path: 'mariage',
    loadComponent: () => import('./pages/mariage/mariage.component').then(m => m.MariageComponent),
    title: "Organisation Mariage Bretagne Rennes | Kalist"
  },
  {
    path: 'design-decoration',
    loadComponent: () => import('./pages/design-decoration/design-decoration.component').then(m => m.DesignDecorationComponent),
    title: "Décoration & Design Mariage Bretagne | Kalist"
  },
  {
    path: 'fetes-celebrations',
    loadComponent: () => import('./pages/fetes/fetes.component').then(m => m.FetesComponent),
    title: "Fêtes & Célébrations sur mesure | Kalist"
  },
  {
    path: 'officiante-ceremonie',
    loadComponent: () => import('./pages/officiante-ceremonie/officiante-ceremonie.component').then(m => m.OfficianteCeremonieComponent),
    title: "Officiante de cérémonie laïque | Kalist"
  },
  {
    path: 'seminaires',
    loadComponent: () => import('./pages/seminaires/seminaires.component').then(m => m.SeminairesComponent),
    title: "Organisation Séminaires & Événements Bretagne Rennes | Kalist"
  },
  {
    path: 'evenement-interne',
    loadComponent: () => import('./pages/evenement-interne/evenement-interne.component').then(m => m.EvenementInterneComponent),
    title: "Événements internes d'entreprise | Kalist"
  },
  {
    path: 'image-de-marque',
    loadComponent: () => import('./pages/image-de-marque/image-de-marque.component').then(m => m.ImageDeMarqueComponent),
    title: "Événements image de marque | Kalist"
  },
  {
    path: 'evenement-marketing',
    loadComponent: () => import('./pages/evenement-marketing/evenement-marketing.component').then(m => m.EvenementMarketingComponent),
    title: "Événements marketing & communication | Kalist"
  },
  {
    path: 'obseques',
    loadComponent: () => import('./pages/obseques/obseques.component').then(m => m.ObsequesComponent),
    title: "Obsèques & Cérémonies funèbres | Kalist"
  },
  {
    path: 'galerie',
    loadComponent: () => import('./pages/galerie/galerie.component').then(m => m.GalerieComponent),
    title: "Galerie Réalisations | Kalist"
  },
  {
    path: 'a-propos',
    loadComponent: () => import('./pages/a-propos/a-propos.component').then(m => m.AProposComponent),
    title: "Notre Agence Événementielle | Kalist Bretagne"
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent),
    title: "Contactez-nous | Kalist – Agence Événementielle Bretagne"
  },
  {
    path: 'mentions-legales',
    loadComponent: () => import('./pages/mentions-legales/mentions-legales.component').then(m => m.MentionsLegalesComponent),
    title: "Mentions Légales | Kalist"
  },
  {
    path: 'politique-de-confidentialite',
    loadComponent: () => import('./pages/politique-confidentialite/politique-confidentialite.component').then(m => m.PolitiqueConfidentialiteComponent),
    title: "Politique de Confidentialité | Kalist"
  },
  {
    path: '404',
    loadComponent: () => import('./pages/not-found/not-found.component').then(m => m.NotFoundComponent),
    title: "Page introuvable | Kalist"
  },
  { path: '**', redirectTo: '/404' }
];
