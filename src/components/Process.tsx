'use client';

import { useRef } from 'react';
import useReveal from '@/hooks/useReveal';
import styles from './Process.module.css';

const steps = [
  {
    step: '01',
    title: 'Initial Consultation',
    description:
      'We begin with a deep-listening session to understand your vision, lifestyle, and aspirations for the space.',
  },
  {
    step: '02',
    title: 'Concept Development',
    description:
      'Our team crafts a bespoke design concept including mood boards, material palettes, and spatial layouts.',
  },
  {
    step: '03',
    title: 'Design Refinement',
    description:
      'Detailed drawings, 3D visualisations, and material presentations are refined through collaborative feedback.',
  },
  {
    step: '04',
    title: 'Execution & Handover',
    description:
      'We oversee every detail of the build process, ensuring flawless execution and a seamless reveal.',
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
