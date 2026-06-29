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
            About Gokul Housing
          </h2>
          <p className={`body-lg`}>
            At Gokul Housing, we believe that luxury is found in strong foundations and enduring quality.
            Our company is dedicated to creating environments that resonate with
            <strong> Lasting Value</strong>—where sophisticated architecture is paired
            with sustainable building practices and impeccable craftsmanship.
          </p>
          <p className={`body-md`} style={{ color: 'var(--color-on-surface-var)', marginTop: 16 }}>
            We specialise in master-planned communities combined with functional elegance.
            Every development is a curated narrative, tailored meticulously to our residents&apos;
            lifestyles, resulting in neighbourhoods that are not only beautiful but profoundly
            enriching and timeless.
          </p>
          <div className={styles.pillars}>
            {['Sustainability', 'Craftsmanship', 'Community', 'Location'].map((p) => (
              <span key={p} className="tag">{p}</span>
            ))}
          </div>
        </div>

        {/* Right: accent block */}
        <div className={`reveal ${styles.accentCol}`} data-reveal="right" data-delay="150">
          <div className={styles.accentCard}>
            <blockquote className={styles.quote}>
              &ldquo;Great building is not just about brick and mortar — it&rsquo;s about creating
              a lasting foundation where life's best memories can unfold.&rdquo;
            </blockquote>
            <cite className={`label-md ${styles.author}`}>Gokul Housing Group</cite>
          </div>
          <div className={styles.metaGrid}>
            {[
              { value: '2005', label: 'Founded' },
              { value: '12',   label: 'Lead Architects' },
              { value: '4',    label: 'Regions' },
              { value: '35',   label: 'Industry Awards' },
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
