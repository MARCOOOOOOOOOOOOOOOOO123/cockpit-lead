// src/components/AdvantagesSection.jsx
import React from 'react';
import Image from 'next/image';
import styles from '../styles/AdvantagesSection.module.css'; // Importe le CSS Module

const advantages = [
  {
    icon: '/images/Group 1.png', // Chemin vers votre icône Chronomètre
    title: 'Campagne efficace',
    description: 'Les leads reçus sont générés le jour même via nos campagnes d\'acquisition.',
  },
  {
    icon: '/images/Group 25.png', // Chemin vers votre icône Campagnes
    title: 'Campagnes sur mesure',
    description: 'Nous créons et gérons votre campagne Facebook sur mesure, adaptée à votre activité, votre cible et votre zone géographique.',
  },
  {
    icon: '/images/Group 21.png', // Chemin vers votre icône Géolocalisation
    title: 'Ciblage géographique',
    description: "Chaque lead Facebook est obtenu grâce à des campagnes ciblées et optimisées sur vos préférences en termes de zones géographiques, centres d'intérêt, ..."
  },
  {
    icon: '/images/Group 23.png', // Chemin vers votre icône Analyse
    title: 'Suivi, analyse de performances et optimisation.',
    description: "Notre méthode inclut la mise en place, le suivi et l'optimisation de chaque campagne Facebook Ads, avec des résultats mesurables."
  },
];

const AdvantagesSection = () => {
  return (
    <section className={styles.advantagesSection}>
      <h2 className={styles.sectionTitle}>
        NOUS GÉNÉRONS POUR VOUS DES LEADS QUALIFIÉS AFIN DE <br /> VOUS AIDER À OBTENIR DES RENDEZ-VOUS QUALIFIÉS, CONCLURE <br /> DES VENTES ET FAIRE CROÎTRE VOTRE ACTIVITÉ
      </h2>
      <div className={styles.gridContainer}>
        {advantages.map((advantage, index) => (
          <div key={index} className={styles.advantageCard}>
            <Image
              src={advantage.icon}
              alt={advantage.title}
              width={70} // Taille de l'icône, ajustez si nécessaire
              height={70}
              className={styles.advantageIcon}
            />
            <h3 className={styles.cardTitle}>{advantage.title}</h3>
            <p className={styles.cardDescription}>{advantage.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AdvantagesSection;
