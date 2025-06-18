// src/components/HeroSection.jsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link'; // Import Link for the button
import styles from '../styles/HeroSection.module.css'; // Import the CSS Module

const HeroSection = () => {
  return (
    <section className={styles.heroSection}>
      {/* Première div : Conteneur du texte et du bouton à gauche */}
      <div className={styles.contentContainer}>
        <h1 className={styles.heroTitle}>
          Transformez vos clics en clients <br />
          avec nos campagnes Facebook <br />
          Ads sur-mesure
        </h1>
        
        <p className={styles.heroSubtitle}>
          Des campagnes Facebook ciblées, des leads qualifiés livrés <br /> 
          prêts à convertir.
        </p>
        <Link href="/prendre-rdv" className={styles.heroButton}>
          Prendre RDV
        </Link>
      </div>
      {/* Deuxième div : Conteneur de l'image à droite */}
      <div className={styles.imageContainer}>
        <Image
          src="/images/image banniere (1).png" // Assurez-vous que cette image est bien dans public/images/
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
