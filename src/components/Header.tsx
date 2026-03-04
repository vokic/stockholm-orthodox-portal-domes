import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useLanguage, Language } from "../context/LanguageContext";
import { Menu, Facebook, Instagram, X } from "lucide-react";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import SerbianCross from "./SerbianCross";
import { useScrollBehavior } from "../hooks/useScrollBehavior";

const Header: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { showNavbar } = useScrollBehavior();

  const languages = [
    {
      code: "sr_cyr",
      label: "Српски (ћирилица)",
      short: "СР ћир",
    }, // label: t("lang.serbian_cyr") || "Српски (ћирилица)",
    {
      code: "sr_lat",
      label: "Srpski (latinica)",
      short: "SR lat",
    }, // label: t("lang.serbian_lat") || "Srpski (latinica)",

    { code: "sv", label: "Svenska", short: "SV" }, // label: t("lang.swedish") || "Svenska",

    // { code: "ru", label: "Русский", short: "RU" }, // label: t("lang.russian") || "Русский",
    // { code: "el", label: "Ελληνικά", short: "EL" }, // label: t("lang.greek") || "Ελληνικά",
    // { code: "mk", label: "Македонски", short: "MK" }, // label: t("lang.macedonian") || "Македонски",
    // { code: "en", label: "English", short: "EN" }, // label: t("lang.english") || "English",
  ];

  const getCurrentLanguageShort = () => {
    const currentLang = languages.find((lang) => lang.code === language);
    return currentLang?.short || "СР ћир";
  };

  const isActiveLink = (path: string) => location.pathname === path;

  const getNavLinkClasses = (path: string) => {
    const baseClasses =
      "transition-all duration-200 text-white hover:text-orthodox-gold";
    return isActiveLink(path)
      ? `${baseClasses} text-orthodox-gold border-b-2 border-orthodox-gold font-semibold`
      : baseClasses;
  };

  return (
    <header
      className={`
      bg-orthodox-blue shadow-sm sticky top-0 z-50 border-b border-orthodox-gold
      transition-transform duration-300 ease-in-out
      ${showNavbar ? "translate-y-0" : "-translate-y-full"}
    `}
    >
      <div className="container-custom py-4">
        <div className="flex items-center justify-between gap-2">
          <Link
            to="/"
            className="flex items-center gap-2 md:gap-3 min-w-0 flex-1 md:flex-initial"
          >
            <div className="text-orthodox-gold flex-shrink-0">
              <SerbianCross
                size={30}
                className="text-orthodox-gold sm:w-6 sm:h-6 md:w-7 md:h-7"
              />
            </div>
            <h1 className="font-serif font-bold text-white leading-tight min-w-0">
              {/* Mobile: Show short name */}
              <span className="block sm:hidden text-base truncate">
                {t("home.churchShortName") || "Sveti Sava"}
              </span>
              {/* Small and medium screens: Show short name */}
              <span className="hidden sm:block lg:hidden text-base truncate">
                {t("home.churchShortName") || "Sveti Sava"}
              </span>
              {/* Large screens and up: Show full name */}
              <span className="hidden lg:block text-xl">
                {t("home.churchFullName") || "Sveti Sava Orthodox Church"}
              </span>
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex gap-4 xl:gap-6 items-center flex-shrink-0">
            <Link to="/" className={getNavLinkClasses("/")}>
              {t("nav.home")}
            </Link>
            <Link to="/about" className={getNavLinkClasses("/about")}>
              {t("nav.aboutUs")}
            </Link>
            <Link to="/calendar" className={getNavLinkClasses("/calendar")}>
              {t("nav.calendar")}
            </Link>
            <Link to="/articles" className={getNavLinkClasses("/articles")}>
              {t("nav.articles")}
            </Link>
            <Link to="/contact" className={getNavLinkClasses("/contact")}>
              {t("nav.contact")}
            </Link>
            <Link
              to="/donate"
              className="bg-orthodox-gold text-orthodox-blue hover:bg-opacity-90 px-4 xl:px-6 py-2 rounded font-medium transition-colors whitespace-nowrap text-sm xl:text-base"
            >
              {t("nav.donate")}
            </Link>

            <div className="flex items-center gap-3">
              <a
                href="https://www.facebook.com/profile.php?id=100069273553241"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-orthodox-gold"
                aria-label={t("aria.facebook")}
              >
                <Facebook size={30} strokeWidth={1.5} absoluteStrokeWidth />
              </a>
              <a
                href="https://www.instagram.com/spcstockholm/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-orthodox-gold"
                aria-label={t("aria.instagram")}
              >
                <Instagram size={30} strokeWidth={1.5} absoluteStrokeWidth />
              </a>
            </div>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  className="bg-white text-orthodox-blue border-white hover:bg-orthodox-gold hover:text-orthodox-blue whitespace-nowrap text-xs h-9"
                >
                  {getCurrentLanguageShort()}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className={language === lang.code ? "font-bold" : ""}
                  >
                    {lang.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>

          {/* Medium screens navigation - with social icons */}
          <nav className="hidden md:flex lg:hidden gap-3 items-center flex-shrink-0">
            <Link to="/" className={`${getNavLinkClasses("/")} text-sm`}>
              {t("nav.home")}
            </Link>
            <Link
              to="/about"
              className={`${getNavLinkClasses("/about")} text-sm`}
            >
              {t("nav.aboutUs")}
            </Link>
            <Link
              to="/calendar"
              className={`${getNavLinkClasses("/calendar")} text-sm`}
            >
              {t("nav.calendar")}
            </Link>
            <Link
              to="/contact"
              className={`${getNavLinkClasses("/contact")} text-sm`}
            >
              {t("nav.contact")}
            </Link>
            <Link
              to="/donate"
              className="bg-orthodox-gold text-orthodox-blue hover:bg-opacity-90 px-3 py-1 rounded font-medium transition-colors whitespace-nowrap text-sm"
            >
              {t("nav.donate")}
            </Link>

            <div className="flex items-center gap-2">
              <a
                href="https://www.facebook.com/profile.php?id=100069273553241"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-orthodox-gold"
                aria-label={t("aria.facebook")}
              >
                <Facebook size={30} strokeWidth={1.5} absoluteStrokeWidth />
              </a>
              <a
                href="https://www.instagram.com/spcstockholm/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-orthodox-gold"
                aria-label={t("aria.instagram")}
              >
                <Instagram size={30} strokeWidth={1.5} absoluteStrokeWidth />
              </a>
            </div>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  className="bg-white text-orthodox-blue border-white hover:bg-orthodox-gold hover:text-orthodox-blue text-xs px-2 h-9"
                >
                  {getCurrentLanguageShort()}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className={language === lang.code ? "font-bold" : ""}
                  >
                    {lang.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>

          {/* Mobile Menu - no social icons in header */}
          <div className="md:hidden flex items-center gap-1 flex-shrink-0">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  className="bg-white text-orthodox-blue border-white hover:bg-orthodox-gold hover:text-orthodox-blue text-xs px-2 h-7"
                >
                  {getCurrentLanguageShort()}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className={language === lang.code ? "font-bold" : ""}
                  >
                    {lang.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:text-orthodox-gold hover:bg-orthodox-blue/20 w-10 h-10 [&_svg]:!w-8 [&_svg]:!h-8"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? t("aria.closeMenu") : t("aria.openMenu")}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 flex flex-col gap-4 animate-fade-in">
            <Link
              to="/"
              className={`${getNavLinkClasses("/")} text-lg`}
              onClick={() => setIsMenuOpen(false)}
            >
              {t("nav.home")}
            </Link>
            <Link
              to="/about"
              className={`${getNavLinkClasses("/about")} text-lg`}
              onClick={() => setIsMenuOpen(false)}
            >
              {t("nav.aboutUs")}
            </Link>
            <Link
              to="/calendar"
              className={`${getNavLinkClasses("/calendar")} text-lg`}
              onClick={() => setIsMenuOpen(false)}
            >
              {t("nav.calendar")}
            </Link>
            <Link
              to="/articles"
              className={`${getNavLinkClasses("/articles")} text-lg`}
              onClick={() => setIsMenuOpen(false)}
            >
              {t("nav.articles")}
            </Link>
            <Link
              to="/contact"
              className={`${getNavLinkClasses("/contact")} text-lg`}
              onClick={() => setIsMenuOpen(false)}
            >
              {t("nav.contact")}
            </Link>
            <Link
              to="/donate"
              className="bg-orthodox-gold text-orthodox-blue hover:bg-opacity-90 px-6 py-2 rounded font-medium transition-colors text-center text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("nav.donate")}
            </Link>

            {/* Social media icons below donate button on mobile */}
            <div className="flex items-center justify-center gap-4 pt-2 border-t border-orthodox-gold/30">
              <a
                href="https://www.facebook.com/profile.php?id=100069273553241"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-orthodox-gold"
                aria-label={t("aria.facebook")}
              >
                <Facebook size={30} strokeWidth={1.5} absoluteStrokeWidth />
              </a>
              <a
                href="https://www.instagram.com/spcstockholm/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-orthodox-gold"
                aria-label={t("aria.instagram")}
              >
                <Instagram size={30} strokeWidth={1.5} absoluteStrokeWidth />
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
