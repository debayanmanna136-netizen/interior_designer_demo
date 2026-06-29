'use client';

import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import useReveal from '@/hooks/useReveal';
import styles from './Contact.module.css';

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  useReveal(sectionRef);

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    project: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const handler = () => {
      const y = window.scrollY;
      const img = el.querySelector<HTMLElement>(`.${styles.bgImg}`);
      if (img) img.style.transform = `translateY(${y * 0.4}px)`;
    };
    window.addEventListener('scroll', handler, { passive: true });
    handler(); // initial set
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <section id="contact" className={`section ${styles.contact}`} ref={sectionRef}>
      
      {/* Parallax Background */}
      <div className={styles.bgWrapper}>
        <Image
          src="/project-bedroom.png"
          alt="Gokul Housing Contact Parallax Background"
          fill
          className={styles.bgImg}
          style={{ objectFit: 'cover' }}
        />
        <div className={styles.overlay} />
      </div>

      <div className={`container ${styles.inner}`}>
        <div className={styles.contentWrapper}>
          {/* Left: info */}
          <div className={`reveal ${styles.infoCol}`}>
            <span className="label-md" style={{ color: 'var(--color-bronze)' }}>
              Get In Touch
            </span>
            <div className="divider" />
            <h2 className={`headline-lg ${styles.heading}`}>
              Ready to elevate your space?
            </h2>
            <p className={`body-lg ${styles.body}`}>
              Fill out the form to schedule an initial consultation with our property experts.
              We look forward to understanding your vision.
            </p>

            <div className={styles.contactItems}>
              <div className={styles.contactItem}>
                <span className={`label-md ${styles.contactLabel}`}>Owner</span>
                <span className={styles.contactValue}>Mr. Monoj Manna</span>
              </div>
              <div className={styles.contactItem}>
                <span className={`label-md ${styles.contactLabel}`}>Phone / WhatsApp</span>
                <a href="https://wa.me/917001017605" className={styles.contactValue} target="_blank" rel="noopener noreferrer">+91 70010 17605</a>
              </div>
              <div className={styles.contactItem}>
                <span className={`label-md ${styles.contactLabel}`}>Alternate Phone</span>
                <a href="tel:+919123902338" className={styles.contactValue}>+91 91239 02338</a>
              </div>
              <div className={styles.contactItem}>
                <span className={`label-md ${styles.contactLabel}`}>Operating Hours</span>
                <span className={styles.contactValue}>Mon – Fri: 9:00 AM – 6:00 PM<br />Sat – Sun: Closed</span>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className={`reveal delay-2 ${styles.formCol}`}>
            {submitted ? (
              <div className={styles.successBox}>
                <div className={styles.successIcon}>✓</div>
                <h3 className={`headline-md`}>Thank you for reaching out.</h3>
                <p className="body-md" style={{ color: 'var(--color-on-surface-var)', marginTop: 8 }}>
                  Our team will be in touch within 24 hours.
                </p>
              </div>
            ) : (
              <form className={styles.form} onSubmit={handleSubmit} noValidate>
                <div className={styles.fieldRow}>
                  <div className={styles.field}>
                    <label htmlFor="contact-name" className={`label-md ${styles.label}`}>Full Name</label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      placeholder="Your name"
                      className={styles.input}
                      value={formState.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className={styles.field}>
                    <label htmlFor="contact-email" className={`label-md ${styles.label}`}>Email Address</label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      placeholder="your@email.com"
                      className={styles.input}
                      value={formState.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className={styles.fieldRow}>
                  <div className={styles.field}>
                    <label htmlFor="contact-phone" className={`label-md ${styles.label}`}>Phone (optional)</label>
                    <input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      className={styles.input}
                      value={formState.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className={styles.field}>
                    <label htmlFor="contact-project" className={`label-md ${styles.label}`}>Project Type</label>
                    <select
                      id="contact-project"
                      name="project"
                      className={`${styles.input} ${styles.select}`}
                      value={formState.project}
                      onChange={handleChange}
                    >
                      <option value="">Select a service</option>
                      <option value="custom_build">Custom Home Build</option>
                      <option value="community">Community Living</option>
                      <option value="investment">Property Investment</option>
                      <option value="commercial">Commercial Estate</option>
                      <option value="land">Land Acquisition</option>
                      <option value="management">Property Management</option>
                    </select>
                  </div>
                </div>

                <div className={styles.field}>
                  <label htmlFor="contact-message" className={`label-md ${styles.label}`}>Tell Us About Your Project</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    placeholder="Share your vision, space dimensions, timeline, and any inspiration you have..."
                    className={`${styles.input} ${styles.textarea}`}
                    value={formState.message}
                    onChange={handleChange}
                  />
                </div>

                <button type="submit" className={`btn-primary ${styles.submitBtn}`}>
                  Send Enquiry →
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
