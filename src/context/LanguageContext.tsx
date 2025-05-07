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
    'nav.articles': 'Articles',
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
    // Articles
    'articles.title': 'Articles',
    'articles.subtitle': 'News, events, texts and content from our community',
    'articles.filter.all': 'All',
    'articles.filter.news': 'News',
    'articles.filter.happenings': 'Events',
    'articles.filter.texts': 'Texts',
    'articles.filter.community': 'Community',
    'articles.filter.history': 'History',
    'articles.readMore': 'Read More',
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
    'nav.services': 'Services',
  },
  sv: {
    // Navigation
    'nav.home': 'Hem',
    'nav.about': 'Om Oss',
    'nav.calendar': 'Kalender',
    'nav.blog': 'Blogg',
    'nav.contact': 'Kontakt',
    'nav.donate': 'Donera',
    'nav.articles': 'Artiklar',
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
    // Articles
    'articles.title': 'Artiklar',
    'articles.subtitle': 'Nyheter, evenemang, texter och innehåll från vår gemenskap',
    'articles.filter.all': 'Alla',
    'articles.filter.news': 'Nyheter',
    'articles.filter.happenings': 'Evenemang',
    'articles.filter.texts': 'Texter',
    'articles.filter.community': 'Gemenskap',
    'articles.filter.history': 'Historia',
    'articles.readMore': 'Läs Mer',
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
    'nav.services': 'Tjänster',
  },
  sr_lat: {
    // Navigation
    'nav.home': 'Početna',
    'nav.about': 'O nama',
    'nav.calendar': 'Kalendar',
    'nav.blog': 'Blog',
    'nav.contact': 'Kontakt',
    'nav.donate': 'Doniraj',
    'nav.articles': 'Članci',
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
    // Articles
    'articles.title': 'Članci',
    'articles.subtitle': 'Vesti, događaji, tekstovi i sadržaj iz naše zajednice',
    'articles.filter.all': 'Sve',
    'articles.filter.news': 'Vesti',
    'articles.filter.happenings': 'Događaji',
    'articles.filter.texts': 'Tekstovi',
    'articles.filter.community': 'Zajednica',
    'articles.filter.history': 'Istorija',
    'articles.readMore': 'Pročitaj više',
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
    'nav.services': 'Službe',
  },
  sr_cyr: {
    // Navigation
    'nav.home': 'Почетна',
    'nav.about': 'О нама',
    'nav.calendar': 'Календар',
    'nav.blog': 'Блог',
    'nav.contact': 'Контакт',
    'nav.donate': 'Донирај',
    'nav.articles': 'Чланци',
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
    // Articles
    'articles.title': 'Чланци',
    'articles.subtitle': 'Вести, догађаји, текстови и садржај из наше заједнице',
    'articles.filter.all': 'Све',
    'articles.filter.news': 'Вести',
    'articles.filter.happenings': 'Догађаји',
    'articles.filter.texts': 'Текстови',
    'articles.filter.community': 'Заједница',
    'articles.filter.history': 'Историја',
    'articles.readMore': 'Прочитај више',
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
    'nav.services': 'Службе',
  },
  ru: {
    // Navigation
    'nav.home': 'Главная',
    'nav.about': 'О нас',
    'nav.calendar': 'Календарь',
    'nav.blog': 'Блог',
    'nav.contact': 'Контакты',
    'nav.donate': 'Пожертвовать',
    'nav.articles': 'Статьи',
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
    // Articles
    'articles.title': 'Статьи',
    'articles.subtitle': 'Новости, события, тексты и содержание из нашей общины',
    'articles.filter.all': 'Все',
    'articles.filter.news': 'Новости',
    'articles.filter.happenings': 'События',
    'articles.filter.texts': 'Тексты',
    'articles.filter.community': 'Община',
    'articles.filter.history': 'История',
    'articles.readMore': 'Читать далее',
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
    'nav.services': 'Службы',
  },
  el: {
    // Navigation
    'nav.home': 'Αρχική',
    'nav.about': 'Σχετικά με εμάς',
    'nav.calendar': 'Ημερολόγιο',
    'nav.blog': 'Ιστολόγιο',
    'nav.contact': 'Επικοινωνία',
    'nav.donate': 'Δωρεά',
    'nav.articles': 'Άρθρα',
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
    // Articles
    'articles.title': 'Άρθρα',
    'articles.subtitle': 'Νέα, εκδηλώσεις, κείμενα και περιεχόμενο από την κοινότητά μας',
    'articles.filter.all': 'Όλα',
    'articles.filter.news': 'Νέα',
    'articles.filter.happenings': 'Εκδηλώσεις',
    'articles.filter.texts': 'Κείμενα',
    'articles.filter.community': 'Κοινότητα',
    'articles.filter.history': 'Ιστορία',
    'articles.readMore': 'Διαβάστε περισσότερα',
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
    'nav.services': 'Υπηρεσίες',
  },
  mk: {
    // Navigation
    'nav.home': 'Почетна',
    'nav.about': 'За нас',
    'nav.calendar': 'Календар',
    'nav.blog': 'Блог',
    'nav.contact': 'Контакт',
    'nav.donate': 'Донирај',
    'nav.articles': 'Статии',
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
    // Articles
    'articles.title': 'Статии',
    'articles.subtitle': 'Вести, настани, текстови и содржина од нашата заедница',
    'articles.filter.all': 'Сите',
    'articles.filter.news': 'Вести',
    'articles.filter.happenings': 'Настани',
    'articles.filter.texts': 'Текстови',
    'articles.filter.community': 'Заедница',
    'articles.filter.history': 'Историја',
    'articles.readMore': 'Прочитај повеќе',
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
    'nav.services': 'Служби',
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
