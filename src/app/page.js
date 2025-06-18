// src/app/page.js
import NavBar from '@/components/Navbar';
import homeStyles from '../styles/Home.module.css';
import HeroSection from '../components/HeroSection';
import OffersSection from '../components/OffersSection';
import SectorsSection from '../components/SectorsSection';
import ContactSection from '../components/ContactSection';
import FAQSection from '../components/FAQSection'; // Importe le composant FAQSection
import Footer from '@/components/Footer';


export default function Home() {
  return (
    <div className={homeStyles.pageContainer}>
      <NavBar /> {/* La barre de navigation*/ }
      <HeroSection /> {/* La section Hero */}
      <OffersSection /> {/* La section "Notre offre" */}
      <SectorsSection /> {/* La section "Secteurs" */}
      <ContactSection /> {/* La section "Contactez-nous" */}
      <FAQSection /> {/* La nouvelle section "FAQ" */}
      <Footer /> {/* La section Footer */}
      

      
    </div>
  );
}
