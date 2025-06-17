"use client"
// src/components/FAQSection.jsx
import React, { useState } from 'react';
import styles from '../styles/FAQSection.module.css'; // Importe le CSS Module

const faqItems = [
  {
    question: 'Les leads sont-ils vraiment qualifiés ?',
    answer: 'Oui. Grâce à des formulaires Facebook optimisés, nous filtrons les prospects en posant les bonnes questions. Vous recevez uniquement les contacts intéressés par votre service.',
  },
  {
    question: 'Que se passe-t-il si je ne reçois pas de leads ?',
    answer: 'Nous mettons en place des garanties pour assurer la livraison de leads. Si le volume attendu n\'est pas atteint, nous réajustons la campagne ou proposons des solutions alternatives.',
  },
  {
    question: 'Comment vais-je recevoir les leads ?',
    answer: 'Les leads vous sont envoyés en temps réel via l\'outil de votre choix (CRM, Google Sheet, email, etc.), prêts à être contactés par votre équipe commerciale.',
  },
  {
    question: 'Combien de temps faut-il pour commencer à recevoir des leads ?',
    answer: 'Après la configuration initiale de votre campagne (généralement 3-5 jours ouvrés), vous pouvez commencer à recevoir des leads dans les 24 à 48 heures.',
  },
  {
    question: 'Puis-je cibler une ville ou une région spécifique ?',
    answer: 'Oui, nos campagnes sont hautement personnalisables. Nous pouvons cibler des zones géographiques très précises en fonction de vos besoins et de votre zone d\'intervention.',
  },
  {
    question: 'Est-ce que je peux utiliser mes propres visuels ?',
    answer: 'Oui, vous avez la possibilité de fournir vos propres visuels et textes. Notre équipe les optimisera pour les meilleures performances possibles sur Facebook Ads.',
  },
];

const FAQSection = () => {
  // Gère l'état d'ouverture/fermeture pour les éléments interactifs de la FAQ
  // Commence à 1 car l'index 0 est statique
  const [openIndex, setOpenIndex] = useState(null); // Aucun élément ouvert par défaut pour les interactifs

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={styles.faqSection}>
      <h2 className={styles.sectionTitle}>FAQ</h2>

      <div className={styles.faqContainer}>
        {/* Premier élément FAQ - statique comme sur la maquette */}
        <div className={styles.faqItemStatic}>
          <h3 className={styles.faqQuestionStatic}>{faqItems[0].question}</h3>
          <p className={styles.faqAnswerStatic}>{faqItems[0].answer}</p>
        </div>

        {/* Reste des éléments FAQ - interactifs */}
        {faqItems.slice(1).map((item, index) => ( // Commence à partir du deuxième élément
          <div key={index + 1} className={styles.faqItem}> {/* index + 1 pour garder l'index correct relatif à faqItems */}
            <button
              className={`${styles.faqQuestion} ${openIndex === index + 1 ? styles.active : ''}`}
              onClick={() => toggleFAQ(index + 1)}
              aria-expanded={openIndex === index + 1}
            >
              <span>{item.question}</span>
              <span className={styles.toggleIcon}>{openIndex === index + 1 ? '-' : '+'}</span>
            </button>
            {openIndex === index + 1 && (
              <div className={styles.faqAnswer}>
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
