import { Component, Input, signal } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-photo-carousel',
  standalone: true,
  imports: [TranslateModule],
  template: `
    <section class="photo-carousel section">
      <div class="container">
        <div class="section-header">
          <span class="section-eyebrow">{{ eyebrow }}</span>
          <h2>{{ title }}</h2>
          <span class="gold-line"></span>
        </div>
        <div class="carousel-outer">
          <div class="carousel-viewport">
            <div class="carousel-track" [style.transform]="'translateX(-' + current() * 100 + '%)'">
              @for (i of slidesArr; track i) {
                <div class="carousel-slide">
                  <div class="carousel-placeholder">
                    <span class="carousel-placeholder__label">{{ 'PHOTO_CAROUSEL.PHOTO_LABEL' | translate : { num: i + 1 } }}</span>
                  </div>
                </div>
              }
            </div>
          </div>
          <button class="carousel-arrow carousel-arrow--left" (click)="prev()" aria-label="{{ 'PHOTO_CAROUSEL.PREVIOUS' | translate }}">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"/></svg>
          </button>
          <button class="carousel-arrow carousel-arrow--right" (click)="next()" aria-label="{{ 'PHOTO_CAROUSEL.NEXT' | translate }}">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>
          </button>
        </div>
        <div class="carousel-dots">
          @for (i of slidesArr; track i) {
            <button class="carousel-dot" [class.active]="current() === i"
                    (click)="current.set(i)" [attr.aria-label]="'PHOTO_CAROUSEL.PHOTO_LABEL' | translate : { num: i + 1 }"></button>
          }
        </div>
      </div>
    </section>
  `,
  styles: [`
    .photo-carousel {
      background: var(--color-cream, #f8f5f0);
    }

    .carousel-outer {
      position: relative;
    }

    .carousel-viewport {
      overflow: hidden;
    }

    .carousel-track {
      display: flex;
      transition: transform 0.45s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .carousel-slide {
      min-width: 100%;
      flex-shrink: 0;
    }

    .carousel-placeholder {
      aspect-ratio: 16/9;
      background: linear-gradient(135deg, #e8e3dc 0%, #d4cdc4 100%);
      display: flex;
      align-items: flex-end;
      padding: 1.2rem 1.6rem;

      &__label {
        font-size: 0.75rem;
        font-weight: 600;
        letter-spacing: 0.12em;
        text-transform: uppercase;
        color: rgba(0,0,0,0.3);
      }
    }

    .carousel-arrow {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 44px;
      height: 44px;
      background: rgba(10,10,10,0.55);
      border: 1px solid rgba(201,168,68,0.4);
      color: #c9a844;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: background 0.2s, border-color 0.2s;
      z-index: 2;

      &:hover {
        background: rgba(201,168,68,0.85);
        border-color: #c9a844;
        color: #fff;
      }

      &--left  { left: 1rem; }
      &--right { right: 1rem; }
    }

    .carousel-dots {
      display: flex;
      justify-content: center;
      gap: 0.5rem;
      margin-top: 1.4rem;
    }

    .carousel-dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      border: none;
      background: #c8c0b4;
      cursor: pointer;
      padding: 0;
      transition: background 0.2s, transform 0.2s;

      &.active {
        background: #c9a844;
        transform: scale(1.35);
      }
    }
  `]
})
export class PhotoCarouselComponent {
  @Input() eyebrow = '';
  @Input() title   = '';
  @Input() count   = 5;

  current = signal(0);

  get slidesArr(): number[] {
    return Array.from({ length: this.count }, (_, i) => i);
  }

  prev(): void { this.current.update(v => (v - 1 + this.count) % this.count); }
  next(): void { this.current.update(v => (v + 1) % this.count); }
}
