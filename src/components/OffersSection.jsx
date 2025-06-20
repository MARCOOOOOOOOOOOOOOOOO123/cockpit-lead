// src/components/OffersSection.jsx
import React from 'react';
import Link from 'next/link';
import styles from '../styles/OffersSection.module.css'; // Importe le CSS Module

const OffersSection = () => {
  return (
    <section className={styles.offersSection}>
      <h2 className={styles.sectionTitle}>NOTRE OFFRE</h2>
      <p className={styles.sectionSubtitle}>
        À partir de votre compte existant ou en partant de zéro, nous lançons votre campagne publicitaire Facebook complète.
      </p>

      <div className={styles.cardsContainer}>
        {/* Premier groupe : Carte 1 + Bouton 1 */}
        <div className={styles.offerItemWrapper}> {/* Nouveau wrapper */}
          <div className={styles.offerCard}>
            <h3 className={styles.cardTitle}>À partir de votre Business Facebook <br />
            Manager</h3>
            <ul className={styles.offerList}>
              <li>Mise en place d'une stratégie d'acquisition.</li>
              <li>Création des visuels des campagnes.</li>
              <li>Rédaction des textes publicitaires.</li>
              <li>Paramétrage des campagnes dans le business manager.</li>
              <li>Suivi et analyse des performances et optimisation.</li>
            </ul>
          </div>
         <Link 
            href="https://calendly.com/agylstudio1/30min" // URL Calendly mise à jour
            target="_blank" // Ouvre dans un nouvel onglet
            rel="noopener noreferrer" // Bonne pratique de sécurité
            className={styles.cardButton}
          >
            Prendre RDV
          </Link>
        </div>

        {/* Deuxième groupe : Carte 2 + Bouton 2 */}
        <div className={styles.offerItemWrapper}> {/* Nouveau wrapper */}
          <div className={styles.offerCard}>
            <h3 className={styles.cardTitle}>Lancement de vos campagnes de A à Z</h3>
            <ul className={styles.offerList}>
              <li>Mise en place d'une stratégie d'acquisition.</li>
              <li>Création de votre compte Facebook business manager.</li>
              <li>Création de votre page Facebook support.</li>
              <li>Création des visuels publicitaires.</li>
              <li>Rédaction des textes publicitaires.</li>
              <li>Paramétrage des campagnes dans le business manager.</li>
              <li>Suivi et analyse des performances.</li>
            </ul>
          </div>
          <Link 
            href="https://calendly.com/agylstudio1/30min" // URL Calendly mise à jour
            target="_blank" // Ouvre dans un nouvel onglet
            rel="noopener noreferrer" // Bonne pratique de sécurité
            className={styles.cardButton}
          >
            Prendre RDV
          </Link>
        </div>
      </div>

      {/* L'ancien conteneur de boutons (`buttonsContainer`) est maintenant supprimé */}
    </section>
  );
};

export default OffersSection;
