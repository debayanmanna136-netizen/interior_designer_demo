'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import useReveal from '@/hooks/useReveal';
import styles from './OngoingProject.module.css';

interface FeatureItem {
  icon: string;
  label: string;
}

interface OngoingProjectItem {
  id: string;
  title: string;
  location: string;
  mapUrl: string;
  subtitle: string;
  description: string;
  image: string;
  status: string;
  featured?: boolean;
  features: FeatureItem[];
  highlights: string[];
}

const ongoingProjects: OngoingProjectItem[] = [
  {
    id: 'choturborgho',
    title: 'Choturborgho',
    location: 'Chandannagar, West Bengal',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14693.31065121406!2d88.3551!3d22.8671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f8910b80928cd7%3A0x6b107e3a39e0bd58!2sChandannagar%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1717171717171!5m2!1sen!2sin',
    subtitle: 'Flagship Luxury Residential Development',
    description: 'Experience unparalleled elegance and modern architectural mastery at our flagship development. Designed for sophisticated families who value privacy, spatial grandeur, and structural excellence.',
    image: '/Choturborgho.jpeg',
    status: 'Booking Open',
    features: [
      { icon: '🌟', label: 'Grand Entrance Lobby' },
      { icon: '⚡', label: '24x7 Power Backup' },
      { icon: '🔒', label: '3-Tier Security System' },
      { icon: '🌺', label: 'Landscaped Garden' },
      { icon: '🚗', label: 'Covered Car Parking' },
      { icon: '🛗', label: 'High-Speed Elevators' },
      { icon: '🏋️', label: 'Fitness Center' },
      { icon: '🎉', label: 'Rooftop Community Lounge' },
    ],
    highlights: [
      '✨ Strategic location in central Chandannagar',
      '🚗 Seamless transit and highway connectivity',
      '🌿 Lush green landscape & open breathing spaces',
    ],
  },
  {
    id: 'urvi-3',
    title: 'Urvi 3',
    location: 'L.N. Sur Road, Bag Bazar, Chandnagar, Hugli',
    mapUrl: 'https://maps.google.com/maps?q=L.N.+Sur+Road,+Bag+Bazar,+Chandannagar,+Hugli,+West+Bengal&t=&z=16&ie=UTF8&iwloc=&output=embed',
    subtitle: 'Contemporary Architectural Harmony & Luxury Living',
    description: 'Exquisite architectural design crafted for harmony, natural abundance, and modern tranquility. Urvi 3 stands as a prestigious landmark in prime Bag Bazar, Hugli, featuring ten world-class highlighted amenities.',
    image: '/Urvi 3.jpeg',
    status: 'Booking Open',
    featured: true,
    features: [
      { icon: '🏢', label: 'Community Hall' },
      { icon: '🛕', label: 'Temple' },
      { icon: '🌳', label: 'Small Eco-Park' },
      { icon: '🛡️', label: 'Pest Control' },
      { icon: '⚡', label: 'Power Backup' },
      { icon: '🔒', label: 'Security Room' },
      { icon: '💼', label: 'Office Room' },
      { icon: '🏋️', label: 'Gymnasiums' },
      { icon: '🚗', label: 'Carparking (Guest)' },
      { icon: '🛵', label: 'Two-Wheeler Parking Space' },
    ],
    highlights: [
      '📍 Prime address: L.N. Sur Road, Bag Bazar, Chandnagar, Hugli',
      '🛕 Dedicated Temple & serene Eco-Park within premises',
      '🛡️ Complete security, pest control & guest parking amenities',
    ],
  },
  {
    id: 'hainabiti',
    title: 'Hainabiti',
    location: 'Chandannagar, West Bengal',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14693.31065121406!2d88.3551!3d22.8671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f8910b80928cd7%3A0x6b107e3a39e0bd58!2sChandannagar%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1717171717171!5m2!1sen!2sin',
    subtitle: 'Timeless Luxury & Refinement',
    description: 'Thoughtfully designed residences combining sophisticated aesthetics with state-of-the-art living comforts, natural light, and ultimate privacy in serene Chandannagar.',
    image: '/hainabiti.jpeg',
    status: 'Booking Open',
    features: [
      { icon: '🍃', label: 'Serene Green Surrounding' },
      { icon: '⚡', label: 'Full Power Backup' },
      { icon: '🛡️', label: '24x7 CCTV Surveillance' },
      { icon: '🏢', label: 'Multi-Purpose Hall' },
      { icon: '🚗', label: 'Reserved Parking' },
      { icon: '🏋️', label: 'Modern Gymnasium' },
      { icon: '🚰', label: '24x7 Water Supply' },
      { icon: '✨', label: 'Vastu Compliant Design' },
    ],
    highlights: [
      '✨ Peaceful residential enclave with elite community',
      '🚗 Easy access to railway station and educational hubs',
      '🌿 Architecturally optimized for natural cross-ventilation',
    ],
  },
];

