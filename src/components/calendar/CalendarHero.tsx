import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Info } from 'lucide-react';
import HolidayPopup from '../HolidayPopup';
import { fetchEvents, Event } from '../../services/eventService';

const CalendarHero: React.FC = () => {
  const { t } = useLanguage();
  const [showPopup, setShowPopup] = useState(false);
  const [upcomingEvent, setUpcomingEvent] = useState<Event | null>(null);

  useEffect(() => {
    let mounted = true;
    
    fetchEvents().then((events) => {
      if (mounted) {
        const today = new Date();
        const thirtyDaysFromNow = new Date();
        thirtyDaysFromNow.setDate(today.getDate() + 30);
        
        // Find the first upcoming event within the next 30 days
        const nextEvent = events
          .filter(event => {
            if (!event.date) return false;
            const eventDate = new Date(event.date);
            return eventDate >= today && eventDate <= thirtyDaysFromNow;
          })
          .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())[0];
        
        setUpcomingEvent(nextEvent || null);
      }
    }).catch((error) => {
      console.error('Error loading events for calendar hero:', error);
    });
    
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <div className="bg-orthodox-blue text-white py-12">
      <div className="container-custom">
        <div className="flex items-center gap-2 mb-4">
          <h1 className="text-3xl md:text-4xl font-bold font-serif text-orthodox-gold">
            {t('calendar.title')}
          </h1>
        </div>
        <p className="text-white">
          Stay informed about our services, events, and celebrations.
        </p>
      </div>
      {upcomingEvent && (
        <HolidayPopup 
          event={upcomingEvent}
          open={showPopup}
          onOpenChange={setShowPopup}
        />
      )}
    </div>
  );
};

export default CalendarHero;
