
import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';

const DonationSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="bg-orthodox-blue text-white py-16">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-serif mb-6 text-orthodox-gold">
            {t('donate.title')}
          </h2>
          
          <p className="text-lg mb-8">
            {t('donate.text')}
          </p>
          
          <Link 
            to="/donate" 
            className="bg-orthodox-gold text-orthodox-blue hover:bg-opacity-90 px-8 py-3 rounded-md font-medium text-lg inline-block"
          >
            {t('donate.button')}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DonationSection;
