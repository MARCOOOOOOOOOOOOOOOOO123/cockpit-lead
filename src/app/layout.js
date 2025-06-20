// src/app/layout.js
import './globals.css'; // Importe les styles globaux
import Footer from '../components/Footer'; // Importe le composant Footer
import NavBar from '@/components/Navbar';
// Importez la police Inter si vous utilisez next/font/google ou assurez-vous qu'elle est dans globals.css

export const metadata = {
  title: 'Génération de Leads Qualifiés avec Facebook Ads | Campagnes Sur-Mesure', // Titre du site mis à jour
  description: 'Génération de leads qualifiés pour votre entreprise avec des campagnes Facebook Ads personnalisées.', // Description du site
  images: [ // Image pour les métadonnées de partage (Open Graph)
    {
      url: '/images/Banniere_Principale.png', // Chemin vers votre image de bannière
      width: 1200, // Largeur recommandée pour les images Open Graph
      height: 630, // Hauteur recommandée pour les images Open Graph
      alt: 'Génération de Leads Qualifiés', // Texte alternatif pour l'image
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <NavBar /> {/* Le NavBar sera visible sur toutes les pages*/}
        {children} {/* C'est ici que tout le contenu de vos pages sera rendu */}
        <Footer /> {/* Le Footer sera visible sur toutes les pages */}
      </body>
    </html>
  );
}
