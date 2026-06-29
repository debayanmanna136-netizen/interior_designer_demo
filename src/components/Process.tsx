'use client';

import { useRef } from 'react';
import useReveal from '@/hooks/useReveal';
import styles from './Process.module.css';

const steps = [
  {
    step: '01',
    title: 'Site Selection & Planning',
    description:
      'We begin with a comprehensive analysis to identify the perfect location and understand your vision for the development.',
  },
  {
    step: '02',
    title: 'Architectural Design',
    description:
      'Our team crafts a bespoke structural concept including blueprints, sustainable material palettes, and spatial layouts.',
  },
  {
    step: '03',
    title: 'Construction & Building',
    description:
      'Rigorous engineering, 3D modelling, and material sourcing are coordinated to bring the architectural vision to life.',
  },
  {
    step: '04',
    title: 'Final Inspection & Handover',
    description:
      'We oversee every detail of the build process, ensuring flawless safety standards and a seamless key handover.',
  },
];

export default function Process() {
  const sectionRef = useRef<HTMLDivElement>(null);
  useReveal(sectionRef);

  return (
    <section id="process" className={`section ${styles.process}`}>
      <div className="container" ref={sectionRef}>
        {/* Header */}
        <div className={`reveal ${styles.header}`}>
          <span className="label-md" style={{ color: 'var(--color-bronze)' }}>
            How We Work
          </span>
          <div className="divider" />
          <h2 className={`headline-lg ${styles.heading}`}>
            Our Process
          </h2>
          <p className={`body-lg ${styles.subheading}`}>
            From first conversation to final reveal, every step is handled with
            meticulous care and transparent communication.
          </p>
        </div>

        {/* Steps */}
        <div className={styles.steps}>
          {steps.map((s, i) => (
            <div key={s.step} className={`reveal delay-${i + 1} ${styles.step}`}>
              <div className={styles.stepLeft}>
                <span className={`label-md ${styles.stepNum}`}>{s.step}</span>
                {i < steps.length - 1 && <div className={styles.connector} />}
              </div>
              <div className={styles.stepBody}>
                <h3 className={`headline-md ${styles.stepTitle}`}>{s.title}</h3>
                <p className={`body-md ${styles.stepDesc}`}>{s.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
