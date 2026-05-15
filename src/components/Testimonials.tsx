'use client';

import { useRef } from 'react';
import useReveal from '@/hooks/useReveal';
import styles from './Testimonials.module.css';

const testimonials = [
  {
    quote: 'Interior Zone transformed our living space into an elegant sanctuary. Their attention to detail and understanding of our vision was truly exceptional. The result is a home that feels both luxurious and comfortable.',
    name: 'Sarah Jenkins',
    role: 'Residential Client',
    initial: 'S',
  },
  {
    quote: 'The professionalism and creativity of the team are unmatched. They completely reimagined our office layout, creating an inspiring environment that our employees love. A seamless and elegant transformation.',
    name: 'Michael Chen',
    role: 'Corporate Client',
    initial: 'M',
  },
  {
    quote: 'Working with Interior Zone was a delight. They effortlessly blended minimalist aesthetics with functional elegance. Every room now tells a cohesive story, perfectly balanced with warmth and serenity.',
    name: 'Elena Rossi',
    role: 'Boutique Owner',
    initial: 'E',
  },
];

export default function Testimonials() {
  const sectionRef = useRef<HTMLDivElement>(null);
  useReveal(sectionRef);

  return (
    <section className={`section ${styles.testimonials}`}>
      <div className="container" ref={sectionRef}>

        <div className={`reveal ${styles.header}`} data-reveal="fade">
          <span className="label-md" style={{ color: 'var(--color-bronze)' }}>Client Voices</span>
          <div className="divider" />
          <h2 className={`headline-lg ${styles.heading}`}>
            Discover what our clients say about their experience working with our design team.
          </h2>
        </div>

        <div className={styles.grid}>
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`reveal ${styles.card}`}
              data-delay={String(i * 130)}
            >
              <svg className={styles.quoteMark} viewBox="0 0 40 30" fill="none" aria-hidden>
                <path
                  d="M18 0v12H6v18H0V12C0 5.373 5.373 0 12 0h6zm22 0v12H28v18H22V12c0-6.627 5.373-12 12-12h6z"
                  fill="currentColor"
                />
              </svg>
              <blockquote className={`body-md ${styles.quote}`}>{t.quote}</blockquote>
              <div className={styles.author}>
                <div className={styles.avatar}>{t.initial}</div>
                <div>
                  <p className={styles.name}>{t.name}</p>
                  <p className={`label-md ${styles.role}`}>{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
