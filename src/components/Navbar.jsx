"use client"
// src/components/NavBar.jsx
import React, { useState } from 'react'; // Importe useState
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/NavBar.module.css'; // Importe le CSS Module

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // État pour gérer l'ouverture du menu mobile

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={styles.navBar}>
      {/* Logo */}
      <div className={styles.logoContainer}>
        <Link href="/">
          <Image
            src="/images/logo.png" // Assure-toi que ton logo est bien dans public/images/
            alt="Cockpit Leads Logo"
            width={76}
            height={76}
            priority
          />
        </Link>
      </div>

      {/* Liens de navigation (Desktop) */}
      <div className={styles.navLinks}>
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
          À propos
        </Link>
      </div>

      {/* Menu burger pour mobile */}
      <button className={styles.burgerMenu} onClick={toggleMenu} aria-label="Toggle mobile menu">
        <svg className={styles.burgerIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
</svg>
      </button>

      {/* Menu mobile (overlay) - Rendu conditionnel */}
      {isMenuOpen && (
        <div className={styles.mobileMenuOverlay}>
          <button className={styles.closeMenuButton} onClick={toggleMenu} aria-label="Close mobile menu">
            &times; {/* Symbole "x" pour fermer */}
          </button>
          <div className={styles.mobileMenuLinks}>
            <Link href="/" className={styles.mobileLinkItem} onClick={toggleMenu}>
              Accueil
            </Link>
            <Link href="/nos-offres" className={styles.mobileLinkItem} onClick={toggleMenu}>
              Nos offres
            </Link>
            <Link href="/tarifs" className={styles.mobileLinkItem} onClick={toggleMenu}>
              Tarifs
            </Link>
            <Link href="/a-propos" className={styles.mobileLinkItem} onClick={toggleMenu}>
              À propos
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
