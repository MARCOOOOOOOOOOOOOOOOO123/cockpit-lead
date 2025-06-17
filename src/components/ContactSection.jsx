// src/components/ContactSection.jsx
import React from 'react';
import styles from '../styles/ContactSection.module.css'; // Importe le CSS Module

const ContactSection = () => {
  return (
    <section className={styles.contactSection}>
      <div className={styles.contactContent}>
        <h2 className={styles.sectionTitle}>Contactez-nous maintenant</h2>
        <p className={styles.sectionSubtitle}>
          Dites-nous ce dont vous avez besoin, et on revient vers vous rapidement avec des solutions concrètes.
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
              placeholder="" // Placeholder pour la grande zone de texte
            ></input>
          </div>

          {/* Bouton d'envoi du formulaire - non visible sur la maquette, mais essentiel pour un formulaire */}
          {/* Vous pouvez le styliser comme les autres boutons du site */}
          {/*
          <button type="submit" className={styles.submitButton}>
            Envoyer
          </button>
          */}
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
