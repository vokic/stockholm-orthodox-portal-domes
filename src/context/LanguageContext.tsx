
import React, { createContext, useState, useContext, ReactNode } from 'react';

// Define available languages
export type Language = 'en' | 'sv' | 'sr_lat' | 'sr_cyr' | 'ru' | 'el' | 'mk';

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
    'nav.calendar': 'Calendar',
    'nav.blog': 'Blog',
    'nav.contact': 'Contact',
    'nav.donate': 'Donate',
    // Home Page
    'home.welcome': 'Welcome to',
    'home.church': 'Sveti Sava Orthodox Church',
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
    'nav.calendar': 'Kalender',
    'nav.blog': 'Blogg',
    'nav.contact': 'Kontakt',
    'nav.donate': 'Donera',
    // Home Page
    'home.welcome': 'Välkommen till',
    'home.church': 'Sveti Sava Ortodoxa Kyrkan',
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
  sr_lat: {
    // Navigation
    'nav.home': 'Početna',
    'nav.about': 'O nama',
    'nav.calendar': 'Kalendar',
    'nav.blog': 'Blog',
    'nav.contact': 'Kontakt',
    'nav.donate': 'Doniraj',
    // Home Page
    'home.welcome': 'Dobrodošli u',
    'home.church': 'Pravoslavna Crkva Sveti Sava',
    'home.intro': 'Duhovni dom za pravoslavne vernike u Stokholmu.',
    'home.learnMore': 'Saznajte više',
    'home.upcomingServices': 'Predstojeće službe',
    'home.upcomingEvents': 'Predstojeći događaji',
    'home.priestMessage': 'Poruka od sveštenika',
    'home.readMore': 'Pročitajte više',
    'home.visitUs': 'Posetite nas',
    // Services
    'services.schedule': 'Raspored službi',
    'services.sunday': 'Nedeljna Liturgija',
    'services.vespers': 'Večernja služba subotom',
    'services.specialServices': 'Posebne službe',
    'services.time': 'Vreme',
    'services.calendar': 'Kalendar',
    // About
    'about.title': 'O našoj crkvi',
    'about.history': 'Naša istorija',
    'about.priest': 'Naš sveštenik',
    'about.community': 'Naša zajednica',
    // Events
    'events.title': 'Predstojeći događaji',
    'events.calendar': 'Kalendar događaja',
    'events.noEvents': 'Nema predstojećih događaja u ovom trenutku.',
    // Donations
    'donate.title': 'Podržite našu crkvu',
    'donate.text': 'Pomozite da podržimo misiju i rad naše crkve.',
    'donate.button': 'Donirajte',
    'donate.options': 'Opcije za doniranje',
    'donate.thanks': 'Hvala na vašoj velikodušnosti!',
    // Footer
    'footer.address': 'Adresa',
    'footer.phone': 'Telefon',
    'footer.email': 'E-pošta',
    'footer.rights': 'Sva prava zadržana',
  },
  sr_cyr: {
    // Navigation
    'nav.home': 'Почетна',
    'nav.about': 'О нама',
    'nav.calendar': 'Календар',
    'nav.blog': 'Блог',
    'nav.contact': 'Контакт',
    'nav.donate': 'Донирај',
    // Home Page
    'home.welcome': 'Добродошли у',
    'home.church': 'Православна Црква Свети Сава',
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
    'donate.text': 'Помозите да подржимо мисију и рад наше цркве.',
    'donate.button': 'Донирајте',
    'donate.options': 'Опције за донирање',
    'donate.thanks': 'Хвала на вашој великодушности!',
    // Footer
    'footer.address': 'Адреса',
    'footer.phone': 'Телефон',
    'footer.email': 'Е-пошта',
    'footer.rights': 'Сва права задржана',
  },
  ru: {
    // Navigation
    'nav.home': 'Главная',
    'nav.about': 'О нас',
    'nav.calendar': 'Календарь',
    'nav.blog': 'Блог',
    'nav.contact': 'Контакты',
    'nav.donate': 'Пожертвовать',
    // Home Page
    'home.welcome': 'Добро пожаловать в',
    'home.church': 'Православную Церковь Святого Саввы',
    'home.intro': 'Духовный дом для православных верующих в Стокгольме.',
    'home.learnMore': 'Узнать больше',
    'home.upcomingServices': 'Предстоящие службы',
    'home.upcomingEvents': 'Предстоящие события',
    'home.priestMessage': 'Послание от священника',
    'home.readMore': 'Читать далее',
    'home.visitUs': 'Посетите нас',
    // Services
    'services.schedule': 'Расписание служб',
    'services.sunday': 'Воскресная Литургия',
    'services.vespers': 'Субботняя Вечерня',
    'services.specialServices': 'Особые службы',
    'services.time': 'Время',
    'services.calendar': 'Календарь',
    // About
    'about.title': 'О нашей церкви',
    'about.history': 'Наша история',
    'about.priest': 'Наш священник',
    'about.community': 'Наша община',
    // Events
    'events.title': 'Предстоящие события',
    'events.calendar': 'Календарь событий',
    'events.noEvents': 'В настоящее время нет предстоящих событий.',
    // Donations
    'donate.title': 'Поддержите нашу церковь',
    'donate.text': 'Помогите поддержать миссию и работу нашей церкви.',
    'donate.button': 'Сделать пожертвование',
    'donate.options': 'Варианты пожертвований',
    'donate.thanks': 'Спасибо за вашу щедрость!',
    // Footer
    'footer.address': 'Адрес',
    'footer.phone': 'Телефон',
    'footer.email': 'Электронная почта',
    'footer.rights': 'Все права защищены',
  },
  el: {
    // Navigation
    'nav.home': 'Αρχική',
    'nav.about': 'Σχετικά με εμάς',
    'nav.calendar': 'Ημερολόγιο',
    'nav.blog': 'Ιστολόγιο',
    'nav.contact': 'Επικοινωνία',
    'nav.donate': 'Δωρεά',
    // Home Page
    'home.welcome': 'Καλώς ήρθατε στην',
    'home.church': 'Ορθόδοξη Εκκλησία του Αγίου Σάββα',
    'home.intro': 'Ένα πνευματικό σπίτι για τους Ορθόδοξους πιστούς στη Στοκχόλμη.',
    'home.learnMore': 'Μάθετε περισσότερα',
    'home.upcomingServices': 'Επερχόμενες Λειτουργίες',
    'home.upcomingEvents': 'Επερχόμενες Εκδηλώσεις',
    'home.priestMessage': 'Μήνυμα από τον Ιερέα',
    'home.readMore': 'Διαβάστε περισσότερα',
    'home.visitUs': 'Επισκεφθείτε μας',
    // Services
    'services.schedule': 'Πρόγραμμα Λειτουργιών',
    'services.sunday': 'Κυριακάτικη Θεία Λειτουργία',
    'services.vespers': 'Εσπερινός Σαββάτου',
    'services.specialServices': 'Ειδικές Λειτουργίες',
    'services.time': 'Ώρα',
    'services.calendar': 'Ημερολόγιο',
    // About
    'about.title': 'Σχετικά με την Εκκλησία μας',
    'about.history': 'Η Ιστορία μας',
    'about.priest': 'Ο Ιερέας μας',
    'about.community': 'Η Κοινότητά μας',
    // Events
    'events.title': 'Επερχόμενες Εκδηλώσεις',
    'events.calendar': 'Ημερολόγιο Εκδηλώσεων',
    'events.noEvents': 'Δεν υπάρχουν επερχόμενες εκδηλώσεις αυτή τη στιγμή.',
    // Donations
    'donate.title': 'Υποστηρίξτε την Εκκλησία μας',
    'donate.text': 'Βοηθήστε να υποστηρίξουμε την αποστολή και το έργο της εκκλησίας μας.',
    'donate.button': 'Κάντε Δωρεά',
    'donate.options': 'Επιλογές Δωρεάς',
    'donate.thanks': 'Σας ευχαριστούμε για τη γενναιοδωρία σας!',
    // Footer
    'footer.address': 'Διεύθυνση',
    'footer.phone': 'Τηλέφωνο',
    'footer.email': 'Email',
    'footer.rights': 'Με επιφύλαξη παντός δικαιώματος',
  },
  mk: {
    // Navigation
    'nav.home': 'Почетна',
    'nav.about': 'За нас',
    'nav.calendar': 'Календар',
    'nav.blog': 'Блог',
    'nav.contact': 'Контакт',
    'nav.donate': 'Донирај',
    // Home Page
    'home.welcome': 'Добредојдовте во',
    'home.church': 'Православната Црква Свети Сава',
    'home.intro': 'Духовен дом за православните верници во Стокхолм.',
    'home.learnMore': 'Дознајте повеќе',
    'home.upcomingServices': 'Претстојни служби',
    'home.upcomingEvents': 'Претстојни настани',
    'home.priestMessage': 'Порака од свештеникот',
    'home.readMore': 'Прочитајте повеќе',
    'home.visitUs': 'Посетете не',
    // Services
    'services.schedule': 'Распоред на служби',
    'services.sunday': 'Недела Божествена Литургија',
    'services.vespers': 'Сабота Вечерна',
    'services.specialServices': 'Посебни служби',
    'services.time': 'Време',
    'services.calendar': 'Календар',
    // About
    'about.title': 'За нашата црква',
    'about.history': 'Нашата историја',
    'about.priest': 'Нашиот свештеник',
    'about.community': 'Нашата заедница',
    // Events
    'events.title': 'Претстојни настани',
    'events.calendar': 'Календар на настани',
    'events.noEvents': 'Во моментов нема претстојни настани.',
    // Donations
    'donate.title': 'Поддржете ја нашата црква',
    'donate.text': 'Помогнете да ја поддржиме мисијата и работата на нашата црква.',
    'donate.button': 'Направете донација',
    'donate.options': 'Опции за донирање',
    'donate.thanks': 'Ви благодариме за вашата великодушност!',
    // Footer
    'footer.address': 'Адреса',
    'footer.phone': 'Телефон',
    'footer.email': 'Е-пошта',
    'footer.rights': 'Сите права се задржани',
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
