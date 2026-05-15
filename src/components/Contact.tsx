'use client';

import { useRef, useState } from 'react';
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

  return (
    <section id="contact" className={`section ${styles.contact}`}>
      <div className="container" ref={sectionRef}>
        <div className={styles.inner}>
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
              Fill out the form to schedule an initial consultation with our design experts.
              We look forward to understanding your vision.
            </p>

            <div className={styles.contactItems}>
              <div className={styles.contactItem}>
                <span className={`label-md ${styles.contactLabel}`}>Phone</span>
                <a href="tel:+15551234567" className={styles.contactValue}>+1 (555) 123-4567</a>
              </div>
              <div className={styles.contactItem}>
                <span className={`label-md ${styles.contactLabel}`}>WhatsApp</span>
                <a href="https://wa.me/15559876543" className={styles.contactValue} target="_blank" rel="noopener noreferrer">+1 (555) 987-6543</a>
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
                      <option value="home">Home Interiors</option>
                      <option value="kitchen">Modular Kitchen</option>
                      <option value="bedroom">Bedroom Design</option>
                      <option value="living">Living Room</option>
                      <option value="office">Office Interiors</option>
                      <option value="renovation">Space Renovation</option>
                      <option value="furniture">Furniture Planning</option>
                      <option value="decor">Custom Decor</option>
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
