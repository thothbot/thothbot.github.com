const prefersReducedMotion = (): boolean =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Replaces what GSAP with ScrollTrigger used to do here. That was 44 KB gzip on
// every page for two entrance animations; an observer plus a CSS transition is
// the same behaviour, including the reverse when a section scrolls back out.
export function initScrollAnimations(): void {
  const scroller = document.getElementById('scroll-container');
  if (!scroller) return;
  if (prefersReducedMotion()) return;

  const targets: HTMLElement[] = [];

  document.querySelectorAll<HTMLElement>('[data-section]').forEach((section) => {
    const content = section.querySelector<HTMLElement>('.relative.z-10');
    if (content) {
      content.dataset.enter = 'rise';
      targets.push(content);
    }

    section.querySelectorAll<HTMLElement>('.liquid-glass').forEach((card, i) => {
      card.dataset.enter = 'pop';
      card.style.transitionDelay = `${i * 100}ms`;
      targets.push(card);
    });
  });

  if (!targets.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        (entry.target as HTMLElement).dataset.entered = entry.isIntersecting ? 'true' : 'false';
      });
    },
    { root: scroller, threshold: 0.15 }
  );

  targets.forEach((el) => observer.observe(el));
}

export function initScrollSnap(): void {
  document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (event) => {
      const href = anchor.getAttribute('href');
      if (!href) return;

      const target = document.querySelector(href);
      if (target) {
        event.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}
