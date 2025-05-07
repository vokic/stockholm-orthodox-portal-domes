
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage, Language } from '../context/LanguageContext';
import { Menu, Facebook, Instagram } from 'lucide-react';
import { Button } from './ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';

const Header: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const languages = [
    { code: 'en', label: 'English' },
    { code: 'sv', label: 'Svenska' },
    { code: 'sr_lat', label: 'Srpski (latinica)' },
    { code: 'sr_cyr', label: 'Српски (ћирилица)' },
    { code: 'ru', label: 'Русский' },
    { code: 'el', label: 'Ελληνικά' },
    { code: 'mk', label: 'Македонски' },
  ];

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-10">
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <div className="text-orthodox-gold text-3xl mr-3">☦</div>
              <div>
                <h1 className="text-xl font-serif font-bold text-orthodox-blue">
                  {t('home.church')}
                </h1>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-6 items-center">
            <Link to="/" className="nav-link">{t('nav.home')}</Link>
            <Link to="/about" className="nav-link">{t('nav.about')}</Link>
            <Link to="/calendar" className="nav-link">{t('nav.calendar')}</Link>
            <Link to="/clanci" className="nav-link">{t('nav.articles')}</Link>
            <Link to="/contact" className="nav-link">{t('nav.contact')}</Link>
            <Link to="/donate" className="btn-primary">{t('nav.donate')}</Link>

            {/* Social Media Icons */}
            <div className="flex items-center gap-2 ml-2">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-orthodox-blue hover:text-orthodox-gold">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-orthodox-blue hover:text-orthodox-gold">
                <Instagram size={20} />
              </a>
            </div>

            {/* Language Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="ml-2">
                  {language.toUpperCase()}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => handleLanguageChange(lang.code as Language)}
                    className={language === lang.code ? "font-bold" : ""}
                  >
                    {lang.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            {/* Social Media Icons for Mobile */}
            <div className="flex items-center gap-2 mr-2">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-orthodox-blue hover:text-orthodox-gold">
                <Facebook size={18} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-orthodox-blue hover:text-orthodox-gold">
                <Instagram size={18} />
              </a>
            </div>
            
            {/* Language Selector for Mobile */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm">
                  {language.toUpperCase()}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => handleLanguageChange(lang.code as Language)}
                    className={language === lang.code ? "font-bold" : ""}
                  >
                    {lang.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            
            <Button variant="ghost" size="icon" onClick={toggleMenu}>
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 flex flex-col gap-4 animate-fade-in">
            <Link to="/" className="nav-link text-lg" onClick={toggleMenu}>{t('nav.home')}</Link>
            <Link to="/about" className="nav-link text-lg" onClick={toggleMenu}>{t('nav.about')}</Link>
            <Link to="/calendar" className="nav-link text-lg" onClick={toggleMenu}>{t('nav.calendar')}</Link>
            <Link to="/clanci" className="nav-link text-lg" onClick={toggleMenu}>{t('nav.articles')}</Link>
            <Link to="/contact" className="nav-link text-lg" onClick={toggleMenu}>{t('nav.contact')}</Link>
            <Link to="/donate" className="btn-primary text-center text-lg" onClick={toggleMenu}>{t('nav.donate')}</Link>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
