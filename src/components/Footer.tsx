
import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';
import { Pencil, Info } from 'lucide-react';
import SerbianCross from './SerbianCross';

interface FooterProps {
  onHolidayPopupOpen?: () => void;
}

const Footer: React.FC<FooterProps> = ({ onHolidayPopupOpen }) => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

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
            {onHolidayPopupOpen && (
              <button
                onClick={onHolidayPopupOpen}
                className="text-gray-300 hover:text-orthodox-gold transition-colors ml-1"
                aria-label="Test holiday popup"
              >
                <Info size={14} />
              </button>
            )}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
