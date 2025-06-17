// src/components/NavBar.jsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/NavBar.module.css'; // Importe le CSS Module

const NavBar = () => {
  return (
    <nav className={styles.navBar}>
      {/* Logo */}
      <div className={styles.logoContainer}>
        <Link href="/"> {/* Le logo est souvent un lien vers la page d'accueil */}
          <Image
            href="/"
            src="/images/logo.png" // Assure-toi que ton logo est bien dans public/images/
            alt="Cockpit Leads Logo"
            width={76} // EXIGENCE 1: Largeur du logo à 76px
            height={76} // EXIGENCE 1: Hauteur du logo à 76px
            priority
          />
        </Link>
      </div>

      {/* Liens de navigation */}
      <div className={styles.navLinks}>
        {/* J'ai ajouté une classe spécifique navLinkItem pour appliquer les styles des liens */}
        <Link href="/" className={styles.navLinkItem}>
          Accueil
        </Link>
        <Link href="/nos-offres" className={styles.navLinkItem}>
          Nos offres
        </Link>
        <Link href="/tarifs" className={styles.navLinkItem}>
          Tarifs
        </Link>
        <Link href="/a-propos" className={styles.navLinkItem}>
          A propos
        </Link>
      </div>

      {/* Menu burger pour mobile */}
      <button className={styles.burgerMenu}>
        <svg className={styles.burgerIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>
    </nav>
  );
};

export default NavBar;
