'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import useReveal from '@/hooks/useReveal';
import styles from './OngoingProject.module.css';

export default function OngoingProject() {
  const sectionRef = useRef<HTMLDivElement>(null);
  useReveal(sectionRef);

  return (
    <section className={`section ${styles.ongoing}`}>
      <div className={`container`} ref={sectionRef}>
        
        <div className={`reveal ${styles.header}`} data-reveal="luxury-up">
          <span className="label-md" style={{ color: 'var(--color-bronze)' }}>Ongoing Project</span>
          <div className="divider" />
          <h2 className={`headline-lg ${styles.heading}`}>
            Now Booking: Choturborgho, Chandannagar
          </h2>
        </div>

        <div className={styles.grid}>
          {/* Left: Image & Details */}
          <div className={`reveal ${styles.projectDetails}`} data-reveal="left">
            <div className={styles.imageWrapper}>
              <Image
                src="/Choturborgho.jpeg"
                alt="Choturborgho Ongoing Project in Chandannagar"
                fill
                className={styles.image}
                style={{ objectFit: 'cover' }}
              />
              <div className={styles.bookingBadge}>Booking Open</div>
            </div>
            
            <div className={styles.info}>
              <h3 className="headline-md">Luxury Living in Chandannagar</h3>
              <p className="body-md">
                Experience unparalleled elegance and modern amenities at our latest development. 
                Secure your dream home today.
              </p>
              <Link href="#contact" className="btn-primary" style={{ marginTop: 16 }}>
                Book Now ↗
              </Link>
            </div>
          </div>

          {/* Right: Map */}
          <div className={`reveal ${styles.mapWrapper}`} data-reveal="right" data-delay="200">
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
