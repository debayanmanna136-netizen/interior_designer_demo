'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import useReveal from '@/hooks/useReveal';
import styles from './Projects.module.css';

const projects = [
  {
    id: 1,
    title: 'The Minimalist Penthouse',
    category: 'Residential',
    type: 'Modern Apartment',
    image: '/project-penthouse.png',
    alt: 'Minimalist penthouse living and dining area by Interior Zone',
    featured: true,
  },
  {
    id: 2,
    title: 'Corporate HQ',
    category: 'Commercial',
    type: 'Office Space',
    image: '/project-office.png',
    alt: 'Luxury corporate office interior by Interior Zone',
    featured: false,
  },
  {
    id: 3,
    title: 'Quiet Luxury Suite',
    category: 'Residential',
    type: 'Bedroom Design',
    image: '/project-bedroom.png',
    alt: 'Quiet luxury bedroom suite by Interior Zone',
    featured: false,
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null);
  useReveal(sectionRef);

  return (
    <section id="projects" className={`section ${styles.projects}`}>
      <div className="container" ref={sectionRef}>

        {/* Header */}
        <div className={`reveal ${styles.header}`}>
          <span className="label-md" style={{ color: 'var(--color-bronze)' }}>
            Selected Work
          </span>
          <div className="divider" />
          <div className={styles.headerRow}>
            <h2 className={`headline-lg ${styles.heading}`}>
              A curated selection of our finest interior transformations.
            </h2>
            <Link href="#contact" className={`btn-secondary ${styles.headerCta}`}>
              View All Projects ↗
            </Link>
          </div>
        </div>

        {/* Grid */}
        <div className={styles.grid}>
          {projects.map((project, i) => (
            <article
              key={project.id}
              className={`reveal ${styles.card} ${project.featured ? styles.featured : ''}`}
              data-reveal={project.featured ? 'left' : 'scale'}
              data-delay={String(i * 120)}
            >
              <div className={styles.imageWrapper}>
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  sizes="(max-width: 900px) 100vw, (max-width: 1200px) 58vw, 700px"
                  className={styles.image}
                  style={{ objectFit: 'cover' }}
                />
                <div className={styles.imageOverlay} />
                <div className={styles.cardMeta}>
                  <span className="tag">{project.category}</span>
                  <span className={`label-md ${styles.cardType}`}>{project.type}</span>
                </div>
              </div>
              <div className={styles.cardBody}>
                <h3 className={`headline-md ${styles.cardTitle}`}>{project.title}</h3>
                <Link href="#contact" className={styles.cardCta}>
                  Explore →
                </Link>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
