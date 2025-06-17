// src/components/HeroSection.jsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link'; // Import Link for the button
import styles from '../styles/HeroSection.module.css'; // Import the CSS Module

const HeroSection = () => {
  return (
    <section className={styles.heroSection}>
      {/* Première div : Conteneur du texte et du bouton à gauche */}
      <div className={styles.contentContainer}> {/* Ajout de la classe manquante */}
        <h1 className={styles.heroTitle}>
          Transformez vos clics en clients
        </h1>
        <h1 className={styles.heroTitle}>
          avec nos campagnes Facebook
        </h1>
        <h1 className={styles.heroTitle}>
          Ads sur-mesure
        </h1>
        
        <p className={styles.heroSubtitle}>
          Des campagnes Facebook ciblées, des leads qualifiés livrés prêts à convertir.
        </p>
        <Link href="/prendre-rdv" className={styles.heroButton}>
          Prendre RDV
        </Link>
      </div>
      {/* Deuxième div : Conteneur de l'image à droite */}
      <div className={styles.imageContainer}>
        <Image
          src="/images/image_banniere.png" // Assure-toi que cette image est dans public/images/
          alt="Illustration de la génération de leads avec Facebook Ads"
          width={400} // Ajuste ces valeurs pour être responsive, basé sur le design
          height={600} // Ajuste ces valeurs pour être responsive, basé sur le design
          priority // Important pour l'image LCP de la page
          className={styles.heroImage}
        />
      </div>
    </section>
  );
};

export default HeroSection;
