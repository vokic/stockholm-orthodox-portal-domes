
import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="relative bg-orthodox-blue text-white">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581337537305-9a16f3c3e2c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')] bg-cover bg-center opacity-20"></div>
      
      <div className="container-custom relative z-10 py-24 md:py-32 text-center">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-serif mb-2 text-orthodox-gold">
            {t('home.welcome')}
          </h2>
          <h1 className="text-3xl md:text-5xl font-bold font-serif mb-6 text-white">
            {t('home.church')}
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            {t('home.intro')}
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link to="/about" className="btn-secondary">
              {t('home.learnMore')}
            </Link>
            <Link to="/services" className="bg-white text-orthodox-blue hover:bg-opacity-90 px-6 py-2 rounded font-medium transition-colors">
              {t('services.schedule')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