export default function OngoingProject() {
  const [activeIndex, setActiveIndex] = useState(1); // Default to Urvi 3
  const sectionRef = useRef<HTMLDivElement>(null);
  useReveal(sectionRef);

  const activeProject = ongoingProjects[activeIndex];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + ongoingProjects.length) % ongoingProjects.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % ongoingProjects.length);
  };

  return (
    <section className={`section ${styles.ongoing}`} id="ongoing-projects">
      <div className="container" ref={sectionRef}>
        
        {/* Section Header */}
        <div className={`reveal ${styles.header}`} data-reveal="luxury-up">
          <span className="label-md" style={{ color: 'var(--color-bronze)' }}>Ongoing Projects</span>
          <div className="divider" />
          <div className={styles.headerRow}>
            <h2 className={`headline-lg ${styles.heading}`}>
              Now Booking: Prestige Residences in Chandannagar &amp; Hugli
            </h2>
            
            {/* Project Switcher Controls */}
            <div className={styles.switcherControls}>
              <button
                type="button"
                onClick={handlePrev}
                className={styles.navBtn}
                aria-label="Previous project"
              >
                ← Prev
              </button>
              <span className={styles.projectCounter}>
                <strong>{activeIndex + 1}</strong> / {ongoingProjects.length}
              </span>
              <button
                type="button"
                onClick={handleNext}
                className={styles.navBtn}
                aria-label="Next project"
              >
                Next →
              </button>
            </div>
          </div>

          {/* Interactive Project Selector Tabs */}
          <div className={styles.tabsContainer}>
            {ongoingProjects.map((proj, idx) => (
              <button
                key={proj.id}
                type="button"
                onClick={() => setActiveIndex(idx)}
                className={`${styles.tabBtn} ${activeIndex === idx ? styles.activeTab : ''}`}
              >
                <span className={styles.tabTitle}>
                  {proj.featured && <span className={styles.starBadge}>★</span>}
                  {proj.title}
                </span>
                <span className={styles.tabStatus}>{proj.status}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Single Project Showcase Card */}
        <div key={activeProject.id} className={`${styles.showcaseCard} animate-fade-in`}>
          <div className={styles.imageCol}>
            <div className={styles.imageWrapper}>
              <Image
                src={activeProject.image}
                alt={`${activeProject.title} — ${activeProject.subtitle} in ${activeProject.location}`}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 55vw"
                className={styles.image}
                style={{ objectFit: 'cover' }}
              />
              <div className={styles.imageOverlay} />
              <div className={styles.bookingBadge}>{activeProject.status}</div>
              <div className={styles.indexWatermark}>0{activeIndex + 1}</div>
              <div className={styles.locationBadge}>
                <span>📍 {activeProject.location}</span>
              </div>
            </div>
          </div>

          <div className={styles.contentCol}>
            <div className={styles.cardHeader}>
              <span className={styles.cardSubtitle}>{activeProject.subtitle}</span>
              <h3 className={`headline-lg ${styles.cardTitle}`}>{activeProject.title}</h3>
              <p className={styles.addressTag}>
                📍 <strong>Location:</strong> {activeProject.location}
              </p>
            </div>

            <p className={`body-md ${styles.cardDesc}`}>{activeProject.description}</p>

            {/* Highlighted Features Section */}
            <div className={styles.featuresSection}>
              <div className={styles.featuresHeader}>
                <span className="label-md" style={{ color: 'var(--color-bronze)' }}>
                  Highlighted Building Features
                </span>
              </div>
              <div className={styles.featuresGrid}>
                {activeProject.features.map((feat, i) => (
                  <div key={i} className={styles.featurePill}>
                    <span className={styles.featureIcon}>{feat.icon}</span>
                    <span className={styles.featureLabel}>{feat.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.cardActions}>
              <Link href="#contact" className="btn-primary" style={{ flex: 1, justifyContent: 'center' }}>
                Book Your Residence ↗
              </Link>
              <Link href="#contact" className="btn-secondary" style={{ flex: 1, justifyContent: 'center' }}>
                Enquire Details ↗
              </Link>
            </div>
          </div>
        </div>

        {/* Apartment Specific Map & Location Section */}
        <div className={styles.mapSection} key={`map-${activeProject.id}`}>
          <div className={styles.mapInfo}>
            <span className="label-md" style={{ color: 'var(--color-bronze)' }}>Specific Apartment Map</span>
            <h3 className="headline-md" style={{ color: 'var(--color-obsidian)', marginTop: 4 }}>
              {activeProject.title} — Location Details
            </h3>
            <p className="body-md" style={{ color: 'var(--color-on-surface-var)', marginBlock: 12 }}>
              <strong>Address:</strong> {activeProject.location}
            </p>
            <ul className={styles.locationHighlights}>
              {activeProject.highlights.map((h, idx) => (
                <li key={idx}>{h}</li>
              ))}
            </ul>
            <Link href="#contact" className="btn-secondary" style={{ marginTop: 20 }}>
              Schedule Site Visit for {activeProject.title} ↗
            </Link>
          </div>
          <div className={styles.mapWrapper}>
            <iframe
              src={activeProject.mapUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className={styles.map}
              title={`Map showing location of ${activeProject.title}`}
            ></iframe>
          </div>
        </div>
        
      </div>
    </section>
  );
}

