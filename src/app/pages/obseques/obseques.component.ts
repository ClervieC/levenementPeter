import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { SeoService } from '../../services/seo.service';
import { PhotoCarouselComponent } from '../../components/photo-carousel/photo-carousel.component';

@Component({
  selector: 'app-obseques',
  imports: [RouterLink, TranslateModule, PhotoCarouselComponent],
  templateUrl: './obseques.component.html',
  styleUrl: './obseques.component.scss'
})
export class ObsequesComponent implements OnInit {
  private seo = inject(SeoService);

  ngOnInit(): void {
    this.seo.update({
      title: "Obsèques & Cérémonies funèbres | L'Événement Peter",
      description: "L'Événement Peter vous accompagne avec dignité et bienveillance pour organiser des obsèques et cérémonies funèbres en Bretagne, entièrement personnalisées selon vos souhaits.",
      keywords: "obsèques bretagne, cérémonie funèbre rennes, organisation obsèques, célébration de vie, cérémonie laïque funèbre rennes",
      canonical: '/obseques'
    });
  }
}
