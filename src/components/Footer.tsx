
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
  const [showHolidayPopup, setShowHolidayPopup] = useState(false);

  const [upcomingEvent, setUpcomingEvent] = useState<Event | null>(null);
  const [eventsLoading, setEventsLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    fetchEvents().then((events) => {
      if (!mounted) return;
      const today = new Date();
      const thirtyDaysFromNow = new Date();
      thirtyDaysFromNow.setDate(today.getDate() + 30);

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

  const handlePopupOpen = () => {
    setShowHolidayPopup(true);
  };

  return (
    <footer className="bg-orthodox-blue text-white pt-10 pb-4">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Us */}
          <div>
            <h3 className="text-xl font-serif mb-4 text-orthodox-gold">{t('footer.aboutUs', t('nav.aboutUs'))}</h3>
            <p className="mb-4">
              {t('footer.description')}
            </p>
            <div className="text-orthodox-gold text-3xl">
              <SerbianCross size={32} className="text-orthodox-gold" />
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-serif mb-4 text-orthodox-gold">{t('footer.services')}</h3>
            <ul className="space-y-2">
              <li>
                {t('footer.sundayLiturgy') || (
                  <>
                    {t('services.sunday')}: {t('services.sundayTime')}
                  </>
                )}
              </li>
              <li>
                {t('footer.saturdayVespers') || (
                  <>
                    {t('services.saturday')}: {t('services.saturdayTime')}
                  </>
                )}
              </li>
              <li>
                <Link to="/calendar" className="text-orthodox-gold hover:underline">
                  {t('footer.calendarLink', t('services.calendar'))} &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-serif mb-4 text-orthodox-gold">{t('footer.contact')}</h3>
            <ul className="space-y-2">
              <li>
                <strong>{t('footer.address')}:</strong>{" "}
                {t('footer.addressValue')}
              </li>
              <li>
                <strong>{t('footer.phone')}:</strong>{" "}
                {t('footer.phoneValue')}
              </li>
              <li>
                <strong>{t('footer.email')}:</strong>{" "}
                {t('footer.emailValue')}
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-4 text-sm text-gray-300 text-center">
          <p className="flex items-center justify-center gap-1">
            &copy; {currentYear} {t('footer.copyright')} {t('footer.rights')}.
            <a
              href="https://be.contentful.com/login"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-orthodox-gold transition-colors"
              aria-label={t('footer.editContent')}
            >
              <Pencil size={14} />
            </a>
            <button
              onClick={handlePopupOpen}
              className="text-gray-300 hover:text-orthodox-gold transition-colors ml-1"
              aria-label={t('footer.holidayPopupOpenLabel')}
              disabled={eventsLoading || !upcomingEvent}
              style={{
                cursor: eventsLoading || !upcomingEvent ? 'not-allowed' : 'pointer',
                opacity: eventsLoading || !upcomingEvent ? 0.5 : 1,
              }}
            >
              <Info size={14} />
            </button>
          </p>
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
