
import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Info } from 'lucide-react';
import HolidayPopup from '../HolidayPopup';

const CalendarHero: React.FC = () => {
  const { t } = useLanguage();
  const [showPopup, setShowPopup] = useState(false);

  const holidayService = {
    title: "Christmas Divine Liturgy",
    date: "January 7, 2025",
    time: "10:00 AM",
    description: "Join us for the celebration of Christmas according to the Julian calendar with Divine Liturgy followed by fellowship."
  };

  return (
    <div className="bg-orthodox-blue text-white py-12">
      <div className="container-custom">
        <div className="flex items-center gap-2 mb-4">
          <h1 className="text-3xl md:text-4xl font-bold font-serif text-orthodox-gold">
            {t('calendar.title')}
          </h1>
          <button
            onClick={() => setShowPopup(true)}
            className="text-orthodox-gold hover:text-white transition-colors"
            aria-label="View upcoming holiday service"
          >
            <Info size={20} />
          </button>
        </div>
        <p className="text-white">
          Stay informed about our services, events, and celebrations.
        </p>
      </div>
      
      <HolidayPopup 
        holidayService={holidayService}
        open={showPopup}
        onOpenChange={setShowPopup}
      />
    </div>
  );
};

export default CalendarHero;
