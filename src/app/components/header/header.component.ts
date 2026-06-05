import { Component, HostListener, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageService } from '../../services/language.service';

interface NavChild { key: string; path: string; }
interface NavItem  { key: string; path: string | null; children?: NavChild[]; }

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive, TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  lang         = inject(LanguageService);
  scrolled     = signal(false);
  menuOpen     = signal(false);
  openDropdown = signal<string | null>(null);
  mobileOpen   = signal<string | null>(null);

  navItems: NavItem[] = [
    { key: 'NAV.HOME', path: '/' },
    {
      key: 'NAV.PARTICULIER', path: null,
      children: [
        { key: 'NAV.MARIAGE',    path: '/mariage'               },
        { key: 'NAV.DESIGN',     path: '/design-decoration'     },
        { key: 'NAV.OFFICIANTE', path: '/officiante-ceremonie'  },
        { key: 'NAV.FETES',      path: '/fetes-celebrations'    },
        { key: 'NAV.OBSEQUES',   path: '/obseques'              },
      ]
    },
    {
      key: 'NAV.PROFESSIONNEL', path: null,
      children: [
        { key: 'NAV.SEMINAIRES',   path: '/seminaires'          },
        { key: 'NAV.EV_INTERNE',   path: '/evenement-interne'   },
        { key: 'NAV.IMAGE_MARQUE', path: '/image-de-marque'     },
        { key: 'NAV.EV_MARKETING', path: '/evenement-marketing' },
      ]
    },
    { key: 'NAV.GALERIE', path: '/galerie' },
    { key: 'NAV.APROPOS', path: '/a-propos' },
  ];

  @HostListener('window:scroll')
  onScroll(): void { this.scrolled.set(window.scrollY > 60); }

  toggleMenu(): void    { this.menuOpen.update(v => !v); this.mobileOpen.set(null); }
  closeMenu(): void     { this.menuOpen.set(false); this.openDropdown.set(null); this.mobileOpen.set(null); }
  openDrop(k: string):  void { this.openDropdown.set(k); }
  closeDrop(): void          { this.openDropdown.set(null); }
  toggleMobile(k: string): void { this.mobileOpen.update(v => v === k ? null : k); }
}
