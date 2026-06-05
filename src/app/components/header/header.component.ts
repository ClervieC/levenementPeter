import { Component, HostListener, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface NavItem {
  label: string;
  path:  string;
}

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  scrolled   = signal(false);
  menuOpen   = signal(false);

  navItems: NavItem[] = [
    { label: 'Accueil',            path: '/'                 },
    { label: 'Mariage',            path: '/mariage'          },
    { label: 'Design & Décoration',path: '/design-decoration'},
    { label: 'Séminaires',         path: '/seminaires'       },
    { label: 'À Propos',           path: '/a-propos'         },
  ];

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled.set(window.scrollY > 60);
  }

  toggleMenu(): void {
    this.menuOpen.update(v => !v);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }
}
