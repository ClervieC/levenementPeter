import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LanguageService } from './services/language.service';
import { AosService } from './services/aos.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  private lang = inject(LanguageService);
  private aos = inject(AosService);

  ngOnInit(): void {
    this.lang.init();
    this.aos.init();
  }
}
