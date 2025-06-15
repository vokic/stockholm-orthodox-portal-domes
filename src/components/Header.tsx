
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage, Language } from '../context/LanguageContext';
import { Menu, Facebook, Instagram } from 'lucide-react';
import { Button } from './ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import SerbianCross from './SerbianCross';

const Header: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const languages = [
    { code: 'en', label: t('lang.english') || 'English' },
    { code: 'sv', label: t('lang.swedish') || 'Svenska' },
    { code: 'sr_lat', label: t('lang.serbian_lat') || 'Srpski (latinica)' },
    { code: 'sr_cyr', label: t('lang.serbian_cyr') || 'Српски (ћирилица)' },
    { code: 'ru', label: t('lang.russian') || 'Русский' },
    { code: 'el', label: t('lang.greek') || 'Ελληνικά' },
    { code: 'mk', label: t('lang.macedonian') || 'Македонски' },
  ];

  const isActiveLink = (path: string) => location.pathname === path;

  const getNavLinkClasses = (path: string) => {
    const baseClasses = "transition-all duration-200 text-white hover:text-orthodox-gold";
    return isActiveLink(path) 
      ? `${baseClasses} text-orthodox-gold border-b-2 border-orthodox-gold font-semibold`
      : baseClasses;
  };

  return (
    <header className="bg-orthodox-blue shadow-sm sticky top-0 z-50 border-b border-orthodox-gold">
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <div className="text-orthodox-gold text-3xl mr-3">
              <SerbianCross size={28} className="text-orthodox-gold" />
            </div>
            <h1 className="text-xl font-serif font-bold text-white">
              {t('home.churchFullName')}
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-6 items-center">
            <Link to="/" className={getNavLinkClasses('/')}>{t('nav.home')}</Link>
            <Link to="/about" className={getNavLinkClasses('/about')}>{t('nav.aboutUs')}</Link>
            <Link to="/calendar" className={getNavLinkClasses('/calendar')}>{t('nav.calendar')}</Link>
            <Link to="/articles" className={getNavLinkClasses('/articles')}>{t('nav.articles')}</Link>
            <Link to="/contact" className={getNavLinkClasses('/contact')}>{t('nav.contact')}</Link>
            <Link to="/donate" className="bg-orthodox-gold text-orthodox-blue hover:bg-opacity-90 px-6 py-2 rounded font-medium transition-colors">{t('nav.donate')}</Link>

            <div className="flex items-center gap-2 ml-2">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-orthodox-gold">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-orthodox-gold">
                <Instagram size={20} />
              </a>
            </div>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="ml-2 bg-white text-orthodox-blue border-white hover:bg-orthodox-gold hover:text-orthodox-blue">
                  {language.toUpperCase()}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => setLanguage(lang.code as Language)}
                    className={language === lang.code ? "font-bold" : ""}
                  >
                    {lang.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>

          {/* Mobile Menu */}
          <div className="md:hidden flex items-center gap-2">
            <div className="flex items-center gap-2 mr-2">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-orthodox-gold">
                <Facebook size={18} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-orthodox-gold">
                <Instagram size={18} />
              </a>
            </div>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="bg-white text-orthodox-blue border-white hover:bg-orthodox-gold hover:text-orthodox-blue">
                  {language.toUpperCase()}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => setLanguage(lang.code as Language)}
                    className={language === lang.code ? "font-bold" : ""}
                  >
                    {lang.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white hover:text-orthodox-gold hover:bg-orthodox-blue/20">
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 flex flex-col gap-4 animate-fade-in">
            <Link to="/" className={`${getNavLinkClasses('/')} text-lg`} onClick={() => setIsMenuOpen(false)}>{t('nav.home')}</Link>
            <Link to="/about" className={`${getNavLinkClasses('/about')} text-lg`} onClick={() => setIsMenuOpen(false)}>{t('nav.aboutUs')}</Link>
            <Link to="/calendar" className={`${getNavLinkClasses('/calendar')} text-lg`} onClick={() => setIsMenuOpen(false)}>{t('nav.calendar')}</Link>
            <Link to="/articles" className={`${getNavLinkClasses('/articles')} text-lg`} onClick={() => setIsMenuOpen(false)}>{t('nav.articles')}</Link>
            <Link to="/contact" className={`${getNavLinkClasses('/contact')} text-lg`} onClick={() => setIsMenuStore(false)}>{t('nav.contact')}</Link>
            <Link to="/donate" className="bg-orthodox-gold text-orthodox-blue hover:bg-opacity-90 px-6 py-2 rounded font-medium transition-colors text-center text-lg" onClick={() => setIsMenuOpen(false)}>{t('nav.donate')}</Link>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
