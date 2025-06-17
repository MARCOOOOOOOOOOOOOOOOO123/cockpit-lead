// src/components/SectorsSection.jsx
import React from 'react';
import Image from 'next/image';
import styles from '../styles/SectorsSection.module.css'; // Importe le CSS Module

const sectors = [
  { name: 'Photovoltaique', image: '/images/Frame 1.png' },
  { name: 'Rénovation globale', image: '/images/Frame 3.png' },
  { name: 'Assurance', image: '/images/Group (1).png' },
  { name: 'Isolation', image: '/images/31206414_7790126 1.png' },
  { name: 'Pompes à chaleur', image: '/images/Group (2).png' },
  { name: 'Nettoyage toiture', image: '/images/38687001_8670528 1.png' },
  { name: 'Crédit et rachat de crédit', image: '/images/Frame 2.png' },
  { name: 'Chaudière à granulé', image: '/images/22880350_6686048 1 (1).png' },
];

const SectorsSection = () => {
  return (
    <section className={styles.sectorsSection}>
      <h2 className={styles.sectionTitle}>Nous générons vos leads sur les secteurs suivants :</h2>
      <div className={styles.gridContainer}>
        {sectors.map((sector, index) => (
          <div key={index} className={styles.sectorCard}>
            <Image
              src={sector.image}
              alt={sector.name}
              width={150} // Ajuste la taille de l'image si nécessaire
              height={150}
              className={styles.sectorImage}
            />
            <p className={styles.sectorName}>{sector.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SectorsSection;
