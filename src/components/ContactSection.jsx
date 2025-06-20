// src/components/ContactSection.jsx
import React from 'react';
import styles from '../styles/ContactSection.module.css'; // Importe le CSS Module

const ContactSection = () => {
  return (
    <section className={styles.contactSection}>
      <div className={styles.contactContent}>
        <h2 className={styles.sectionTitle}>Contactez-nous</h2>
        <p className={styles.sectionSubtitle}>
   Boostez vos résultats avec des campagnes Facebook Ads performantes. Contactez-nous dès aujourd'hui!
        </p>

        <form className={styles.contactForm}>
          <div className={styles.formGroup}>
            <input
              type="text"
              id="name"
              name="name"
              className={styles.formInput}
              placeholder="Noms et prénoms"
            />
          </div>

          <div className={styles.formGroup}>
            <input
              type="email"
              id="email"
              name="email"
              className={styles.formInput}
              placeholder="Adresse mail"
            />
          </div>

          <div className={styles.formGroup}>
            <input
              type="tel"
              id="phone"
              name="phone"
              className={styles.formInput}
              placeholder="Téléphone"
            />
          </div>

          <div className={styles.formGroup}>
            <input
              id="message"
              name="message"
              className={styles.formInput}
              placeholder="Quelle est votre besoin ?" // Placeholder pour la grande zone de texte
            ></input>
          </div>
<div>
          <button type="submit" className={styles.submitButton}>
            Envoyer
          </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
