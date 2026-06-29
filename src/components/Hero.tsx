'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Hero.module.css';

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const handler = () => {
      const y = window.scrollY;
      const img = el.querySelector<HTMLElement>(`.${styles.bgImg}`);
      if (img) img.style.transform = `translateY(${y * 0.55}px)`;
    };
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <section id="home" className={styles.hero} ref={sectionRef}>
      {/* Background Image with parallax */}
      <div className={styles.bgWrapper}>
        <Image
          src="/hero.png"
          alt="Luxury modern housing development by Gokul Housing"
          fill
          priority
          className={styles.bgImg}
          style={{ objectFit: 'cover', objectPosition: 'center 30%' }}
        />
        <div className={styles.overlay} />
      </div>

      {/* Content */}
      <div className={`container ${styles.content}`}>
        <div className={styles.textBlock}>
          <span className={`label-md ${styles.eyebrow} animate-fade-up`}>
            Premium Housing Developers
          </span>
          <h1 className={`display-lg ${styles.headline} animate-fade-up delay-2`}>
            Building Homes<br />
            <em>Into Legacies</em>
          </h1>
          <p className={`body-lg ${styles.subheadline} animate-fade-up delay-3`}>
            Modern housing developments crafted with elegance, comfort,
            and sustainability for growing communities.
          </p>
          <div className={`${styles.actions} animate-fade-up delay-4`}>
            <Link href="#projects" className="btn-primary">
              View Projects
            </Link>
            <Link href="#contact" className="btn-secondary">
              Book Consultation
            </Link>
          </div>
        </div>

        {/* Floating stats */}
        <div className={`${styles.stats} animate-fade-up delay-5`}>
          {[
            { value: '12+', label: 'Years of Excellence' },
            { value: '400+', label: 'Projects Completed' },
            { value: '98%', label: 'Client Satisfaction' },
          ].map((stat) => (
            <div key={stat.label} className={styles.stat}>
              <span className={styles.statValue}>{stat.value}</span>
              <span className={`label-md ${styles.statLabel}`}>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={`${styles.scrollHint} animate-fade-in delay-5`}>
        <span className={`label-md ${styles.scrollLabel}`}>Scroll</span>
        <div className={styles.scrollLine} />
      </div>
    </section>
  );
}
