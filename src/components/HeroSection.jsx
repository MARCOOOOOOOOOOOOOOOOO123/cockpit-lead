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
          GÉNÉREZ DES LEADS QUALIFIÉS GRÂCE <br />À NOS
          CAMPAGNES FACEBOOK ADS PERSONNALISÉES, CONÇUES
          POUR <br />CONVERTIR VOS PROSPECTS EN CLIENTS.
        </h1>

           <Link 
          href="https://calendly.com/agylstudio1/30min" // URL Calendly mise à jour avec l'email
          target="_blank" // Ouvre dans un nouvel onglet
          rel="noopener noreferrer" // Bonne pratique de sécurité
          className={styles.heroButton}
        >
          Prendre RDV
        </Link>
      </div>
      {/* Deuxième div : Conteneur de l'image à droite */}
      <div className={styles.imageContainer}>
        <Image
          src="/images/image banniere (1).png" // Assurez-vous que cette image est bien dans public/images/
          alt="Illustration de la génération de leads avec Facebook Ads"
          width={600} // Ajuste ces valeurs pour être responsive, basé sur le design
          height={600} // Ajuste ces valeurs pour être responsive, basé sur le design
          priority // Important pour l'image LCP de la page
          className={styles.heroImage}
        />
      </div>
    </section>
  );
};

export default HeroSection;
