// src/components/AdvantagesSection.jsx
import React from 'react';
import Image from 'next/image';
import styles from '../styles/AdvantagesSection.module.css'; // Importe le CSS Module

const advantages = [
  {
    icon: '/images/Group 1.png', // Chemin vers votre icône Chronomètre
    title: 'Frais & 100% exclusifs',
    description: 'Les leads reçus sont générés le jour même via nos campagnes d\'acquisition.',
  },
  {
    icon: '/images/Group 25.png', // Chemin vers votre icône Campagnes
    title: 'Campagnes sur mesure',
    description: 'Chaque client a sa propre campagne qui lui est dédiée, avec ses propres critères de ciblage.',
  },
  {
    icon: '/images/Group 21.png', // Chemin vers votre icône Géolocalisation
    title: 'Ciblage géographique',
    description: 'Nous ciblons vos leads en fonction de vos zones de chalandise (Région, département, ville).',
  },
  {
    icon: '/images/Group 23.png', // Chemin vers votre icône Analyse
    title: 'Suivi, analyse de performances et optimisation.',
    description: 'Nous surveillons chaque campagne en temps réel, ajustons les paramètres pour améliorer vos résultats et vous garantir un coût par lead optimisé.',
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
