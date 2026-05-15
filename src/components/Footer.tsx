import Link from 'next/link';
import styles from './Footer.module.css';

const explore = ['Architecture', 'Residential', 'Commercial'];
const studio = ['Press', 'Careers', 'Privacy'];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        {/* Brand */}
        <div className={styles.brand}>
          <Link href="#home" className={styles.logoText}>INTERIOR ZONE</Link>
          <p className={`body-md ${styles.tagline}`}>
            Crafting minimalist, luxury interiors that elevate everyday living.
          </p>
          <div className={styles.socials}>
            {['Instagram', 'Pinterest', 'LinkedIn'].map((s) => (
              <a key={s} href="#" className={`label-md ${styles.social}`} aria-label={s}>
                {s[0]}
              </a>
            ))}
          </div>
        </div>

        {/* Explore */}
        <div className={styles.linkGroup}>
          <h4 className={`label-md ${styles.groupTitle}`}>Explore</h4>
          <ul className={styles.links}>
            {explore.map((item) => (
              <li key={item}>
                <a href="#projects" className={styles.link}>{item}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Studio */}
        <div className={styles.linkGroup}>
          <h4 className={`label-md ${styles.groupTitle}`}>Studio</h4>
          <ul className={styles.links}>
            {studio.map((item) => (
              <li key={item}>
                <a href="#" className={styles.link}>{item}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services quick links */}
        <div className={styles.linkGroup}>
          <h4 className={`label-md ${styles.groupTitle}`}>Services</h4>
          <ul className={styles.links}>
            {['Home Interiors', 'Office Design', 'Renovation', 'Custom Decor'].map((s) => (
              <li key={s}>
                <a href="#services" className={styles.link}>{s}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className={styles.bottomBar}>
        <div className="container">
          <p className={`label-md ${styles.copyright}`}>
            © {new Date().getFullYear()} Interior Zone Studio. All rights reserved.
          </p>
          <p className={`label-md ${styles.copyright}`}>
            Designed with quiet luxury.
          </p>
        </div>
      </div>
    </footer>
  );
}
