
import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';
import { Pencil, Info } from 'lucide-react';
import SerbianCross from './SerbianCross';
import HolidayPopup from './HolidayPopup';
import { fetchEvents, Event } from '../services/eventService';

interface FooterProps {
  onHolidayPopupOpen?: () => void;
}

const Footer: React.FC<FooterProps> = ({ onHolidayPopupOpen }) => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();
  // State for local popup
  const [showHolidayPopup, setShowHolidayPopup] = useState(false);

  // --- New state for upcoming event from calendar ---
  const [upcomingEvent, setUpcomingEvent] = useState<Event | null>(null);
  const [eventsLoading, setEventsLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    // Fetch events and find the first upcoming within next 30 days
    fetchEvents().then((events) => {
      if (!mounted) return;
      const today = new Date();
      const thirtyDaysFromNow = new Date();
      thirtyDaysFromNow.setDate(today.getDate() + 30);

      // Find the first upcoming event within 30 days
      const nextEvent = events
        .filter(event => {
          if (!event.date) return false;
          const eventDate = new Date(event.date);
          return eventDate >= today && eventDate <= thirtyDaysFromNow;
        })
        .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())[0];

      setUpcomingEvent(nextEvent || null);
      setEventsLoading(false);
    }).catch((error) => {
      console.error('Error loading upcoming event for footer popup:', error);
      if (mounted) setEventsLoading(false);
    });

    return () => { mounted = false; };
  }, []);

  // Handler for opening the popup (always available in the footer, all pages)
  const handlePopupOpen = () => {
    setShowHolidayPopup(true);
  };

  return (
    <footer className="bg-orthodox-blue text-white pt-10 pb-4">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-serif mb-4 text-orthodox-gold">{t('nav.about')}</h3>
            <p className="mb-4">
              {t('footer.description')}
            </p>
            <div className="text-orthodox-gold text-3xl">
              <SerbianCross size={32} className="text-orthodox-gold" />
            </div>
          </div>

          <div>
            <h3 className="text-xl font-serif mb-4 text-orthodox-gold">{t('nav.services')}</h3>
            <ul className="space-y-2">
              <li>{t('services.sunday')}: 10:00</li>
              <li>{t('services.vespers')}: 18:00</li>
              <li>
                <Link to="/services" className="text-orthodox-gold hover:underline">
                  {t('services.calendar')} →
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-serif mb-4 text-orthodox-gold">{t('nav.contact')}</h3>
            <ul className="space-y-2">
              <li>
                <strong>{t('footer.address')}:</strong> {t('footer.addressValue')}
              </li>
              <li>
                <strong>{t('footer.phone')}:</strong> {t('footer.phoneValue')}
              </li>
              <li>
                <strong>{t('footer.email')}:</strong> {t('footer.emailValue')}
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-4 text-sm text-gray-300 text-center">
          <p className="flex items-center justify-center gap-1">
            © {currentYear} {t('footer.copyright')} {t('footer.rights')}.
            <a 
              href="https://be.contentful.com/login" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-orthodox-gold transition-colors"
            >
              <Pencil size={14} />
            </a>
            <button
              onClick={handlePopupOpen}
              className="text-gray-300 hover:text-orthodox-gold transition-colors ml-1"
              aria-label="Open next upcoming holiday popup"
              disabled={eventsLoading || !upcomingEvent}
              style={{ cursor: eventsLoading || !upcomingEvent ? 'not-allowed' : 'pointer', opacity: eventsLoading || !upcomingEvent ? 0.5 : 1 }}
            >
              <Info size={14} />
            </button>
          </p>
          {/* Always render HolidayPopup for test/manual use, only if real next event exists */}
          {showHolidayPopup && upcomingEvent && (
            <HolidayPopup
              open={showHolidayPopup}
              onOpenChange={setShowHolidayPopup}
              event={upcomingEvent}
            />
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

