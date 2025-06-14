
import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="relative bg-orthodox-blue text-white">
      {/* Background image */}
      <div className="absolute inset-0 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1594822381845-2bbeaaa21ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2274&q=80"
          alt="Orthodox church interior"
          className="absolute w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>
      
      <div className="container-custom relative z-10 py-24 md:py-32 text-center">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-serif mb-2 text-orthodox-gold">
            {/* Use translated welcome or English fallback */}
            {t('home.welcome', 'Welcome to Saint Sava Church')}
          </h2>
          <h1 className="text-3xl md:text-5xl font-bold font-serif mb-6 text-white">
            {/* Use translated full name or fallback English */}
            {t('home.churchFullName', 'Serbian Orthodox Church of Saint Sava in Stockholm')}
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            {/* Use intro blurb or fallback */}
            {t('home.intro', 'Experience the beauty of Orthodox tradition and join our vibrant church community in the heart of Stockholm.')}
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link to="/about" className="btn-secondary">
              {t('home.learnMore', 'Learn more')}
            </Link>
            <Link to="/calendar" className="bg-white text-orthodox-blue hover:bg-opacity-90 px-6 py-2 rounded font-medium transition-colors">
              {t('services.schedule', 'View Service Schedule')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
