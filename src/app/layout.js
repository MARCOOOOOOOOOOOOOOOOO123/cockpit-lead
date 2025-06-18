// src/app/layout.js
import './globals.css'; // Importe les styles globaux
import Footer from '../components/Footer'; // Importe le composant Footer
import NavBar from '@/components/Navbar';

export const metadata = {
  title: 'Cockpit Leads App',
  description: 'Génération de leads qualifiés pour votre entreprise.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        
        {children} 
        
      </body>
    </html>
  );
}
