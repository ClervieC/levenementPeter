import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AosService {
  private io!: IntersectionObserver;
  private mo!: MutationObserver;

  init(): void {
    this.io = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('aos--visible');
            this.io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    const observe = (el: Element) => {
      const delay = el.getAttribute('data-aos-delay');
      if (delay) (el as HTMLElement).style.transitionDelay = `${delay}ms`;
      this.io.observe(el);
    };

    // Observe existing elements
    document.querySelectorAll('[data-aos]').forEach(observe);

    // Watch for new elements added by route navigation
    this.mo = new MutationObserver(mutations => {
      mutations.forEach(m => {
        m.addedNodes.forEach(node => {
          if (node.nodeType !== 1) return;
          const el = node as Element;
          if (el.hasAttribute('data-aos')) observe(el);
          el.querySelectorAll('[data-aos]').forEach(observe);
        });
      });
    });

    this.mo.observe(document.body, { childList: true, subtree: true });
  }
}
