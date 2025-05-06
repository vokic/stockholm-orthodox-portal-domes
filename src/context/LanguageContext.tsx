
import React, { createContext, useState, useContext, ReactNode } from 'react';

// Define available languages
export type Language = 'en' | 'sv' | 'sr';

// Define the context type
type LanguageContextType = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
};

// Create context with default values
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translations
const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.services': 'Services',
    'nav.events': 'Events',
    'nav.contact': 'Contact',
    'nav.donate': 'Donate',
    // Home Page
    'home.welcome': 'Welcome to',
    'home.church': 'Orthodox Church in Stockholm',
    'home.intro': 'A spiritual home for the Orthodox faithful in Stockholm.',
    'home.learnMore': 'Learn More',
    'home.upcomingServices': 'Upcoming Services',
    'home.upcomingEvents': 'Upcoming Events',
    'home.priestMessage': 'Message from Father',
    'home.readMore': 'Read More',
    'home.visitUs': 'Visit Us',
    // Services
    'services.schedule': 'Service Schedule',
    'services.sunday': 'Sunday Divine Liturgy',
    'services.vespers': 'Saturday Vespers',
    'services.specialServices': 'Special Services',
    'services.time': 'Time',
    'services.calendar': 'Calendar',
    // About
    'about.title': 'About Our Church',
    'about.history': 'Our History',
    'about.priest': 'Our Priest',
    'about.community': 'Our Community',
    // Events
    'events.title': 'Upcoming Events',
    'events.calendar': 'Event Calendar',
    'events.noEvents': 'No upcoming events at this time.',
    // Donations
    'donate.title': 'Support Our Church',
    'donate.text': 'Help support the mission and work of our church.',
    'donate.button': 'Make a Donation',
    'donate.options': 'Donation Options',
    'donate.thanks': 'Thank you for your generosity!',
    // Footer
    'footer.address': 'Address',
    'footer.phone': 'Phone',
    'footer.email': 'Email',
    'footer.rights': 'All Rights Reserved',
  },
  sv: {
    // Navigation
    'nav.home': 'Hem',
    'nav.about': 'Om Oss',
    'nav.services': 'Tjänster',
    'nav.events': 'Evenemang',
    'nav.contact': 'Kontakt',
    'nav.donate': 'Donera',
    // Home Page
    'home.welcome': 'Välkommen till',
    'home.church': 'Ortodoxa Kyrkan i Stockholm',
    'home.intro': 'Ett andligt hem för ortodoxa troende i Stockholm.',
    'home.learnMore': 'Läs Mer',
    'home.upcomingServices': 'Kommande Tjänster',
    'home.upcomingEvents': 'Kommande Evenemang',
    'home.priestMessage': 'Meddelande från Prästen',
    'home.readMore': 'Läs Mer',
    'home.visitUs': 'Besök Oss',
    // Services
    'services.schedule': 'Tjänsteschema',
    'services.sunday': 'Söndagsgudstjänst',
    'services.vespers': 'Lördagsvesper',
    'services.specialServices': 'Speciella Tjänster',
    'services.time': 'Tid',
    'services.calendar': 'Kalender',
    // About
    'about.title': 'Om Vår Kyrka',
    'about.history': 'Vår Historia',
    'about.priest': 'Vår Präst',
    'about.community': 'Vår Gemenskap',
    // Events
    'events.title': 'Kommande Evenemang',
    'events.calendar': 'Evenemangskalender',
    'events.noEvents': 'Inga kommande evenemang just nu.',
    // Donations
    'donate.title': 'Stöd Vår Kyrka',
    'donate.text': 'Hjälp till att stödja kyrkans uppdrag och arbete.',
    'donate.button': 'Gör en Donation',
    'donate.options': 'Donationsalternativ',
    'donate.thanks': 'Tack för din generositet!',
    // Footer
    'footer.address': 'Adress',
    'footer.phone': 'Telefon',
    'footer.email': 'E-post',
    'footer.rights': 'Alla rättigheter förbehållna',
  },
  sr: {
    // Navigation
    'nav.home': 'Почетна',
    'nav.about': 'О нама',
    'nav.services': 'Службе',
    'nav.events': 'Догађаји',
    'nav.contact': 'Контакт',
    'nav.donate': 'Донирај',
    // Home Page
    'home.welcome': 'Добродошли у',
    'home.church': 'Православну Цркву у Стокхолму',
    'home.intro': 'Духовни дом за православне вернике у Стокхолму.',
    'home.learnMore': 'Сазнајте више',
    'home.upcomingServices': 'Предстојеће службе',
    'home.upcomingEvents': 'Предстојећи догађаји',
    'home.priestMessage': 'Порука од свештеника',
    'home.readMore': 'Прочитајте више',
    'home.visitUs': 'Посетите нас',
    // Services
    'services.schedule': 'Распоред служби',
    'services.sunday': 'Недељна Литургија',
    'services.vespers': 'Вечерња служба суботом',
    'services.specialServices': 'Посебне службе',
    'services.time': 'Време',
    'services.calendar': 'Календар',
    // About
    'about.title': 'О нашој цркви',
    'about.history': 'Наша историја',
    'about.priest': 'Наш свештеник',
    'about.community': 'Наша заједница',
    // Events
    'events.title': 'Предстојећи догађаји',
    'events.calendar': 'Календар догађаја',
    'events.noEvents': 'Нема предстојећих догађаја у овом тренутку.',
    // Donations
    'donate.title': 'Подржите нашу цркву',
    'donate.text': 'Помозите да подржите мисију и рад наше цркве.',
    'donate.button': 'Донирајте',
    'donate.options': 'Опције за донирање',
    'donate.thanks': 'Хвала на вашој великодушности!',
    // Footer
    'footer.address': 'Адреса',
    'footer.phone': 'Телефон',
    'footer.email': 'Е-пошта',
    'footer.rights': 'Сва права задржана',
  }
};

// Provider component
export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  // Translation function
  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to use the language context
export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
