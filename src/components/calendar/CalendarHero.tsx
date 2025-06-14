
import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

const CalendarHero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="bg-orthodox-blue text-white py-16">
      <div className="container-custom">
        <h1 className="text-3xl md:text-4xl font-bold font-serif mb-4 text-orthodox-gold">
          {t('calendar.title')}
        </h1>
        <p className="text-white">
          Stay informed about our services, events, and celebrations.
        </p>
      </div>
    </div>
  );
};

export default CalendarHero;
