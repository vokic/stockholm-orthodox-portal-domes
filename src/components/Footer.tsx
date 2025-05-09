import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';

const Footer: React.FC = () => {
  const { t, currentLanguage, changeLanguage } = useLanguage();

  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    changeLanguage(event.target.value);
  };

  return (
    <footer className="bg-gray-100 py-12">
      <div className="container-custom grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* First Section - Logo and Description */}
        <div className="mb-6 md:mb-0">
          <div className="mb-4">
            <Link to="/" className="flex items-center">
              <img src={logo} alt="Church Logo" className="h-12 mr-3" />
              <span className="font-semibold text-xl text-orthodox-blue">
                {t('siteName')}
              </span>
            </Link>
          </div>
          <p className="text-gray-600 text-sm">
            {t('footer.aboutUs')}
          </p>
        </div>

        {/* Second Section - Quick Links */}
        <div>
          <h4 className="font-semibold text-gray-700 mb-4">{t('footer.quickLinks')}</h4>
          <ul className="text-gray-600">
            <li className="mb-2">
              <Link to="/about" className="hover:text-orthodox-blue transition-colors">
                {t('aboutUs')}
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/services" className="hover:text-orthodox-blue transition-colors">
                {t('services')}
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/blog" className="hover:text-orthodox-blue transition-colors">
                {t('blog')}
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-orthodox-blue transition-colors">
                {t('contactUs')}
              </Link>
            </li>
          </ul>
        </div>

        {/* Third Section - Contact Information */}
        <div>
          <h4 className="font-semibold text-gray-700 mb-4">{t('footer.contact')}</h4>
          <p className="text-gray-600 text-sm mb-2">{t('home.location')}</p>
          <p className="text-gray-600 text-sm mb-2">{t('home.phone')}</p>
          <p className="text-gray-600 text-sm">{t('home.email')}</p>
        </div>
      </div>

      {/* Bottom Bar - Copyright and Language Selection */}
      <div className="container-custom mt-8 flex flex-col md:flex-row items-center justify-between">
        <p className="text-gray-500 text-xs mb-2 md:mb-0">
          &copy; {new Date().getFullYear()} {t('siteName')}. {t('footer.rightsReserved')}
        </p>
        <div>
          <select
            value={currentLanguage}
            onChange={handleLanguageChange}
            className="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-orthodox-blue focus:border-orthodox-blue block w-full p-2.5"
          >
            <option value="en">English</option>
            <option value="sr">Српски</option>
          </select>
        </div>
      </div>
       {/* Add admin link */}
       <div className="text-xs mt-4">
         <Link to="/admin" className="text-gray-500 hover:text-gray-700">Admin</Link>
       </div>
    </footer>
  );
};

export default Footer;
