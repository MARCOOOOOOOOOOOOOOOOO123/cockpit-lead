// src/components/Footer.jsx
import React from 'react';
import Image from 'next/image';
import styles from '../styles/Footer.module.css'; // Importe le CSS Module

const Footer = () => {
  return (
    <footer className={styles.footer}> {/* Applique la classe CSS Module */}
      <a
        className={styles.footerLink}
        href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          aria-hidden
          src="/images/file.svg" // Chemin vers ton icône dans public/images/
          alt="File icon"
          width={16}
          height={16}
        />
        Learn
      </a>
      <a
        className={styles.footerLink}
        href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          aria-hidden
          src="/images/window.svg" // Chemin vers ton icône dans public/images/
          alt="Window icon"
          width={16}
          height={16}
        />
        Examples
      </a>
      <a
        className={styles.footerLink}
        href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          aria-hidden
          src="/images/globe.svg" // Chemin vers ton icône dans public/images/
          alt="Globe icon"
          width={16}
          height={16}
        />
        Go to nextjs.org →
      </a>
    </footer>
  );
};

export default Footer;