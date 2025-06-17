// src/components/OffersSection.jsx
import React from 'react';
import Link from 'next/link';
import styles from '../styles/OffersSection.module.css'; // Importe le CSS Module

const OffersSection = () => {
  return (
    <section className={styles.offersSection}>
      <h2 className={styles.sectionTitle}>Notre offre</h2>
      <p className={styles.sectionSubtitle}>
        On s'occupe de tout, vous recevez des leads prêts à convertir.
      </p>

      <div className={styles.cardsContainer}>
        {/* Première colonne d'offre : "À partir de votre Business Facebook Manager" */}
        <div className={styles.offerCard}>
          <h3 className={styles.cardTitle}>À partir de votre Business Facebook Manager</h3>
          <ul className={styles.offerList}>
            <li>Mise en place d'une stratégie d'acquisition.</li>
            <li>Création des visuels des campagnes.</li>
            <li>Rédaction des textes publicitaires.</li>
            <li>Paramétrage des campagnes dans le business manager.</li>
            <li>Suivi et analyse des performances et optimisation.</li>
          </ul>
          {/* Le bouton est déplacé en dehors de cette div */}
        </div>

        {/* Deuxième colonne d'offre : "Lancement de vos campagne de A à Z" */}
        <div className={styles.offerCard}>
          <h3 className={styles.cardTitle}>Lancement de vos campagnes de A à Z</h3>
          <ul className={styles.offerList}>
            <li>Mise en place d'une stratégie d'acquisition.</li>
            <li>Création de votre compte Facebook business manager.</li>
            <li>Création de votre page Facebook support.</li>
            <li>Création des visuels publicitaires.</li>
            <li>Rédaction des textes publicitaires.</li>
            <li>Paramétrage des campagnes dans le business manager</li>
            <li>Suivi et analyse des performances</li>
          </ul>
          {/* Le bouton est déplacé en dehors de cette div */}
        </div>
      </div>

      {/* Nouveau conteneur pour les boutons, en dehors des cartes */}
      <div className={styles.buttonsContainer}>
        <Link href="/prendre-rdv" className={styles.cardButton}>
          Prendre RDV
        </Link>
        <Link href="/prendre-rdv" className={styles.cardButton}>
          Prendre RDV
        </Link>
      </div>
    </section>
  );
};

export default OffersSection;
