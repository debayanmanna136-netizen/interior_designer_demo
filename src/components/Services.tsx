'use client';

import { useRef } from 'react';
import useReveal from '@/hooks/useReveal';
import styles from './Services.module.css';

const services = [
  { number: '01', title: 'Custom Home Builds',    description: 'Complete residential development solutions that reflect your personal style with enduring quality.',                         icon: '⌂' },
  { number: '02', title: 'Community Living',      description: 'Master-planned neighbourhoods designed for modern living and seamless connectivity.',                                  icon: '◈' },
  { number: '03', title: 'Sustainable Design',    description: 'Eco-friendly housing developments focused on energy efficiency and environmental harmony.',                                icon: '☽' },
  { number: '04', title: 'Turnkey Solutions',     description: 'Comprehensive design-to-build services that blend luxury, warmth, and functional architecture.',                           icon: '⬡' },
  { number: '05', title: 'Commercial Estates',    description: 'Inspiring business parks and workspaces optimised for productivity and brand identity.',                                 icon: '▦' },
  { number: '06', title: 'Land Acquisition',      description: 'Strategic sourcing and evaluation of premium land for high-value future developments.',                                  icon: '◎' },
  { number: '07', title: 'Property Management',   description: 'Dedicated post-handover services and structural maintenance for complete peace of mind.',                              icon: '⊞' },
  { number: '08', title: 'Urban Regeneration',    description: 'Transformative developments that breathe new life into underutilised city areas.',                                     icon: '◇' },
];

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);
  useReveal(sectionRef);

  return (
    <section id="services" className={`section ${styles.services}`}>
      <div className="container" ref={sectionRef}>

        {/* Header */}
        <div className={`reveal ${styles.header}`} data-reveal="luxury-up">
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
