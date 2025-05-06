
import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-orthodox-blue text-white pt-10 pb-4">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-serif mb-4 text-orthodox-gold">{t('nav.about')}</h3>
            <p className="mb-4">
              Orthodox Church in Stockholm serves the spiritual needs of the Orthodox faithful in Stockholm and surrounding areas.
            </p>
            <div className="text-orthodox-gold text-3xl">☦</div>
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
                <strong>{t('footer.address')}:</strong> Birger Jarlsgatan 98, 114 20 Stockholm
              </li>
              <li>
                <strong>{t('footer.phone')}:</strong> +46 8 123 456 78
              </li>
              <li>
                <strong>{t('footer.email')}:</strong> info@orthodoxstockholm.se
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-4 text-sm text-gray-300 text-center">
          <p>© {currentYear} Orthodox Church in Stockholm. {t('footer.rights')}.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
