import { Directive, ElementRef, Input, OnDestroy, OnInit, inject } from '@angular/core';

@Directive({
  selector: '[appAos]',
  standalone: true,
})
export class AnimateOnScrollDirective implements OnInit, OnDestroy {
  @Input() appAos: 'fade-up' | 'fade-in' | 'fade-left' | 'fade-right' = 'fade-up';
  @Input() animDelay = 0;

  private el = inject(ElementRef);
  private observer!: IntersectionObserver;

  ngOnInit(): void {
    const native: HTMLElement = this.el.nativeElement;
    native.classList.add('aos', `aos--${this.appAos}`);
    if (this.animDelay) native.style.transitionDelay = `${this.animDelay}ms`;

    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          native.classList.add('aos--visible');
          this.observer.unobserve(native);
        }
      },
      { threshold: 0.12 }
    );
    this.observer.observe(native);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
