
import { useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { fetchEvents, Event } from '../services/eventService';

export const useCalendarData = () => {
  const { language } = useLanguage();
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    let mounted = true;
    
    fetchEvents().then((data) => {
      if (mounted) {
        console.log('Fetched events:', data);
        
        // Sort all events by date (oldest first)
        const sortedEvents = (data || []).sort((a, b) => {
          if (!a.date && !b.date) return 0;
          if (!a.date) return 1;
          if (!b.date) return -1;
          return new Date(a.date).getTime() - new Date(b.date).getTime();
        });
        
        setEvents(sortedEvents);
        setLoading(false);
      }
    }).catch((error) => {
      console.error('Error loading events:', error);
      if (mounted) {
        setLoading(false);
      }
    });
    
    return () => { mounted = false; };
  }, []);

  // Function to format date based on current language
  const formatDate = (dateString: string) => {
    if (!dateString) return 'Date TBD';
    const date = new Date(dateString);
    const isSerbian = language === 'sr_cyr' || language === 'sr_lat';
    const locale = isSerbian ? 'sr-RS' : 'en-US';

    return date.toLocaleDateString(locale, {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Function to format month/year header based on current language
  const formatMonthYear = (dateString: string) => {
    if (!dateString) return 'Date TBD';
    const date = new Date(dateString);
    const isSerbian = language === 'sr_cyr' || language === 'sr_lat';
    const locale = isSerbian ? 'sr-RS' : 'en-US';

    return date.toLocaleDateString(locale, {
      year: 'numeric',
      month: 'long'
    });
  };

  // Filter events based on view and past events toggle
  const getFilteredEvents = (view: 'all' | 'service' | 'event' | 'slava', showPastEvents: boolean) => {
    let filtered = view === 'all' ? events : events.filter(event => event.type === view);
    
    if (!showPastEvents) {
      const today = new Date();
      const currentMonth = new Date(today.getFullYear(), today.getMonth(), 1);
      
      filtered = filtered.filter(event => {
        if (!event.date) return false;
        const eventDate = new Date(event.date);
        return eventDate >= currentMonth;
      });
    }
    
    return filtered;
  };

  return {
    events,
    loading,
    formatDate,
    formatMonthYear,
    getFilteredEvents
  };
};
