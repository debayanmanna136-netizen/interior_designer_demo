'use client';

import { useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import useReveal from '@/hooks/useReveal';
import styles from './Projects.module.css';

const projects = [
  {
    id: 1,
    title: 'Choturborgho',
    category: 'Development',
    type: 'Luxury Residence • Chandannagar',
    image: '/Choturborgho.jpeg',
    alt: 'Choturborgho luxury residential development in Chandannagar',
    featured: true,
  },
  {
    id: 2,
    title: 'Urvi 3',
    category: 'Architecture',
    type: 'Contemporary Sanctuary • Chandannagar',
    image: '/Urvi 3.jpeg',
    alt: 'Urvi 3 contemporary architectural sanctuary in Chandannagar',
    featured: false,
  },
  {
    id: 3,
    title: 'hainabiti',
    category: 'Residential',
    type: 'Timeless Refinement • Chandannagar',
    image: '/hainabiti.jpeg',
    alt: 'hainabiti luxury residential development in Chandannagar',
    featured: false,
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null);
  useReveal(sectionRef);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    
    const handler = () => {
      // Floating parallax and zoom for project cards
      const cards = el.querySelectorAll<HTMLElement>(`.${styles.card}`);
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        
        // Only animate if the card is in or near the viewport
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          const imageWrapper = card.querySelector<HTMLElement>(`.${styles.imageWrapper}`);
          const image = card.querySelector<HTMLElement>(`.${styles.image}`);
          const body = card.querySelector<HTMLElement>(`.${styles.cardBody}`);
          
          // Calculate how far the card has scrolled into view
          const offset = window.innerHeight - rect.top;
          
          if (imageWrapper && body && image) {
             // Foreground parallax (image moves slower than text body)
             imageWrapper.style.transform = `translateY(${offset * -0.15}px)`;
             body.style.transform = `translateY(${offset * -0.05}px)`;
             
             // Zoom parallax (scale image slowly as we scroll)
             const scale = 1 + (Math.max(0, offset) * 0.0003);
             image.style.transform = `scale(${Math.min(scale, 1.25)})`;
          }
        }
      });
    };
    
    window.addEventListener('scroll', handler, { passive: true });
    // Initial call
    handler();
    return () => window.removeEventListener('scroll', handler);
  }, []);

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
              A curated selection of our finest residential developments.
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
