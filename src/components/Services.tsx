'use client';

import { useRef } from 'react';
import useReveal from '@/hooks/useReveal';
import styles from './Services.module.css';

const services = [
  { number: '01', title: 'Home Interiors',    description: 'Complete residential design solutions that reflect your personal style with timeless elegance.',                          icon: '⌂' },
  { number: '02', title: 'Modular Kitchens',  description: 'Functional and elegant culinary spaces tailored for modern living and seamless workflow.',                             icon: '◈' },
  { number: '03', title: 'Bedroom Design',    description: 'Tranquil sanctuaries designed for ultimate comfort, rest, and personal rejuvenation.',                                 icon: '☽' },
  { number: '04', title: 'Living Room Styling', description: 'Sophisticated gathering spaces that blend luxury, warmth, and functional beauty.',                                   icon: '⬡' },
  { number: '05', title: 'Office Interiors',  description: 'Inspiring workspaces optimised for productivity, wellbeing, and brand identity.',                                     icon: '▦' },
  { number: '06', title: 'Space Renovation',  description: 'Transformative redesigns that breathe new life into outdated or underutilised areas.',                               icon: '◎' },
  { number: '07', title: 'Furniture Planning', description: 'Curated furniture selection and strategic spatial arrangements for perfect proportions.',                            icon: '⊞' },
  { number: '08', title: 'Custom Decor',      description: 'Bespoke decor elements and art curation that add unique character to your space.',                                   icon: '◇' },
];

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);
  useReveal(sectionRef);

  return (
    <section id="services" className={`section ${styles.services}`}>
      <div className="container" ref={sectionRef}>

        {/* Header */}
        <div className={`reveal ${styles.header}`} data-reveal="fade">
          <span className="label-md" style={{ color: 'var(--color-bronze)' }}>Our Expertise</span>
          <div className="divider" />
          <h2 className={`headline-lg ${styles.heading}`}>
            Comprehensive design solutions tailored to elevate your living and working environments.
          </h2>
        </div>

        {/* Grid */}
        <div className={styles.grid}>
          {services.map((service, i) => (
            <div
              key={service.number}
              className={`reveal ${styles.card}`}
              data-reveal="scale"
              data-delay={String((i % 4) * 90)}
            >
              <div className={styles.cardTop}>
                <span className={`label-md ${styles.number}`}>{service.number}</span>
                <span className={styles.icon} aria-hidden>{service.icon}</span>
              </div>
              <h3 className={`headline-md ${styles.title}`}>{service.title}</h3>
              <p className={`body-md ${styles.desc}`}>{service.description}</p>
              <div className={styles.hoverLine} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
