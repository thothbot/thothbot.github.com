import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const prefersReducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export function initScrollAnimations() {
  const scroller = document.getElementById('scroll-container');
  if (!scroller) return;
  if (prefersReducedMotion()) return;

  ScrollTrigger.defaults({
    scroller: scroller,
  });

  gsap.utils.toArray<HTMLElement>('[data-section]').forEach((section) => {
    const content = section.querySelector('.relative.z-10');
    if (!content) return;

    gsap.fromTo(
      content,
      {
        y: 60,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          end: 'top 20%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    const cards = section.querySelectorAll('.liquid-glass, .liquid-glass-dark');
    if (cards.length) {
      gsap.fromTo(
        cards,
        {
          y: 40,
          opacity: 0,
          scale: 0.95,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 60%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }
  });
}

export function initParallaxEffects() {
  if (prefersReducedMotion()) return;
  const parallaxElements = document.querySelectorAll('[data-parallax]');
  if (!parallaxElements.length) return;

  document.addEventListener('mousemove', (e) => {
    const mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
    const mouseY = (e.clientY / window.innerHeight - 0.5) * 2;

    gsap.to(parallaxElements, {
      x: mouseX * 20,
      y: mouseY * 20,
      duration: 0.5,
      ease: 'power2.out',
    });
  });
}

export function initScrollSnap() {
  const container = document.getElementById('scroll-container');
  if (!container) return;

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const href = anchor.getAttribute('href');
      if (!href) return;

      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}
