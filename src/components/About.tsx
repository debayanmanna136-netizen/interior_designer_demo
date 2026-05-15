'use client';

import { useRef } from 'react';
import useReveal from '@/hooks/useReveal';
import styles from './About.module.css';

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  useReveal(sectionRef);

  return (
    <section id="about" className={`section ${styles.about}`}>
      <div className={`container ${styles.inner}`} ref={sectionRef}>

        {/* Left: text */}
        <div className={`reveal ${styles.textCol}`} data-reveal="left">
          <span className="label-md" style={{ color: 'var(--color-bronze)' }}>
            Our Philosophy
          </span>
          <div className="divider" />
          <h2 className={`headline-lg ${styles.heading}`}>
            About Interior Zone
          </h2>
          <p className={`body-lg`}>
            At Interior Zone, we believe that luxury is found in simplicity and space.
            Our studio is dedicated to creating environments that resonate with
            <strong> Quiet Luxury</strong>—where sophisticated design is whispered
            through materiality, light, and impeccable craftsmanship.
          </p>
          <p className={`body-md`} style={{ color: 'var(--color-on-surface-var)', marginTop: 16 }}>
            We specialise in minimalist aesthetics combined with functional elegance.
            Every project is a curated narrative, tailored meticulously to our clients&apos;
            vision, resulting in spaces that are not only beautiful but profoundly calm
            and timeless.
          </p>
          <div className={styles.pillars}>
            {['Materiality', 'Craftsmanship', 'Proportion', 'Light'].map((p) => (
              <span key={p} className="tag">{p}</span>
            ))}
          </div>
        </div>

        {/* Right: accent block */}
        <div className={`reveal ${styles.accentCol}`} data-reveal="right" data-delay="150">
          <div className={styles.accentCard}>
            <blockquote className={styles.quote}>
              &ldquo;Great design is not just how something looks — it&rsquo;s how it
              makes you feel the moment you walk through the door.&rdquo;
            </blockquote>
            <cite className={`label-md ${styles.author}`}>Interior Zone Studio</cite>
          </div>
          <div className={styles.metaGrid}>
            {[
              { value: '2012', label: 'Founded' },
              { value: '8',    label: 'Design Principals' },
              { value: '3',    label: 'Countries' },
              { value: '42',   label: 'Design Awards' },
            ].map((m, i) => (
              <div
                key={m.label}
                className={`reveal ${styles.metaItem}`}
                data-reveal="scale"
                data-delay={String(i * 80)}
              >
                <span className={styles.metaValue}>{m.value}</span>
                <span className={`label-md ${styles.metaLabel}`}>{m.label}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
