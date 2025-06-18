// src/components/Footer.jsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Footer.module.css'; // Importe le CSS Module

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        {/* Colonne 1: Logo, Infos Contact, Bouton */}
        <div className={styles.col1}>
          <div className={styles.logoContainer}>
            <Image
              src="/images/logo.png" // Assure-toi que ton logo CL est ici
              alt="Cockpit Leads Logo"
              width={60}
              height={60}
            />
            <span className={styles.logoText}>COCKPIT LEAD</span>
          </div>
          <div className={styles.contactInfo}>
            <p className={styles.contactItem}>
              <Image src="/images/Vector.png" alt="Location icon" width={16} height={16} />
              Lorem ipsum 24100 lorem
            </p>
            <p className={styles.contactItem}>
              <Image src="/images/Vector (1).png" alt="Phone icon" width={16} height={16} />
              0685421563
            </p>
          </div>
          <Link href="/prendre-rdv" className={styles.footerButton}>
            Prendre RDV
          </Link>
        </div>

        {/* Colonne 2: Liens de navigation */}
        <div className={styles.col2}>
          <ul className={styles.navLinks}>
            <li><Link href="/" className={styles.footerLink}>Accueil</Link></li>
            <li><Link href="/nos-offres" className={styles.footerLink}>Nos offres</Link></li>
            <li><Link href="/secteurs-activite" className={styles.footerLink}>Secteurs d'activité</Link></li>
            <li><Link href="/a-propos" className={styles.footerLink}>À Propos</Link></li>
            <li><Link href="/politiques" className={styles.footerLink}>Politique de confidentialité</Link></li>
            <li><Link href="/politiques" className={styles.footerLink}>Mentions légales</Link></li>
          </ul>
        </div>

        {/* Colonne 3: Suivez-nous sur */}
        <div className={styles.col3}>
          <h4 className={styles.followUsTitle}>Suivez-nous sur :</h4>
          <div className={styles.socialIcons}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <Image src="/images/Vector (2).png" alt="Facebook icon" width={24} height={24} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <Image src="/images/Page-1.png" alt="Instagram icon" width={24} height={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Ligne inférieure: Mots-clés des leads */}
      <div className={styles.bottomRow}>
        <span className={styles.keyword}>Lead photovoltaïque</span>
        <span className={styles.keyword}>Lead pompe à chaleur</span>
        <span className={styles.keyword}>Lead rénovation globale</span>
        <span className={styles.keyword}>Lead nettoyage toiture</span>
        <span className={styles.keyword}>Lead isolation</span>
        <span className={styles.keyword}>Lead assurance</span>
        <span className={styles.keyword}>Lead chaudière à granulé</span>
        <span className={styles.keyword}>Lead crédit et rachat de crédit</span>
      </div>
    </footer>
  );
};

export default Footer;
