
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
import { useScrollBehavior } from '../hooks/useScrollBehavior';

const Header: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { showNavbar } = useScrollBehavior();

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
    <header className={`
      bg-orthodox-blue shadow-sm sticky top-0 z-50 border-b border-orthodox-gold
      transition-transform duration-300 ease-in-out
      ${showNavbar ? 'translate-y-0' : '-translate-y-full'}
    `}>
      <div className="container-custom py-4">
        <div className="flex items-center justify-between gap-2">
          <Link to="/" className="flex items-center gap-2 md:gap-3 min-w-0 flex-1 md:flex-initial">
            <div className="text-orthodox-gold flex-shrink-0">
              <SerbianCross size={20} className="text-orthodox-gold sm:w-6 sm:h-6 md:w-7 md:h-7" />
            </div>
            <h1 className="font-serif font-bold text-white leading-tight min-w-0">
              {/* Mobile: Show short name */}
              <span className="block sm:hidden text-sm truncate">{t('home.churchShortName') || 'Sveti Sava'}</span>
              {/* Small and medium screens: Show short name */}
              <span className="hidden sm:block lg:hidden text-base truncate">{t('home.churchShortName') || 'Sveti Sava'}</span>
              {/* Large screens and up: Show full name */}
              <span className="hidden lg:block text-xl">{t('home.churchFullName') || 'Sveti Sava Orthodox Church'}</span>
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex gap-4 xl:gap-6 items-center flex-shrink-0">
            <Link to="/" className={getNavLinkClasses('/')}>{t('nav.home')}</Link>
            <Link to="/about" className={getNavLinkClasses('/about')}>{t('nav.aboutUs')}</Link>
            <Link to="/calendar" className={getNavLinkClasses('/calendar')}>{t('nav.calendar')}</Link>
            <Link to="/articles" className={getNavLinkClasses('/articles')}>{t('nav.articles')}</Link>
            <Link to="/contact" className={getNavLinkClasses('/contact')}>{t('nav.contact')}</Link>
            <Link to="/donate" className="bg-orthodox-gold text-orthodox-blue hover:bg-opacity-90 px-4 xl:px-6 py-2 rounded font-medium transition-colors whitespace-nowrap text-sm xl:text-base">{t('nav.donate')}</Link>

            <div className="flex items-center gap-2">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-orthodox-gold">
                <Facebook size={18} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-orthodox-gold">
                <Instagram size={18} />
              </a>
            </div>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="bg-white text-orthodox-blue border-white hover:bg-orthodox-gold hover:text-orthodox-blue whitespace-nowrap text-xs">
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

          {/* Medium screens navigation - simplified */}
          <nav className="hidden md:flex lg:hidden gap-3 items-center flex-shrink-0">
            <Link to="/" className={`${getNavLinkClasses('/')} text-sm`}>{t('nav.home')}</Link>
            <Link to="/about" className={`${getNavLinkClasses('/about')} text-sm`}>{t('nav.aboutUs')}</Link>
            <Link to="/calendar" className={`${getNavLinkClasses('/calendar')} text-sm`}>{t('nav.calendar')}</Link>
            <Link to="/contact" className={`${getNavLinkClasses('/contact')} text-sm`}>{t('nav.contact')}</Link>
            <Link to="/donate" className="bg-orthodox-gold text-orthodox-blue hover:bg-opacity-90 px-3 py-1 rounded font-medium transition-colors whitespace-nowrap text-sm">{t('nav.donate')}</Link>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="bg-white text-orthodox-blue border-white hover:bg-orthodox-gold hover:text-orthodox-blue text-xs px-2">
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

          {/* Mobile Menu - for small and medium screens */}
          <div className="md:hidden flex items-center gap-1 flex-shrink-0">
            <div className="flex items-center gap-1">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-orthodox-gold">
                <Facebook size={16} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-orthodox-gold">
                <Instagram size={16} />
              </a>
            </div>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="bg-white text-orthodox-blue border-white hover:bg-orthodox-gold hover:text-orthodox-blue text-xs px-2 h-7">
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
            
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white hover:text-orthodox-gold hover:bg-orthodox-blue/20 w-7 h-7">
              <Menu className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 flex flex-col gap-4 animate-fade-in">
            <Link to="/" className={`${getNavLinkClasses('/')} text-lg`} onClick={() => setIsMenuOpen(false)}>{t('nav.home')}</Link>
            <Link to="/about" className={`${getNavLinkClasses('/about')} text-lg`} onClick={() => setIsMenuOpen(false)}>{t('nav.aboutUs')}</Link>
            <Link to="/calendar" className={`${getNavLinkClasses('/calendar')} text-lg`} onClick={() => setIsMenuOpen(false)}>{t('nav.calendar')}</Link>
            <Link to="/articles" className={`${getNavLinkClasses('/articles')} text-lg`} onClick={() => setIsMenuOpen(false)}>{t('nav.articles')}</Link>
            <Link to="/contact" className={`${getNavLinkClasses('/contact')} text-lg`} onClick={() => setIsMenuOpen(false)}>{t('nav.contact')}</Link>
            <Link to="/donate" className="bg-orthodox-gold text-orthodox-blue hover:bg-opacity-90 px-6 py-2 rounded font-medium transition-colors text-center text-lg" onClick={() => setIsMenuOpen(false)}>{t('nav.donate')}</Link>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
