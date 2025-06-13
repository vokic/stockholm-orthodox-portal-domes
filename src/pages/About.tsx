
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useLanguage } from '../context/LanguageContext';
import AboutGallery from '../components/about/AboutGallery';
import AboutHistory from '../components/about/AboutHistory';
import AboutSvetiSava from '../components/about/AboutSvetiSava';
import AboutPriests from '../components/about/AboutPriests';
import AboutLocationHours from '../components/about/AboutLocationHours';
import AboutCommunity from '../components/about/AboutCommunity';

const AboutPage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-orthodox-blue text-white py-16">
          <div className="container-custom">
            <h1 className="text-3xl md:text-4xl font-bold font-serif mb-4 text-orthodox-gold">
              {t('about.title')}
            </h1>
          </div>
        </div>
        
        {/* Gallery Section */}
        <AboutGallery />

        {/* History Section */}
        <AboutHistory />
        
        {/* Sveti Sava Section */}
        <AboutSvetiSava />
        
        {/* Our Priests Section */}
        <AboutPriests />
        
        {/* Location and Working Hours Section */}
        <AboutLocationHours />
        
        {/* Our Community Section */}
        <AboutCommunity />
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutPage;
