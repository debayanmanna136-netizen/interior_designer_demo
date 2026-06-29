'use client';

import { useRef, useEffect } from 'react';
import Image from 'next/image';
import useReveal from '@/hooks/useReveal';
import styles from './Testimonials.module.css';

const testimonials = [
  {
    quote: 'Gokul Housing built our family the perfect sanctuary. Their attention to structural detail and understanding of our vision was truly exceptional. The result is a home that feels both luxurious and incredibly solid.',
    name: 'Sarah Jenkins',
    role: 'New Homeowner',
    initial: 'S',
  },
  {
    quote: 'The professionalism and expertise of the development team are unmatched. They completely transformed an empty lot into an inspiring commercial community that our tenants love. A seamless and reliable process.',
    name: 'Michael Chen',
    role: 'Commercial Investor',
    initial: 'M',
  },
  {
    quote: 'Working with Gokul Housing was a delight. They effortlessly blended sustainable architecture with functional elegance. The entire neighborhood now tells a cohesive story, perfectly balanced with warmth and serenity.',
    name: 'Elena Rossi',
    role: 'Community Resident',
    initial: 'E',
  },
];

export default function Testimonials() {
  const sectionRef = useRef<HTMLDivElement>(null);
  useReveal(sectionRef);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const handler = () => {
      const y = window.scrollY;
      const img = el.querySelector<HTMLElement>(`.${styles.bgImg}`);
      // Testimonials is further down, using an offset relative to viewport can also work,
      // but simple window.scrollY multiplied by a smaller factor is robust.
      if (img) img.style.transform = `translateY(${y * 0.35}px)`;
    };
    window.addEventListener('scroll', handler, { passive: true });
    handler(); // initial set
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <section className={`section ${styles.testimonials}`} ref={sectionRef}>
      
      {/* Parallax Background */}
      <div className={styles.bgWrapper}>
        <Image
          src="/project-penthouse.png"
          alt="Gokul Housing Development Parallax Background"
          fill
          className={styles.bgImg}
          style={{ objectFit: 'cover' }}
        />
        <div className={styles.overlay} />
      </div>

      <div className={`container ${styles.inner}`}>

        <div className={`reveal ${styles.header}`} data-reveal="luxury-up">
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
