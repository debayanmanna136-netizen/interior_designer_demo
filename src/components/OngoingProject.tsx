'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import useReveal from '@/hooks/useReveal';
import styles from './OngoingProject.module.css';

interface OngoingProjectItem {
  id: string;
  title: string;
  location: string;
  subtitle: string;
  description: string;
  image: string;
  status: string;
}

const ongoingProjects: OngoingProjectItem[] = [
  {
    id: 'choturborgho',
    title: 'Choturborgho',
    location: 'Chandannagar',
    subtitle: 'Luxury Residential Development',
    description: 'Experience unparalleled elegance and modern amenities at our flagship development. Secure your dream residence today.',
    image: '/Choturborgho.jpeg',
    status: 'Booking Open',
  },
  {
    id: 'urvi',
    title: 'urvi ',
    location: 'Chandannagar',
    subtitle: 'Contemporary Architectural Harmony',
    description: 'Exquisite architectural design crafted for harmony, natural abundance, and modern tranquility in prime Chandannagar.',
    image: '/urvi .jpeg',
    status: 'Booking Open',
  },
  {
    id: 'hainabiti',
    title: 'hainabiti',
    location: 'Chandannagar',
    subtitle: 'Timeless Luxury & Refinement',
    description: 'Thoughtfully designed residences combining sophisticated aesthetics with state-of-the-art living comforts and privacy.',
    image: '/hainabiti.jpeg',
    status: 'Booking Open',
  },
];

export default function OngoingProject() {
  const sectionRef = useRef<HTMLDivElement>(null);
  useReveal(sectionRef);

  return (
    <section className={`section ${styles.ongoing}`}>
      <div className={`container`} ref={sectionRef}>
        
        {/* Section Header */}
        <div className={`reveal ${styles.header}`} data-reveal="luxury-up">
          <span className="label-md" style={{ color: 'var(--color-bronze)' }}>Ongoing Projects</span>
          <div className="divider" />
          <h2 className={`headline-lg ${styles.heading}`}>
            Now Booking: Luxury Developments in Chandannagar
          </h2>
        </div>

        {/* 3-Column Projects Grid */}
        <div className={styles.projectsGrid}>
          {ongoingProjects.map((project, idx) => (
            <article 
              key={project.id} 
              className={`reveal ${styles.card}`} 
              data-reveal="luxury-up" 
              data-delay={String(idx * 150)}
            >
              <div className={styles.imageWrapper}>
                <Image
                  src={project.image}
                  alt={`${project.title} Ongoing Project in ${project.location}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className={styles.image}
                  style={{ objectFit: 'cover' }}
                />
                <div className={styles.imageOverlay} />
                <div className={styles.bookingBadge}>{project.status}</div>
                <div className={styles.locationBadge}>
                  <span>📍 {project.location}</span>
                </div>
              </div>
              
              <div className={styles.cardBody}>
                <div className={styles.cardHeader}>
                  <h3 className={`headline-md ${styles.cardTitle}`}>{project.title}</h3>
                  <span className={styles.cardSubtitle}>{project.subtitle}</span>
                </div>
                <p className={`body-md ${styles.cardDesc}`}>{project.description}</p>
                <div className={styles.cardFooter}>
                  <Link href="#contact" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                    Book Now ↗
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Location & Masterplan Showcase */}
        <div className={`reveal ${styles.mapSection}`} data-reveal="luxury-up" data-delay="400">
          <div className={styles.mapInfo}>
            <span className="label-md" style={{ color: 'var(--color-bronze)' }}>Prime Location</span>
            <h3 className="headline-md" style={{ color: 'var(--color-obsidian)', marginTop: 4 }}>
              Chandannagar, West Bengal
            </h3>
            <p className="body-md" style={{ color: 'var(--color-on-surface-var)', marginBlock: 12 }}>
              All our prestigious ongoing projects are strategically situated in Chandannagar (Chandon Nagar). Experience seamless connectivity, heritage charm, and serene riverside luxury.
            </p>
            <ul className={styles.locationHighlights}>
              <li>✨ Premium neighborhood & secure living</li>
              <li>🚗 Rapid transit & highway accessibility</li>
              <li>🌿 Serene environment with lush greenery</li>
            </ul>
            <Link href="#contact" className="btn-secondary" style={{ marginTop: 20 }}>
              Schedule Site Visit ↗
            </Link>
          </div>
          <div className={styles.mapWrapper}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14693.31065121406!2d88.3551!3d22.8671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f8910b80928cd7%3A0x6b107e3a39e0bd58!2sChandannagar%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1717171717171!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className={styles.map}
            ></iframe>
          </div>
        </div>
        
      </div>
    </section>
  );
}
