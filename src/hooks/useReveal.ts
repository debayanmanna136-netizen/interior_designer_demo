'use client';

import { useEffect, RefObject } from 'react';

/**
 * Scroll-triggered reveal animation hook.
 * Elements with `.reveal` inside the container will animate in every time
 * they enter the viewport (not just the first time), and animate OUT when
 * they leave. Supports directional variants via data-reveal attribute.
 *
 * Usage:
 *   <div className="reveal" />                 → fade up (default)
 *   <div className="reveal" data-reveal="left" />  → slide from left
 *   <div className="reveal" data-reveal="right" /> → slide from right
 *   <div className="reveal" data-reveal="scale" /> → scale + fade
 */
export default function useReveal(containerRef: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const targets = Array.from(
      container.querySelectorAll<HTMLElement>('.reveal')
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Small delay based on data-delay attribute for staggering
            const delay = (entry.target as HTMLElement).dataset.delay ?? '0';
            setTimeout(() => {
              (entry.target as HTMLElement).classList.add('visible');
            }, Number(delay));
          } else {
            // Remove so it re-animates next scroll-in
            (entry.target as HTMLElement).classList.remove('visible');
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -30px 0px' }
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [containerRef]);
}
