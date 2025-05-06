
import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="relative bg-orthodox-blue text-white">
      {/* Background video */}
      <div className="absolute inset-0 overflow-hidden">
        <video 
          className="absolute w-full h-full object-cover"
          autoPlay 
          loop 
          muted 
          playsInline
        >
          <source src="https://storage.googleapis.com/church-videos-samples/orthodox-church-candles.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>
      
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
            <Link to="/calendar" className="bg-white text-orthodox-blue hover:bg-opacity-90 px-6 py-2 rounded font-medium transition-colors">
              {t('services.schedule')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
