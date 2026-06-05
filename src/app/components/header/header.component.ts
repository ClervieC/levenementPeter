import { Component, HostListener, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive, TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  lang     = inject(LanguageService);
  scrolled = signal(false);
  menuOpen = signal(false);

  navItems = [
    { key: 'NAV.HOME',       path: '/'                  },
    { key: 'NAV.MARIAGE',    path: '/mariage'           },
    { key: 'NAV.DESIGN',     path: '/design-decoration' },
    { key: 'NAV.SEMINAIRES', path: '/seminaires'        },
    { key: 'NAV.APROPOS',    path: '/a-propos'          },
  ];

  @HostListener('window:scroll')
  onScroll(): void { this.scrolled.set(window.scrollY > 60); }

  toggleMenu(): void { this.menuOpen.update(v => !v); }
  closeMenu(): void  { this.menuOpen.set(false); }
}
