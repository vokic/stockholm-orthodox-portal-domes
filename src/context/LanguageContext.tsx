import React, { createContext, useState, useContext, ReactNode } from "react";

// Define available languages
export type Language = "en" | "sv" | "sr_lat" | "sr_cyr" | "ru" | "el" | "mk";

// Define the context type
type LanguageContextType = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
};

// Create context with default values
const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

// Translations
const translations = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.aboutUs": "About Us",
    "nav.calendar": "Calendar",
    "nav.blog": "Blog",
    "nav.contact": "Contact",
    "nav.donate": "Donate",
    "nav.articles": "Articles",
    "nav.services": "Services",
    "nav.aboutUsUs": "About Us",

    // Home Page
    "home.welcome": "Welcome to",
    "home.church": "Sveti Sava Orthodox Church",
    "home.intro": "A spiritual home for the Orthodox faithful in Stockholm.",
    "home.learnMore": "Learn More",
    "home.upcomingServices": "Upcoming Services",
    "home.upcomingEvents": "Upcoming Events",
    "home.priestMessage": "Message from Father",
    "home.readMore": "Read More",
    "home.visitUs": "Visit Us",
    "home.location": "Bägerstavägen 68, 120 47 Enskede Gård, Sweden",
    "home.contactInfo": "Contact",
    "home.phone": "Phone: +46 8 123 456 78",
    "home.email": "Email: info@svetisava-stockholm.se",
    "home.officeHours": "Office Hours: Monday to Friday, 9:00 - 16:00",
    "home.contactUs": "Contact Us",
    "home.churchFullName": "Sveti Sava Orthodox Church Stockholm",
    "home.shortName": "Sveti Sava",
    "home.latestArticles": "Latest Articles",
    "home.viewAll": "View All",
    "home.viewFullCalendar": "View Full Calendar",
    "home.viewAllArticles": "View Al Articles",
    "home.visitOurChurch": "Visit Our Church",
    "home.priests.title": "Priests",
    "home.churchIntro":
      "An Orthodox Church in Stockholm, Sweden, the only Orthodox Church in Sweden and the third Orthodox Church in the world.",

    // Services
    "services.schedule": "Service Schedule",
    "services.sunday": "Sunday Divine Liturgy",
    "services.vespers": "Saturday Vespers",
    "services.specialServices": "Special Services",
    "services.time": "Time",
    "services.calendar": "Calendar",

    // Articles
    "articles.title": "Articles",
    "articles.subtitle": "News, events, texts and content from our community",
    "articles.filter.all": "All",
    "articles.filter.news": "News",
    "articles.filter.happenings": "Events",
    "articles.filter.texts": "Texts",
    "articles.filter.community": "Community",
    "articles.filter.history": "History",
    "articles.readMore": "Read More",

    // About
    "about.title": "About Our Church",
    "about.history": "Our History",
    "about.priest": "Our Priest",
    "about.community": "Our Community",
    "about.history.p1":
      "The Serbian Orthodox Church of Sveti Sava in Stockholm was founded in 1985 by Serbian immigrants who had come to Sweden seeking a better life. What started as small prayer gatherings in members' homes grew into a vibrant parish community dedicated to preserving Serbian Orthodox traditions in Scandinavia.",
    "about.history.p2":
      "In 1992, the community purchased its current building, a historic structure dating back to the early 20th century, which was consecrated as an Orthodox church after extensive renovations. The church was named in honor of Sveti Sava (Saint Sava), the patron saint of Serbia and the first Archbishop of the autocephalous Serbian Orthodox Church.",
    "about.history.p3":
      "Today, our parish serves Orthodox Christians from various ethnic backgrounds, including Serbian, Greek, Russian, Romanian, and Swedish converts, reflecting the diverse nature of Orthodoxy in Stockholm.",
    "about.history.p4":
      "Our church is adorned with traditional iconography painted by local and international iconographers, following the Byzantine tradition. The interior features a hand-carved wooden iconostasis imported from Serbia in 2005, depicting saints particularly venerated in the Serbian Orthodox tradition.",
    "about.saintsava.title": "Sveti Sava: The First Serbian Archbishop",
    "about.saintsava.subtitle": "The Life and Legacy of Saint Sava",
    "about.saintsava.p1":
      "Saint Sava (1174-1236), born Rastko Nemanjić, was the youngest son of Stefan Nemanja, the Grand Prince of Serbia. Despite being a prince with all the comforts of royal life, young Rastko was drawn to spiritual matters from an early age.",
    "about.saintsava.p2":
      "At the age of 17, Rastko left his father's court and traveled to Mount Athos, the center of Orthodox monasticism, where he became a monk and took the name Sava. His father later joined him, taking monastic vows as Simeon. Together, they established the Hilandar Monastery on Mount Athos, which remains an important Serbian spiritual center to this day.",
    "about.saintsava.p3":
      "Saint Sava's greatest achievement came in 1219 when he successfully negotiated the autocephaly (independence) of the Serbian Orthodox Church and became its first Archbishop. This was a crucial moment in Serbian history, as it established both the religious and national identity of the Serbian people.",
    "about.saintsava.p4":
      'Beyond his ecclesiastical role, Saint Sava was also a diplomat, legislator, writer, and educator. He founded schools, hospitals, and monasteries throughout Serbia, and authored the Nomocanon, the first Serbian constitution and legal code. His contributions to Serbian culture, law, and education earned him the title "Enlightener of the Serbs."',
    "about.saintsava.p5":
      "Saint Sava died on January 14, 1236, while returning from a pilgrimage to the Holy Land. He is commemorated on January 27 in the Orthodox calendar. His legacy continues to inspire Orthodox Christians worldwide, representing the ideal harmony between spiritual devotion and practical service to one's community and nation.",
    "about.priest.title": "Father Nicholas Petrovic",
    "about.priest.p1":
      "Father Nicholas was ordained to the priesthood in 1998 after completing his theological studies at the Orthodox Theological Faculty of the University of Belgrade and St. Vladimir's Orthodox Theological Seminary in the United States.",
    "about.priest.p2":
      "Prior to leading our parish, Father Nicholas served communities in Serbia and the United Kingdom. He has been our parish priest since 2010.",
    "about.priest.p3":
      "Father Nicholas is fluent in Serbian, English, and Swedish, and is continuing to learn Greek to better serve our diverse community. He is known for his warm pastoral approach and dedication to Orthodox education.",
    "about.priest.p4":
      "His vision for our parish focuses on preserving Serbian Orthodox traditions while making them accessible to all generations and cultural backgrounds.",
    "about.gallery.title": "Church Gallery",
    "about.location.title": "Church Location and Hours",
    "about.hours.title": "Opening Hours",
    "about.directions.title": "Directions",
    "about.directions.public":
      "By Public Transport: 5-minute walk from Östermalmstorg metro station.",
    "about.directions.bus":
      "By Bus: Bus routes 4 and 72 stop close to the church.",
    "about.directions.car":
      "By Car: Limited parking available on Birger Jarlsgatan.",
    "about.contact.title": "Contact Information",
    "about.contact.address": "Address",
    "about.contact.phone": "Phone",
    "about.contact.email": "Email",
    "about.contact.priest": "Priest",
    "about.community.p1":
      "Our parish community is diverse and vibrant, composed of Orthodox Christians from various cultural backgrounds. We are united by our shared faith and commitment to living the Orthodox way of life in Stockholm.",
    "about.community.stats.families": "Families",
    "about.community.stats.nationalities": "Nationalities",
    "about.community.stats.years": "Years of Service",
    "about.community.p2":
      "We offer a range of ministries and activities beyond worship services, including:",
    "about.community.activities.sunday":
      "Sunday School for children of all ages",
    "about.community.activities.youth":
      "Youth group for teenagers and young adults",
    "about.community.activities.bible": "Bible study and catechism classes",
    "about.community.activities.charity":
      "Charitable outreach to the local community",
    "about.community.activities.cultural":
      "Cultural events celebrating Orthodox traditions",
    "about.community.activities.fellowship":
      "Fellowship meals after Sunday services",
    "about.community.p3":
      "Whether you are a lifelong Orthodox Christian or simply curious about the Orthodox faith, we welcome you to visit us and become part of our community.",
    "about.parishToday.title": "Parish Today",
    "about.ourMission.title": "Our Mission",
    "about.ourCommunity.title": "Our Community",
    "about.svetiSava.title": "Saint Sava",
    "about.priests": "Priests",

    // Calendar/Events
    "events.title": "Upcoming Events",
    "events.calendar": "Event Calendar",
    "events.services": "Services",
    "events.all": "All",
    "events.regularServices": "Regular Services",
    "events.specialServices": "Special Services",
    "events.day": "Day",
    "events.service": "Service",
    "events.time": "Time",
    "events.description": "Description",
    "events.noEvents": "No upcoming events at this time.",
    "events.location": "Location",
    "events.communityActivities": "Community Activities",
    "events.sundaySchool": "Sunday School",
    "events.sundaySchool.desc":
      "Weekly classes for children to learn about the Orthodox faith and traditions.",
    "events.bibleStudy": "Bible Study",
    "events.bibleStudy.desc":
      "Regular scripture study and discussion groups for adults of all ages.",
    "events.charity": "Charity Outreach",
    "events.charity.desc":
      "Preparing meals and collecting donations for local homeless shelters.",
    "events.getInvolved":
      "Want to get involved? We welcome volunteers for all our community activities!",

    // Contact
    "contact.info": "Contact Information",
    "contact.address.title": "Address",
    "contact.address.line1": "Birger Jarlsgatan 98",
    "contact.address.line2": "114 20 Stockholm",
    "contact.address.line3": "Sweden",
    "contact.phone.title": "Phone",
    "contact.phone.main": "Main Office: +46 8 123 456 78",
    "contact.phone.priest": "Father Nicholas: +46 8 123 456 79",
    "contact.email.title": "Email",
    "contact.email.general": "General Inquiries: info@orthodoxstockholm.se",
    "contact.email.priest":
      "Father Nicholas: father.nicholas@orthodoxstockholm.se",
    "contact.hours.title": "Office Hours",
    "contact.hours.weekdays": "Monday to Friday: 9:00 - 16:00",
    "contact.hours.saturday": "Saturday: By appointment",
    "contact.hours.sunday": "Sunday: Closed (Join us for Liturgy)",
    "contact.form.title": "Send Us a Message",
    "contact.form.name": "Name",
    "contact.form.email": "Email",
    "contact.form.subject": "Subject",
    "contact.form.message": "Message",
    "contact.form.submit": "Send Message",
    "contact.findus": "Find Us",
    "contact.directions.title": "Directions",

    // Donate
    "donate.title": "Support Our Church",
    "donate.text": "Help support the mission and work of our church.",
    "donate.button": "Make a Donation",
    "donate.options": "Donation Options",
    "donate.onetime": "One-time Donation",
    "donate.onetime.desc":
      "Support our church with a single donation of any amount.",
    "donate.onetime.button": "Donate Now",
    "donate.monthly": "Monthly Support",
    "donate.monthly.desc": "Become a regular supporter with monthly donations.",
    "donate.monthly.button": "Become a Supporter",
    "donate.recommended": "Recommended",
    "donate.memorial": "Memorial Donation",
    "donate.memorial.desc": "Make a donation in memory of a loved one.",
    "donate.memorial.button": "Donate in Memoriam",
    "donate.bank.title": "Bank Transfer Details",
    "donate.bank.desc":
      "You can make a direct bank transfer to our church account:",
    "donate.bank.name": "Bank: Nordea Bank",
    "donate.bank.account": "Account Name: Orthodox Church in Stockholm",
    "donate.bank.number": "Account Number: 1234-5678-9012",
    "donate.bank.iban": "IBAN: SE45 5000 0000 0583 9825 7466",
    "donate.bank.swift": "BIC/SWIFT: NDEASESS",
    "donate.bank.reference":
      'Please include your name and "Donation" in the reference field.',
    "donate.otherways": "Other Ways to Support",
    "donate.volunteer.title": "Volunteer Your Time",
    "donate.volunteer.desc":
      "We always need volunteers to help with various aspects of church operations and events. Whether it's helping with maintenance, assisting with liturgical needs, or organizing events, your time is valuable to us.",
    "donate.volunteer.link": "Contact us to volunteer →",
    "donate.items.title": "Donate Items",
    "donate.items.desc":
      "Our church welcomes donations of liturgical items, icons, books, and other resources that support our worship and educational activities. We also collect non-perishable food items and clothing for our community outreach programs.",
    "donate.items.link": "Contact us about item donations →",
    "donate.form.title": "Online Donation Form",
    "donate.form.amount": "Select Amount",
    "donate.form.other": "Other amount",
    "donate.form.type": "Donation Type",
    "donate.form.type.general": "General Support",
    "donate.form.type.building": "Building Maintenance",
    "donate.form.type.outreach": "Community Outreach",
    "donate.form.type.education": "Religious Education",
    "donate.form.type.memorial": "In Memory Of",
    "donate.form.info": "Personal Information",
    "donate.form.firstName": "First Name",
    "donate.form.lastName": "Last Name",
    "donate.form.email": "Email Address",
    "donate.form.recurring": "Make this a monthly recurring donation",
    "donate.form.message": "Optional message",
    "donate.thanks": "Thank you for your generosity!",

    // Footer
    "footer.address": "Address",
    "footer.phone": "Phone",
    "footer.email": "Email",
    "footer.rights": "All Rights Reserved",
    "footer.aboutUs": "About Us",
    "footer.services": "Services",
    "footer.contact": "Contact",
  },
  sv: {
    // Navigation
    "nav.home": "Hem",
    "nav.aboutUs": "Om Oss",
    "nav.calendar": "Kalender",
    "nav.blog": "Blogg",
    "nav.contact": "Kontakt",
    "nav.donate": "Donera",
    "nav.articles": "Artiklar",
    "nav.services": "Tjänster",

    // Home Page
    "home.welcome": "Välkommen till",
    "home.church": "Sveti Sava Ortodoxa Kyrkan",
    "home.intro": "Ett andligt hem för ortodoxa troende i Stockholm.",
    "home.learnMore": "Läs Mer",
    "home.upcomingServices": "Kommande Tjänster",
    "home.upcomingEvents": "Kommande Evenemang",
    "home.priestMessage": "Meddelande från Prästen",
    "home.readMore": "Läs Mer",
    "home.visitUs": "Besök Oss",
    "home.location": "Bägerstavägen 68, 120 47 Enskede Gård, Sverige",
    "home.contactInfo": "Kontakt",
    "home.phone": "Telefon: +46 8 123 456 78",
    "home.email": "E-post: info@svetisava-stockholm.se",
    "home.officeHours": "Öppettider: Måndag till fredag, 9:00 - 16:00",
    "home.contactUs": "Kontakta Oss",

    // Services
    "services.schedule": "Tjänsteschema",
    "services.sunday": "Söndagsgudstjänst",
    "services.vespers": "Lördagsvesper",
    "services.specialServices": "Speciella Tjänster",
    "services.time": "Tid",
    "services.calendar": "Kalender",

    // Articles
    "articles.title": "Artiklar",
    "articles.subtitle":
      "Nyheter, evenemang, texter och innehåll från vår gemenskap",
    "articles.filter.all": "Alla",
    "articles.filter.news": "Nyheter",
    "articles.filter.happenings": "Evenemang",
    "articles.filter.texts": "Texter",
    "articles.filter.community": "Gemenskap",
    "articles.filter.history": "Historia",
    "articles.readMore": "Läs Mer",

    // About
    "about.title": "Om Vår Kyrka",
    "about.history": "Vår Historia",
    "about.priest": "Vår Präst",
    "about.community": "Vår Gemenskap",
    "about.history.p1":
      "Den serbisk-ortodoxa kyrkan Sveti Sava i Stockholm grundades 1985 av serbiska invandrare som hade kommit till Sverige för att söka ett bättre liv. Det som började som små bönsamlingar i medlemmarnas hem växte till en livlig församlingsgemenskap dedikerad till att bevara serbisk-ortodoxa traditioner i Skandinavien.",
    "about.history.p2":
      "År 1992 köpte gemenskapen sin nuvarande byggnad, en historisk struktur från tidigt 1900-tal, som invigdes som ortodox kyrka efter omfattande renoveringar. Kyrkan namngavs till Sveti Savas ära, Serbiens skyddshelgon och den första ärkebiskopen i den autokefala serbisk-ortodoxa kyrkan.",
    "about.history.p3":
      "Idag betjänar vår församling ortodoxa kristna från olika etniska bakgrunder, inklusive serbiska, grekiska, ryska, rumänska och svenska konvertiter, vilket återspeglar den ortodoxa mångfalden i Stockholm.",
    "about.history.p4":
      "Vår kyrka är utsmyckad med traditionell ikonografi målad av lokala och internationella ikonmålare, enligt den bysantinska traditionen. Interiören har en handsnidad träikonostas importerad från Serbien 2005, som avbildar helgon som särskilt vördas i den serbisk-ortodoxa traditionen.",
    "about.saintsava.title": "Sveti Sava: Den Första Serbiska Ärkebiskopen",
    "about.saintsava.subtitle": "Helgonet Savas Liv och Arv",
    "about.saintsava.p1":
      "Helgonet Sava (1174-1236), född Rastko Nemanjić, var den yngste sonen till Stefan Nemanja, Serbiens storhertig. Trots att han var prins med alla bekvämligheter som hör till det kungliga livet, drogs den unge Rastko till andliga frågor från tidig ålder.",
    "about.saintsava.p2":
      "Vid 17 års ålder lämnade Rastko sin fars hov och reste till Athos, centrum för ortodox monasticism, där han blev munk och tog namnet Sava. Hans far anslöt sig senare till honom och tog munklöften som Simeon. Tillsammans grundade de Hilandar-klostret på Athos, som förblir ett viktigt serbiskt andligt centrum till denna dag.",
    "about.saintsava.p3":
      "Helgonet Savas största bedrift kom 1219 när han framgångsrikt förhandlade fram autokefali (självständighet) för den serbisk-ortodoxa kyrkan och blev dess första ärkebiskop. Detta var ett avgörande ögonblick i serbisk historia, eftersom det etablerade både den religiösa och nationella identiteten för det serbiska folket.",
    "about.saintsava.p4":
      'Utöver sin kyrkliga roll var Sava också diplomat, lagstiftare, författare och pedagog. Han grundade skolor, sjukhus och kloster i hela Serbien och författade Nomokanonon, Serbiens första konstitution och lagkodex. Hans bidrag till serbisk kultur, lag och utbildning gav honom titeln "Serbernas upplysare".',
    "about.saintsava.p5":
      "Helgonet Sava dog den 14 januari 1236, under en återresa från en pilgrimsfärd till Det heliga landet. Han firas den 27 januari i den ortodoxa kalendern. Hans arv fortsätter att inspirera ortodoxa kristna världen över och representerar den ideala harmonin mellan andlig hängivenhet och praktisk tjänst för ens gemenskap och nation.",
    "about.priest.title": "Fader Nicholas Petrovic",
    "about.priest.p1":
      "Fader Nicholas prästvigdes 1998 efter att ha avslutat sina teologiska studier vid Ortodoxa Teologiska Fakulteten vid Belgrads universitet och St. Vladimirs Ortodoxa Teologiska Seminarium i USA.",
    "about.priest.p2":
      "Innan han ledde vår församling, tjänade Fader Nicholas gemenskaper i Serbien och Storbritannien. Han har varit vår församlingspräst sedan 2010.",
    "about.priest.p3":
      "Fader Nicholas talar flytande serbiska, engelska och svenska, och fortsätter att lära sig grekiska för att bättre tjäna vår mångfaldiga gemenskap. Han är känd för sitt varma pastorala förhållningssätt och engagemang för ortodox utbildning.",
    "about.priest.p4":
      "Hans vision för vår församling fokuserar på att bevara serbisk-ortodoxa traditioner samtidigt som de görs tillgängliga för alla generationer och kulturella bakgrunder.",
    "about.gallery.title": "Kyrkogalleri",
    "about.location.title": "Kyrkans Plats och Öppettider",
    "about.hours.title": "Öppettider",
    "about.directions.title": "Vägbeskrivning",
    "about.directions.public":
      "Med kollektivtrafik: 5 minuters promenad från Östermalmstorgs tunnelbanestation.",
    "about.directions.bus":
      "Med buss: Busslinjerna 4 och 72 stannar nära kyrkan.",
    "about.directions.car":
      "Med bil: Begränsad parkering tillgänglig på Birger Jarlsgatan.",
    "about.contact.title": "Kontaktinformation",
    "about.contact.address": "Adress",
    "about.contact.phone": "Telefon",
    "about.contact.email": "E-post",
    "about.contact.priest": "Präst",
    "about.community.p1":
      "Vår församlingsgemenskap är mångfaldig och livfull, bestående av ortodoxa kristna från olika kulturella bakgrunder. Vi förenas av vår gemensamma tro och engagemang för att leva det ortodoxa livssättet i Stockholm.",
    "about.community.stats.families": "Familjer",
    "about.community.stats.nationalities": "Nationaliteter",
    "about.community.stats.years": "År av Tjänst",
    "about.community.p2":
      "Vi erbjuder en rad olika tjänster och aktiviteter utöver gudstjänsterna, inklusive:",
    "about.community.activities.sunday": "Söndagsskola för barn i alla åldrar",
    "about.community.activities.youth":
      "Ungdomsgrupp för tonåringar och unga vuxna",
    "about.community.activities.bible": "Bibelstudier och katekesklasser",
    "about.community.activities.charity":
      "Välgörenhetsarbete för lokalsamhället",
    "about.community.activities.cultural":
      "Kulturella evenemang som firar ortodoxa traditioner",
    "about.community.activities.fellowship":
      "Gemenskapsmåltider efter söndagstjänsterna",
    "about.community.p3":
      "Oavsett om du är en livslång ortodox kristen eller helt enkelt nyfiken på den ortodoxa tron, välkomnar vi dig att besöka oss och bli en del av vår gemenskap.",

    // Calendar/Events
    "events.title": "Kommande Evenemang",
    "events.calendar": "Evenemangskalender",
    "events.services": "Tjänster",
    "events.all": "Alla",
    "events.regularServices": "Regelbundna Tjänster",
    "events.specialServices": "Speciella Tjänster",
    "events.day": "Dag",
    "events.service": "Tjänst",
    "events.time": "Tid",
    "events.description": "Beskrivning",
    "events.noEvents": "Inga kommande evenemang just nu.",
    "events.location": "Plats",
    "events.communityActivities": "Gemenskapsaktiviteter",
    "events.sundaySchool": "Söndagsskola",
    "events.sundaySchool.desc":
      "Veckoklasser för barn att lära sig om den ortodoxa tron och traditionerna.",
    "events.bibleStudy": "Bibelstudier",
    "events.bibleStudy.desc":
      "Regelbundna skriftstudier och diskussionsgrupper för vuxna i alla åldrar.",
    "events.charity": "Välgörenhetsarbete",
    "events.charity.desc":
      "Tillreda måltider och samla in donationer till lokala härbärgen.",
    "events.getInvolved":
      "Vill du engagera dig? Vi välkomnar volontärer till alla våra gemenskapsaktiviteter!",

    // Contact
    "contact.info": "Kontaktinformation",
    "contact.address.title": "Adress",
    "contact.address.line1": "Birger Jarlsgatan 98",
    "contact.address.line2": "114 20 Stockholm",
    "contact.address.line3": "Sverige",
    "contact.phone.title": "Telefon",
    "contact.phone.main": "Huvudkontor: +46 8 123 456 78",
    "contact.phone.priest": "Fader Nicholas: +46 8 123 456 79",
    "contact.email.title": "E-post",
    "contact.email.general": "Allmänna frågor: info@orthodoxstockholm.se",
    "contact.email.priest":
      "Fader Nicholas: father.nicholas@orthodoxstockholm.se",
    "contact.hours.title": "Öppettider",
    "contact.hours.weekdays": "Måndag till fredag: 9:00 - 16:00",
    "contact.hours.saturday": "Lördag: Efter överenskommelse",
    "contact.hours.sunday": "Söndag: Stängt (Kom på vår gudstjänst)",
    "contact.form.title": "Skicka oss ett Meddelande",
    "contact.form.name": "Namn",
    "contact.form.email": "E-post",
    "contact.form.subject": "Ämne",
    "contact.form.message": "Meddelande",
    "contact.form.submit": "Skicka Meddelande",
    "contact.findus": "Hitta Oss",
    "contact.directions.title": "Vägbeskrivning",

    // Donate
    "donate.title": "Stöd Vår Kyrka",
    "donate.text": "Hjälp till att stödja kyrkans uppdrag och arbete.",
    "donate.button": "Gör en Donation",
    "donate.options": "Donationsalternativ",
    "donate.onetime": "Engångsdonation",
    "donate.onetime.desc":
      "Stöd vår kyrka med en enstaka donation av valfritt belopp.",
    "donate.onetime.button": "Donera Nu",
    "donate.monthly": "Månadsgivande",
    "donate.monthly.desc":
      "Bli en regelbunden givare med månatliga donationer.",
    "donate.monthly.button": "Bli Månadsgivare",
    "donate.recommended": "Rekommenderas",
    "donate.memorial": "Minnesdonation",
    "donate.memorial.desc": "Ge en donation till minne av en älskad.",
    "donate.memorial.button": "Donera till Minne",
    "donate.bank.title": "Bankgiroinformation",
    "donate.bank.desc":
      "Du kan göra en direkt banköverföring till vårt kyrkokonto:",
    "donate.bank.name": "Bank: Nordea Bank",
    "donate.bank.account": "Kontonamn: Ortodoxa Kyrkan i Stockholm",
    "donate.bank.number": "Kontonummer: 1234-5678-9012",
    "donate.bank.iban": "IBAN: SE45 5000 0000 0583 9825 7466",
    "donate.bank.swift": "BIC/SWIFT: NDEASESS",
    "donate.bank.reference":
      'Vänligen inkludera ditt namn och "Donation" i meddelandefältet.',
    "donate.otherways": "Andra Sätt att Stödja",
    "donate.volunteer.title": "Volontärarbete",
    "donate.volunteer.desc":
      "Vi behöver alltid volontärer för att hjälpa till med olika aspekter av kyrkans verksamhet och evenemang. Vare sig det handlar om att hjälpa till med underhåll, bistå med liturgiska behov eller organisera evenemang, din tid är värdefull för oss.",
    "donate.volunteer.link": "Kontakta oss för att bli volontär →",
    "donate.items.title": "Donera Föremål",
    "donate.items.desc":
      "Vår kyrka välkomnar donationer av liturgiska föremål, ikoner, böcker och andra resurser som stöder vår gudstjänst och utbildningsverksamhet. Vi samlar också in icke-färskvaror och kläder för våra gemenskapsprogram.",
    "donate.items.link": "Kontakta oss angående föremålsdonationer →",
    "donate.form.title": "Online Donationsformulär",
    "donate.form.amount": "Välj Belopp",
    "donate.form.other": "Annat belopp",
    "donate.form.type": "Donationstyp",
    "donate.form.type.general": "Allmänt Stöd",
    "donate.form.type.building": "Byggnadsunderhåll",
    "donate.form.type.outreach": "Gemenskapsinsatser",
    "donate.form.type.education": "Religiös Utbildning",
    "donate.form.type.memorial": "Till Minne Av",
    "donate.form.info": "Personlig Information",
    "donate.form.firstName": "Förnamn",
    "donate.form.lastName": "Efternamn",
    "donate.form.email": "E-postadress",
    "donate.form.recurring":
      "Gör detta till en månadsvis återkommande donation",
    "donate.form.message": "Valfritt meddelande",
    "donate.thanks": "Tack för din generositet!",

    // Footer
    "footer.address": "Adress",
    "footer.phone": "Telefon",
    "footer.email": "E-post",
    "footer.rights": "Alla rättigheter förbehållna",
  },
  sr_lat: {
    // Navigation
    "nav.home": "Početna",
    "nav.aboutUs": "O nama",
    "nav.calendar": "Kalendar",
    "nav.blog": "Blog",
    "nav.contact": "Kontakt",
    "nav.donate": "Doniraj",
    "nav.articles": "Članci",
    "nav.services": "Službe",

    // Home Page
    "home.welcome": "Dobrodošli u",
    "home.church": "Pravoslavna Crkva Sveti Sava",
    "home.intro": "Duhovni dom za pravoslavne vernike u Stokholmu.",
    "home.learnMore": "Saznajte više",
    "home.upcomingServices": "Predstojeće službe",
    "home.upcomingEvents": "Predstojeći događaji",
    "home.priestMessage": "Poruka od sveštenika",
    "home.readMore": "Pročitajte više",
    "home.visitUs": "Posetite nas",
    "home.location": "Bägerstavägen 68, 120 47 Enskede Gård, Švedska",
    "home.contactInfo": "Kontakt",
    "home.phone": "Telefon: +46 8 123 456 78",
    "home.email": "Email: info@svetisava-stockholm.se",
    "home.officeHours": "Radno vreme: Ponedeljak do petak, 9:00 - 16:00",
    "home.contactUs": "Kontaktirajte nas",

    // Services
    "services.schedule": "Raspored službi",
    "services.sunday": "Nedeljna Liturgija",
    "services.vespers": "Večernja služba subotom",
    "services.specialServices": "Posebne službe",
    "services.time": "Vreme",
    "services.calendar": "Kalendar",

    // Articles
    "articles.title": "Članci",
    "articles.subtitle":
      "Vesti, događaji, tekstovi i sadržaj iz naše zajednice",
    "articles.filter.all": "Sve",
    "articles.filter.news": "Vesti",
    "articles.filter.happenings": "Događaji",
    "articles.filter.texts": "Tekstovi",
    "articles.filter.community": "Zajednica",
    "articles.filter.history": "Istorija",
    "articles.readMore": "Pročitaj više",

    // About
    "about.title": "O našoj crkvi",
    "about.history": "Naša istorija",
    "about.priest": "Naš sveštenik",
    "about.community": "Naša zajednica",
    "about.history.p1":
      "Srpska pravoslavna crkva Svetog Save u Stokholmu osnovana je 1985. godine od strane srpskih imigranata koji su došli u Švedsku u potrazi za boljim životom. Ono što je počelo kao mali molitveni skupovi u domovima vernika preraslo je u živu parohijsku zajednicu posvećenu očuvanju srpskih pravoslavnih tradicija u Skandinaviji.",
    "about.history.p2":
      "Godine 1992. zajednica je kupila svoju sadašnju zgradu, istorijsku strukturu koja datira s početka 20. veka, koja je osvećena kao pravoslavna crkva nakon opsežnih renoviranja. Crkva je dobila ime u čast Svetog Save, zaštitnika Srbije i prvog arhiepiskopa autokefalne Srpske pravoslavne crkve.",
    "about.history.p3":
      "Danas, naša parohija služi pravoslavnim hrišćanima različitih etničkih porekla, uključujući srpsko, grčko, rusko, rumunsko, kao i švedske preobraćenike, odražavajući raznolikost pravoslavlja u Stokholmu.",
    "about.history.p4":
      "Naša crkva je ukrašena tradicionalnom ikonografijom koju su oslikali lokalni i međunarodni ikonografi, prateći vizantijsku tradiciju. Enterijer sadrži ručno izrezbaren drveni ikonostas uvezen iz Srbije 2005. godine, prikazujući svece koji se posebno poštuju u srpskoj pravoslavnoj tradiciji.",
    "about.saintsava.title": "Sveti Sava: Prvi srpski arhiepiskop",
    "about.saintsava.subtitle": "Život i nasleđe Svetog Save",
    "about.saintsava.p1":
      "Sveti Sava (1174-1236), rođen kao Rastko Nemanjić, bio je najmlađi sin Stefana Nemanje, velikog župana Srbije. Uprkos tome što je bio princ sa svim udobnostima kraljevskog života, mladi Rastko je od rane mladosti bio privučen duhovnim stvarima.",
    "about.saintsava.p2":
      "Sa 17 godina, Rastko je napustio očev dvor i otputovao na Svetu Goru, centar pravoslavnog monaštva, gde je postao monah i uzeo ime Sava. Njegov otac mu se kasnije pridružio, uzevši monaške zavete kao Simeon. Zajedno su osnovali manastir Hilandar na Svetoj Gori, koji do danas ostaje važan srpski duhovni centar.",
    "about.saintsava.p3":
      "Najveće dostignuće Svetog Save došlo je 1219. godine kada je uspešno ispregovarao autokefalnost (nezavisnost) Srpske pravoslavne crkve i postao njen prvi arhiepiskop. Ovo je bio ključni trenutak u srpskoj istoriji, jer je ustanovio i verski i nacionalni identitet srpskog naroda.",
    "about.saintsava.p4":
      'Osim svoje crkvene uloge, Sveti Sava je bio i diplomata, zakonodavac, pisac i prosvetitelj. Osnivao je škole, bolnice i manastire širom Srbije, i autor je Nomokanona (Zakonopravila), prvog srpskog ustava i zakonika. Njegovi doprinosi srpskoj kulturi, pravu i obrazovanju doneli su mu titulu "Prosvetitelj Srba".',
    "about.saintsava.p5":
      "Sveti Sava je preminuo 14. januara 1236. godine, vraćajući se sa hodočašća u Svetu zemlju. Slavi se 27. januara po pravoslavnom kalendaru. Njegovo nasleđe nastavlja da inspiriše pravoslavne hrišćane širom sveta, predstavljajući idealni sklad između duhovne posvećenosti i praktične službe svojoj zajednici i naciji.",
    "about.priest.title": "Otac Nikola Petrović",
    "about.priest.p1":
      "Otac Nikola je rukopoložen za sveštenika 1998. godine nakon završetka teoloških studija na Pravoslavnom bogoslovskom fakultetu Univerziteta u Beogradu i Pravoslavnom teološkom seminaru Sv. Vladimira u Sjedinjenim Državama.",
    "about.priest.p2":
      "Pre vođenja naše parohije, otac Nikola je služio zajednicama u Srbiji i Ujedinjenom Kraljevstvu. Naš parohijski sveštenik je od 2010. godine.",
    "about.priest.p3":
      "Otac Nikola tečno govori srpski, engleski i švedski, a nastavlja da uči grčki kako bi bolje služio našoj raznolikoj zajednici. Poznat je po svom toplom pastoralnom pristupu i posvećenosti pravoslavnom obrazovanju.",
    "about.priest.p4":
      "Njegova vizija za našu parohiju fokusirana je na očuvanje srpskih pravoslavnih tradicija, uz istovremeno činjenje istih pristupačnim svim generacijama i kulturnim pozadinama.",
    "about.gallery.title": "Galerija crkve",
    "about.location.title": "Lokacija crkve i radno vreme",
    "about.hours.title": "Radno vreme",
    "about.directions.title": "Uputstva",
    "about.directions.public":
      "Javnim prevozom: 5 minuta hoda od metro stanice Östermalmstorg.",
    "about.directions.bus":
      "Autobusom: Autobuske linije 4 i 72 staju blizu crkve.",
    "about.directions.car":
      "Automobilom: Ograničen parking dostupan na Birger Jarlsgatan.",
    "about.contact.title": "Kontakt informacije",
    "about.contact.address": "Adresa",
    "about.contact.phone": "Telefon",
    "about.contact.email": "Email",
    "about.contact.priest": "Sveštenik",
    "about.community.p1":
      "Naša parohijska zajednica je raznovrsna i puna života, sastavljena od pravoslavnih hrišćana različitih kulturnih pozadina. Ujedinjeni smo zajedničkom verom i posvećenošću življenju pravoslavnog načina života u Stokholmu.",
    "about.community.stats.families": "Porodica",
    "about.community.stats.nationalities": "Nacionalnosti",
    "about.community.stats.years": "Godina službe",
    "about.community.p2":
      "Nudimo niz službi i aktivnosti osim bogosluženja, uključujući:",
    "about.community.activities.sunday": "Nedeljnu školu za decu svih uzrasta",
    "about.community.activities.youth":
      "Omladinsku grupu za tinejdžere i mlade odrasle",
    "about.community.activities.bible":
      "Proučavanje Biblije i časove veronauke",
    "about.community.activities.charity":
      "Humanitarni rad u lokalnoj zajednici",
    "about.community.activities.cultural":
      "Kulturne događaje koji slave pravoslavne tradicije",
    "about.community.activities.fellowship":
      "Zajedničke obroke nakon nedeljnih službi",
    "about.community.p3":
      "Bez obzira da li ste celoživotni pravoslavni hrišćanin ili jednostavno radoznali o pravoslavnoj veri, pozivamo vas da nas posetite i postanete deo naše zajednice.",

    // Calendar/Events
    "events.title": "Predstojeći događaji",
    "events.calendar": "Kalendar događaja",
    "events.services": "Službe",
    "events.all": "Sve",
    "events.regularServices": "Redovne službe",
    "events.specialServices": "Posebne službe",
    "events.day": "Dan",
    "events.service": "Služba",
    "events.time": "Vreme",
    "events.description": "Opis",
    "events.noEvents": "Nema predstojećih događaja u ovom trenutku.",
    "events.location": "Lokacija",
    "events.communityActivities": "Aktivnosti zajednice",
    "events.sundaySchool": "Nedeljnja škola",
    "events.sundaySchool.desc":
      "Nedeljni časovi za decu da uče o pravoslavnoj veri i tradicijama.",
    "events.bibleStudy": "Proučavanje Biblije",
    "events.bibleStudy.desc":
      "Redovno proučavanje Svetog pisma i diskusione grupe za odrasle svih uzrasta.",
    "events.charity": "Humanitarni rad",
    "events.charity.desc":
      "Priprema obroka i prikupljanje donacija za lokalna skloništa za beskućnike.",
    "events.getInvolved":
      "Želite da se uključite? Pozdravljamo volontere za sve naše aktivnosti zajednice!",

    // Contact
    "contact.info": "Kontakt informacije",
    "contact.address.title": "Adresa",
    "contact.address.line1": "Birger Jarlsgatan 98",
    "contact.address.line2": "114 20 Stockholm",
    "contact.address.line3": "Švedska",
    "contact.phone.title": "Telefon",
    "contact.phone.main": "Glavna kancelarija: +46 8 123 456 78",
    "contact.phone.priest": "Otac Nikola: +46 8 123 456 79",
    "contact.email.title": "Email",
    "contact.email.general": "Opšti upiti: info@orthodoxstockholm.se",
    "contact.email.priest": "Otac Nikola: father.nicholas@orthodoxstockholm.se",
    "contact.hours.title": "Radno vreme",
    "contact.hours.weekdays": "Ponedeljak do petak: 9:00 - 16:00",
    "contact.hours.saturday": "Subota: Po dogovoru",
    "contact.hours.sunday":
      "Nedelja: Zatvoreno (Pridružite nam se na Liturgiji)",
    "contact.form.title": "Pošaljite nam poruku",
    "contact.form.name": "Ime",
    "contact.form.email": "Email",
    "contact.form.subject": "Predmet",
    "contact.form.message": "Poruka",
    "contact.form.submit": "Pošalji poruku",
    "contact.findus": "Pronađite nas",
    "contact.directions.title": "Uputstva",

    // Donate
    "donate.title": "Podržite našu crkvu",
    "donate.text": "Pomozite da podržimo misiju i rad naše crkve.",
    "donate.button": "Donirajte",
    "donate.options": "Opcije za doniranje",
    "donate.onetime": "Jednokratna donacija",
    "donate.onetime.desc":
      "Podržite našu crkvu jednokratnom donacijom bilo kog iznosa.",
    "donate.onetime.button": "Donirajte sada",
    "donate.monthly": "Mesečna podrška",
    "donate.monthly.desc": "Postanite redovni donator sa mesečnim donacijama.",
    "donate.monthly.button": "Postanite donator",
    "donate.recommended": "Preporučeno",
    "donate.memorial": "Memorijalna donacija",
    "donate.memorial.desc": "Dajte donaciju u sećanje na voljenu osobu.",
    "donate.memorial.button": "Donirajte za pomen",
    "donate.bank.title": "Detalji bankovnog transfera",
    "donate.bank.desc":
      "Možete izvršiti direktan bankovni transfer na račun naše crkve:",
    "donate.bank.name": "Banka: Nordea Bank",
    "donate.bank.account": "Ime računa: Pravoslavna crkva u Stokholmu",
    "donate.bank.number": "Broj računa: 1234-5678-9012",
    "donate.bank.iban": "IBAN: SE45 5000 0000 0583 9825 7466",
    "donate.bank.swift": "BIC/SWIFT: NDEASESS",
    "donate.bank.reference":
      'Molimo uključite svoje ime i "Donacija" u polju za reference.',
    "donate.otherways": "Drugi načini podrške",
    "donate.volunteer.title": "Volontirajte svoje vreme",
    "donate.volunteer.desc":
      "Uvek nam trebaju volonteri da pomognu sa raznim aspektima crkvenih operacija i događaja. Bilo da pomažete oko održavanja, asistiranja sa liturgijskim potrebama ili organizovanjem događaja, vaše vreme nam je dragoceno.",
    "donate.volunteer.link": "Kontaktirajte nas za volontiranje →",
    "donate.items.title": "Donirajte predmete",
    "donate.items.desc":
      "Naša crkva pozdravlja donacije liturgijskih predmeta, ikona, knjiga i drugih resursa koji podržavaju naše bogosluženje i obrazovne aktivnosti. Takođe prikupljamo nekvarljivu hranu i odeću za naše programe pomoći zajednici.",
    "donate.items.link": "Kontaktirajte nas o donacijama predmeta →",
    "donate.form.title": "Online formular za donacije",
    "donate.form.amount": "Izaberite iznos",
    "donate.form.other": "Drugi iznos",
    "donate.form.type": "Tip donacije",
    "donate.form.type.general": "Opšta podrška",
    "donate.form.type.building": "Održavanje zgrade",
    "donate.form.type.outreach": "Rad sa zajednicom",
    "donate.form.type.education": "Versko obrazovanje",
    "donate.form.type.memorial": "Za pomen",
    "donate.form.info": "Lični podaci",
    "donate.form.firstName": "Ime",
    "donate.form.lastName": "Prezime",
    "donate.form.email": "Email adresa",
    "donate.form.recurring": "Učinite ovo mesečnom ponavljajućom donacijom",
    "donate.form.message": "Opciona poruka",
    "donate.thanks": "Hvala na vašoj velikodušnosti!",

    // Footer
    "footer.address": "Adresa",
    "footer.phone": "Telefon",
    "footer.email": "E-pošta",
    "footer.rights": "Sva prava zadržana",
  },
  sr_cyr: {
    // Navigation
    "nav.home": "Насловна",
    "nav.aboutUs": "О храму и Светом Сави",
    "nav.calendar": "Расрпоред богослужења",
    "nav.blog": "Актуелно",
    "nav.contact": "Контакт",
    "nav.donate": "Донирај",
    "nav.articles": "Чланци",
    "nav.services": "Службе",

    // Home Page
    "home.welcome": "Добродошли у",
    "home.churchFullName": "Црква Светог Саве",
    "home.churchShortName": "Црква Светог Саве",
    "home.church": "Црква Светог Саве",
    "home.intro": "Српска православна црква у Стокхолму",
    "home.learnMore": "О храму и Светом Сави",
    "home.announcements": "Обавештење",
    "home.upcomingServices": "Предстојеће службе",
    "home.upcomingEvents": "Предстојећи догађаји",
    "home.priestMessage": "Порука од свештеника",
    "home.readMore": "Прочитајте више",
    "home.visitUs": "Посетите нас",
    "home.location": "Bägerstavägen 68, 120 47 Enskede Gård, Шведска",
    "home.contactInfo": "Контакт",
    "home.phone": "Телефон:",
    "home.phoneValue": "+46 8 123 456 78",
    "home.email": "Имејл:",
    "home.emailValue": "info@svetisava-stockholm.se",
    "home.officeHours": "Радно време:",
    "home.officeHoursValue": "Понедељак - петак, 9:00 - 16:00",
    "home.officeHoursValue.info": "Осим уколико није другачије назначено",
    "home.contactUs": "Контактирајте нас",
    "home.latestArticles": "Актуелно",
    "home.viewAllArticles": "Детаљније",
    "home.viewAll": "Види све",
    "home.viewFullCalendar": "Види цео распоред",
    "home.priests.title": "Свештеници",
    "home.visitOurChurch": "Посетите цркву",
    "home.visitOurChurchIntro":
      "Српска православна црква у Стокхолму смештена је у насељу Енскеде, познатом по својим мирним улицама, зеленим површинама и породичној атмосфери. У близини се налазе школе, паркови и јавни превоз, што ово подручје чини лако доступним и пријатним за посету.",
    "home.addressLabel": "Адреса:",
    "home.address": "Bägerstavägen 68, 120 47 Enskede Gård, Stockholm, Шведска",
    "home.getDirections": "Путоказ",
    "home.churchIntro":
      "За све информације, питања или духовне разговоре, можете нам се обратити путем телефона или електронске поште. Црква је отворена за све који желе контакт, помоћ или благослов.",
    "home.publishDate": "Датум објаве: ",

    //Priests
    "priests.father1.name": "Отац Душан Раковић",
    "priests.father1.title": "Протојереј Ставрофор",
    "priests.father1.phone": "Контакт: 073 501 66 95",
    "priests.father1.greeting":
      "Отац Душан Раковић дугогодишњи је парох и стуб наше црквене заједнице у Стокхолму. Познат је по својој мудрости, мирноћи и преданој пастирској бризи за све вернике.",

    "priests.father2.name": "Отац Арсеније Гардовић",
    "priests.father2.title": "Протојереј Ставрофор",
    "priests.father2.phone": "Контакт: 073 717 14 61",
    "priests.father2.greeting":
      "Отац Арсеније Гардовић уноси топлину и присност у свакодневни живот парохије. Посебно је посвећен раду са породицама и очувању православне традиције међу верницима у дијаспори.",

    "priests.father3.name": "Отац Димитрије Раковић",
    "priests.father3.title": "Протонамесник",
    "priests.father3.phone": "Контакт: 073 023 67 60",
    "priests.father3.greeting":
      "Отац Димитрије Раковић представља млађу снагу свештенства са искреним приступом и блиским односом према омладини. Активно ради на повезивању младих са црквом кроз савремени и отворен дијалог.",

    // Services
    "services.schedule": "Распоред богослужења",
    "services.sunday": "Недељна Литургија",

    "services.vespers": "Вечерња служба суботом",
    "services.specialServices": "Посебне службе",
    "services.time": "Време",
    "services.calendar": "Календар",

    // Articles
    "articles.title": "Чланци",
    "articles.subtitle":
      "Вести, догађаји, текстови и садржај из наше заједнице",
    "articles.filter.all": "Све",
    "articles.filter.news": "Вести",
    "articles.filter.happenings": "Догађаји",
    "articles.filter.texts": "Текстови",
    "articles.filter.community": "Заједница",
    "articles.filter.history": "Историја",
    "articles.readMore": "Прочитај више",

    // About
    "about.title": "О нашој цркви",
    "about.intro":
      "Српска православна црква у Стокхолму је духовни дом за све који желе да живе вером, очувају традицију и буду део топле заједнице у срцу Шведске.",
    "about.history": "Наша историја",
    "about.parishToday.title": "Српска Православна Црква у Стокхолму",
    "about.parishToday.p1":
      "Српска православна црква у Стокхолму представља духовно и културно средиште српске заједнице у Шведској. Основана као потреба верника који су у Шведску доселили из различитих крајева бивше Југославије, ова црква више од пола века игра важну улогу у очувању верског и националног идентитета Срба у расејању.",
    "about.parishToday.p2":
      "Храм посвећен Светом Сави налази се у стокхолмском насељу Енскеде Горд (Enskede Gård), на адреси Bägerstavägen 68. Ова црква служи као место окупљања не само ради молитве и богослужења, већ и као центар духовног, културног и друштвеног живота за бројне породице и појединце.",
    "about.parishToday.p3":
      "Богослужења се редовно одржавају на српском језику, у складу са православним календаром, укључујући недељне литургије, празничне службе и свете тајне — крштења, венчања и опела. У оквиру цркве делује и школа српског језика и веронауке за децу, као и хор, фолклорна секција и бројна друга удружења која помажу у неговању традиције.",
    "about.parishToday.p4":
      "Српска православна заједница у Стокхолму активно учествује у међуцрквеним и мултикултурним иницијативама у Шведској, градећи мостове разумевања и сарадње са другим верским и етничким групама.",
    "about.parishToday.p5":
      "Црква је отворена за све који желе да се приближе православној вери, без обзира на порекло.",

    "about.historyText.p1":
      "Изградња храма Светог Саве започела је 1990. године, у његовом звонику подигнута је капела посвећена Светом Василију Острошком. Припата цркве је пространа, испуњена цвећем, насадима винове лозе, смокава и маслина, остакљена је и повезана са парохијском канцеларијом, салом за учење српског језика и владичанском канцеларијом. У оквиру парохијског дома налази се и стан који користи епархијски архијереј. У приземљу се налази велика сала која се користи као место окупљања верника после богослужења и као место за организацију културних манифестација, од изложби до књижевних вечери, црквених и фамилијарних свечаности.",

    "about.historyText.p2":
      "Камен темељац храма освештан је од стране тадашњег епископа британско-скандинавског Доситеја Мотике и епископа славонског Лукијана Пантелића, 4. фебруара 1990. године. Црква се налази на месту где је пре била Бегершта црква, која је купљена у јануару 1983. године. Радови на храму су званично завршени у априлу 2014. године, када је иконописац Гојко Ристановић довршио рад оца Тимотеја Косановића, који је био рукоположен у овом храму. У недељу 5. октобра 2014. године, храм је освештан од стране патријарха српског Иринеја. Током освећења храма, саслуживали су високопреосвећени и преосвећени архијереји Српске православне цркве и православних цркава: митрополит Клепопа из Цариградске патријаршије, епископ Макарије из Румунске православне цркве, митрополит загребачко-љубљански Порфирије Перић, епископ канадски Георгије Ђокић, епископ бачки Иринеј Буловић, епископ јегарски Јероним Мочевић, надлежни епископ британско-скандинавски и епископ британско-скандинавски Доситеј Мотика са више од 30 свештеника и ђакона. Свечаности су присуствовали уз бројан народ и престолонаследник Александар Карађорђевић, принцеза Катарина Карађорђевић, као и представници других православних цркви, Римокатоличке и Протестантске цркве Швеске.",

    "about.priest": "Наш свештеник",
    "about.community": "Наша заједница",
    "about.history.p1":
      "Српска православна црква Светог Саве у Стокхолму основана је 1985. године од стране српских имиграната који су дошли у Шведску у потрази за бољим животом. Оно што је почело као мали молитвени скупови у домовима верника прерасло је у живу парохијску заједницу посвећену очувању српских православних традиција у Скандинавији.",
    "about.history.p2":
      "Године 1992. заједница је купила своју садашњу зграду, историјску структуру која датира с почетка 20. века, која је освећена као православна црква након опсежних реновирања. Црква је добила име у част Светог Саве, заштитника Србије и првог архиепископа аутокефалне Српске православне цркве.",
    "about.history.p3":
      "Данас, наша парохија служи православним хришћанима различитих етничких порекла, укључујући српско, грчко, руско, румунско, као и шведске преобраћенике, одражавајући разноликост православља у Стокхолму.",
    "about.history.p4":
      "Наша црква је украшена традиционалном иконографијом коју су осликали локални и међународни иконографи, пратећи византијску традицију. Ентеријер садржи ручно изрезбарен дрвени иконостас увезен из Србије 2005. године, приказујући свеце који се посебно поштују у српској православној традицији.",
    "about.saintsava.title": "Свети Сава: Први српски архиепископ",
    "about.saintsava.subtitle": "Живот и наслеђе Светог Саве",
    "about.saintsava.p1":
      "Свети Сава (1174-1236), рођен као Растко Немањић, био је најмлађи син Стефана Немање, великог жупана Србије. Упркос томе што је био принц са свим удобностима краљевског живота, млади Растко је од ране младости био привучен духовним стварима.",
    "about.saintsava.p2":
      "Са 17 година, Растко је напустио очев двор и отпутовао на Свету Гору, центар православног монаштва, где је постао монах и узео име Сава. Његов отац му се касније придружио, узевши монашке завете као Симеон. Заједно су основали манастир Хиландар на Светој Гори, који до данас остаје важан српски духовни центар.",
    "about.saintsava.p3":
      "Највеће достигнуће Светог Саве дошло је 1219. године када је успешно испреговарао аутокефалност (независност) Српске православне цркве и постао њен први архиепископ. Ово је био кључни тренутак у српској историји, јер је установио и верски и национални идентитет српског народа.",
    "about.saintsava.p4":
      'Осим своје црквене улоге, Свети Сава је био и дипломата, законодавац, писац и просветитељ. Оснивао је школе, болнице и манастире широм Србије, и аутор је Номоканона (Законоправила), првог српског устава и законика. Његови доприноси српској култури, праву и образовању донели су му титулу "Просветитељ Срба".',
    "about.saintsava.p5":
      "Свети Сава је преминуо 14. јануара 1236. године, враћајући се са ходочашћа у Свету земљу. Слави се 27. јануара по православном календару. Његово наслеђе наставља да инспирише православне хришћане широм света, представљајући идеални склад између духовне посвећености и практичне службе својој заједници и нацији.",
    "about.priest.title": "Отац Никола Петровић",
    "about.priest.p1":
      "Отац Никола је рукоположен за свештеника 1998. године након завршетка теолошких студија на Православном богословском факултету Универзитета у Београду и Православном теолошком семинару Св. Владимира у Сједињеним Државама.",
    "about.priest.p2":
      "Пре вођења наше парохије, отац Никола је служио заједницама у Србији и Уједињеном Краљевству. Наш парохијски свештеник је од 2010. године.",
    "about.priest.p3":
      "Отац Никола течно говори српски, енглески и шведски, а наставља да учи грчки како би боље служио нашој разноликој заједници. Познат је по свом топлом пасторалном приступу и посвећености православном образовању.",
    "about.priest.p4":
      "Његова визија за нашу парохију фокусирана је на очување српских православних традиција, уз истовремено чињење истих приступачним свим генерацијама и културним позадинама.",
    "about.gallery.title": "Галерија цркве",
    "about.location.title": "Локација цркве и радно време",
    "about.hours.title": "Радно време",
    "about.directions.title": "Упутства",
    "about.directions.public":
      "Јавним превозом: 5 минута хода од метро станице Östermalmstorg.",
    "about.directions.bus":
      "Аутобусом: Аутобуске линије 4 и 72 стају близу цркве.",
    "about.directions.car":
      "Аутомобилом: Ограничен паркинг доступан на Birger Jarlsgatan.",
    "about.contact.title": "Контакт информације",
    "about.contact.address": "Адреса",
    "about.contact.phone": "Телефон",
    "about.contact.email": "Имејл",
    "about.contact.priest": "Свештеник",
    "about.community.p1":
      "Наша парохијска заједница је разноврсна и пуна живота, састављена од православних хришћана различитих културних позадина. Уједињени смо заједничком вером и посвећеношћу живљењу православног начина живота у Стокхолму.",
    "about.community.stats.families": "Породица",
    "about.community.stats.nationalities": "Националности",
    "about.community.stats.years": "Година службе",
    "about.community.p2":
      "Нудимо низ служби и активности осим богослужења, укључујући:",
    "about.community.activities.sunday": "Недељну школу за децу свих узраста",
    "about.community.activities.youth":
      "Омладинску групу за тинејџере и младе одрасле",
    "about.community.activities.bible": "Проучавање Библије и часове веронауке",
    "about.community.activities.charity":
      "Хуманитарни рад у локалној заједници",
    "about.community.activities.cultural":
      "Културне догађаје који славе православне традиције",
    "about.community.activities.fellowship":
      "Заједничке оброке након недељних служби",
    "about.community.p3":
      "Без обзира да ли сте целоживотни православни хришћанин или једноставно радознали о православној вери, позивамо вас да нас посетите и постанете део наше заједнице.",
    "about.svetiSava.title": "О Светом Сави",
    "about.svetiSava.subtitle1": "Свети Сава као духовни и народни просветитељ",
    "about.svetiSava.p1a":
      "Свети Сава се сматра духовним и интелектуалним творцем српске државне и духовне идеје. Његовим доласком у Србију из Свете Горе и преносом моштију Светог Симеона у Студеницу, започео је развој црквено-просветног живота. Народ га је доживљавао као светитеља и истинског просветитеља, а његов живот у Испосници, мисионарска путовања и подвизи учинили су да буде узор врлине и богољубља. Његов биограф Доментијан истиче да је Сава учио народ неуморно, дан и ноћ, показујући личним примером узоре побожности и врлине.",
    "about.svetiSava.p1b":
      "Свети Сава је мисионарски обилазио Србију, учећи народ православној вери и добрим делима. Један од његових најважнијих задатака био је стицање самосталности Српске православне цркве. Сматрао је да без цркве нема истинске просвете и духовног уздизања народа. Његови обиласци, учење и лични пример просвећивали су сваки крај земље. Његов рад описује се као темељ српског националног и културног живота.",
    "about.svetiSava.p1c":
      "Свети Сава је остао дубоко упамћен у народу као духовни пастир који је повезивао свакодневне проблеме са вером. Његов утицај је трајан захваљујући моралној снази његове личности. У народној свести он је чудотворац, заштитник и учитељ. Његово организовање монаштва и рад на књижевности утицали су на културни развој српског народа.",

    "about.svetiSava.subtitle2": "Просветитељска и духовна мисија",
    "about.svetiSava.p2a":
      "Свети Сава је своје просветитељство заснивао на моралним вредностима и духовном обликовању човека. За разлику од савремене европске просвете, која се заснива на прагматичном знању, светосавско просвећење акценат ставља на унутрашње преображење личности, по Христовом учењу. Светосавска просвета тежи ка потпуном духовном васпитању.",
    "about.svetiSava.p2b":
      "У средњем веку се под просветом није подразумевало само знање, већ и духовно просвећење кроз Духа Светога. Сава је своје поуке темељио на вери и истини, што се види у његовим повељама. Он позива народ да срцем и умом прихвати речи истине и да живи по њима. За њега је вера темељ просвете, а истина пут до духовног мира.",
    "about.svetiSava.p2c":
      "Свети Сава је своје учење темељио на вери и истини као унутрашњој светлости душе. Истинско просвећење није могуће без познања вечне истине и живота у Христу. Његова вера има чудесну моћ да преобрази човека, јер кроз Христа долази просвећење које је вечно. Та начела и данас живе као темељи светосавског предања.",

    "about.svetiSava.subtitle3": "Историјске околности и значај",
    "about.svetiSava.p3a":
      "У време Савиног просветитељског рада, Србија је била изложена римокатоличким и јеретичким утицајима. Посебно је био јак утицај преко Барске надбискупије. Свети Сава је схватио да Србија не може напредовати без православног просвећења. Он се залагао за васпитавање српских духовника у српском духу, како би се сачувала вера и идентитет.",
    "about.svetiSava.p3b":
      "Свети Сава је својим радом у Студеници донео духовни преображај Србије. Измирио је завађену браћу над моштима Светог Симеона и тим чином започео нову етапу у духовном животу народа. Као игуман и монах, проповедао је Јеванђеље по целој Србији, подизао цркве или постављао крстове, и подучавао народ у вери и побожности.",

    "about.svetiSava.subtitle4": "Манастирска просвета и књижевни рад",
    "about.svetiSava.p4a":
      "Свети Сава је у Студеници утемељио тип просвете који је пренет и на друге манастире. Његов “Типик” није само законски документ, већ и духовна основа за живот и рад у манастиру. Преко манастира, просвета и култура су се шириле по народу. Манастири су били средишта духовног и културног живота, а Савин рад је био основ за српску просвету.",
    "about.svetiSava.p4b":
      "Иако није много писао, Свети Сава је покренуо књижевну делатност и утицао на развој српског правописа. Његова дела, попут “Житија Светог Симеона”, представљају темељ српске књижевности. Његов рад је био усмерен ка духовним и вечним вредностима, што је оставило трајан печат на култури и просвети народа.",

    "about.svetiSava.subtitle5": "Уједињење цркве и народа",
    "about.svetiSava.p5a":
      "Свети Сава је успео да уједини народ и Цркву. Његово родољубље и духовна снага учинили су да српски народ постане живо тело Цркве. Његова борба није била световна, већ усмерена на изграђивање боголиког човека. Иако су његови непријатељи спалили његове мошти, љубав народа према њему је још више ојачала, изродивши идеју светосавља.",
    "about.svetiSava.p5b":
      "Светосавље је српско православље прожето националним духом. Оно се не разликује од других православних цркава по учењу, већ по начину проживљавања вере. У личности Светог Саве спајају се монах, законодавац, писац и државник. Филозофија светосавља поставља идеал усавршавања човека до богочовека као циљ живота и друштва.",
    "about.svetiSava.subtitle6": "Свети Сава у култури и школству",
    "about.svetiSava.p6a":
      "Свети Сава је инспирисао песнике попут Ј. Ј. Змаја, Десанке Максимовић и Алексе Шантића. Народне приче приказују га као чудотворца и духовног пастира. Уместо да се бори за престо, изабрао је монаштво и службу народу. Његово дело и живот су оставили трајан траг, а књижевност га велича као племенитог браниоца вере и доброте.",
    "about.svetiSava.p6b":
      "Свети Сава је проглашен за школску славу 1840. године. Прва прослава је одржана 1812. у Земуну, а од тада се обележава у свим српским школама. Савиндан је радни, али ненаставни дан, обележен приредбама и свечаностима. Он је признат као заштитник српског школства, културе, дипломатије и здравства.",

    "about.gallery.churchNow.title": "Црква данас",
    "about.gallery.churchNow.description":
      "Фотографије храма и порте у садашњем изгледу",
    "about.gallery.oldPhotos.title": "Старе фотографије",
    "about.gallery.oldPhotos.description":
      "Изглед храма и заједнице из ранијих година",
    "about.gallery.interior.title": "Унутрашњост храма",
    "about.gallery.interior.description":
      "Иконостас, фреске и детаљи из унутрашњости цркве",

    "about.ourCommunity.title": "О нашој заједници",
    "about.ourCommunity.p1":
      "Српска православна црквена заједница у Стокхолму активно окупља вернике и све оне који желе да сачувају и негују духовне, културне и традиционалне вредности наше цркве и народа. Кроз различите верске обреде, литургије и празнике, заједница настоји да одржи јаку повезаност између својих чланова и пружи им подршку у свакодневном животу далеко од родног краја.",
    "about.ourCommunity.p2":
      "Поред редовних богослужења, заједница организује и различите духовне, културне и хуманитарне активности. То су радионице, предавања, дружења, као и обележавање важних верских празника попут Светог Саве, Божића и Ускрса. Такође, кроз радионице за децу и омладину, трудимо се да млади задрже везу са својим коренима и стекну дубље разумевање православне вере и српске културе.",
    "about.ourCommunity.p3":
      "Заједница је место где се кроз заједништво и међусобну подршку гради снажан осећај припадности, а истовремено се негује отвореност и гостопримство према свим људима добре воље. Позивамо вас да нам се придружите и учествујете у свим активностима, да заједно учврстимо нашу веру и очувамо традицију у срцу Шведске.",

    "about.ourMission.title": "Наша мисија",
    "about.ourMission.p1":
      "Мисија Српске православне црквене заједнице у Стокхолму је да очува и пренесе духовне и културне вредности наше цркве и народа на овом простору. Као део шире Српске православне цркве у Србији, наша заједница се труди да буде духовни ослонац свим нашим верницима и да негује јединство кроз веру и традицију.",
    "about.ourMission.p2":
      "Настојимо да нашим верницима пружимо могућност да учествују у богослужењима и другим црквеним обредима, који су срж наше духовности и идентитета. Такође, важно нам је да пружимо подршку младима кроз образовне и културне програме, како би они сачували везу са својим коренима и наставили да граде своју веру у новој средини.",

    "about.ourMission.p3":
      "Као огранак Српске православне цркве из Србије, желимо да будемо мост између наше духовне баштине и модерног живота у Шведској, развијајући заједницу која је отворена, солидарна и пуна љубави према ближњима. Заједно градимо будућност која поштује наше корене, али је истовремено и део шведског друштва.",

    // Calendar/Events
    "events.title": "Предстојећи догађаји",
    "events.calendar": "Календар догађаја",
    "events.services": "Службе",
    "events.all": "Све",
    "events.regularServices": "Редовне службе",
    "events.specialServices": "Посебне службе",
    "events.day": "Дан",
    "events.service": "Служба",
    "events.time": "Време",
    "events.description": "Опис",
    "events.noEvents": "Нема предстојећих догађаја у овом тренутку.",
    "events.location": "Локација",
    "events.communityActivities": "Активности заједнице",
    "events.sundaySchool": "Недељна школа",
    "events.sundaySchool.desc":
      "Недељни часови за децу да уче о православној вери и традицијама.",
    "events.bibleStudy": "Проучавање Библије",
    "events.bibleStudy.desc":
      "Редовно проучавање Светог писма и дискусионе групе за одрасле свих узраста.",
    "events.charity": "Хуманитарни рад",
    "events.charity.desc":
      "Припрема оброка и прикупљање донација за локална склоништа за бескућнике.",
    "events.getInvolved":
      "Желите да се укључите? Поздрављамо волонтере за све наше активности заједнице!",

    // Contact
    "contact.info": "Контакт информације",
    "contact.address.title": "Адреса",
    "contact.address.line1": "Birger Jarlsgatan 98",
    "contact.address.line2": "114 20 Stockholm",
    "contact.address.line3": "Шведска",
    "contact.phone.title": "Телефон",
    "contact.phone.main": "Главна канцеларија: +46 8 123 456 78",
    "contact.phone.priest": "Отац Никола: +46 8 123 456 79",
    "contact.email.title": "Имејл",
    "contact.email.general": "Општи упити: info@orthodoxstockholm.se",
    "contact.email.priest": "Отац Никола: father.nicholas@orthodoxstockholm.se",
    "contact.hours.title": "Радно време",
    "contact.hours.weekdays": "Понедељак до петак: 9:00 - 16:00",
    "contact.hours.saturday": "Субота: По договору",
    "contact.hours.sunday":
      "Недеља: Затворено (Придружите нам се на Литургији)",
    "contact.form.title": "Пошаљите нам поруку",
    "contact.form.name": "Име",
    "contact.form.email": "Имејл",
    "contact.form.subject": "Предмет",
    "contact.form.message": "Порука",
    "contact.form.submit": "Пошаљи поруку",
    "contact.findus": "Пронађите нас",
    "contact.directions.title": "Упутства",

    // Donate
    "donate.title": "Пружите подршку нашој цркви",
    "donate.text": "Укључите се у подршку мисији и раду наше цркве.",
    "donate.button": "Донирај",
    "donate.options": "Опције за донирање",
    "donate.onetime": "Једнократна донација",
    "donate.onetime.desc":
      "Подржите нашу цркву једнократном донацијом било ког износа.",
    "donate.onetime.button": "Донирајте сада",
    "donate.monthly": "Месечна подршка",
    "donate.monthly.desc": "Постаните редовни донатор са месечним донацијама.",
    "donate.monthly.button": "Постаните донатор",
    "donate.recommended": "Препоручено",
    "donate.memorial": "Меморијална донација",
    "donate.memorial.desc": "Дајте донацију у сећање на вољену особу.",
    "donate.memorial.button": "Донирајте за помен",
    "donate.bank.title": "Детаљи банковног трансфера",
    "donate.bank.desc":
      "Можете извршити директан банковни трансфер на рачун наше цркве:",
    "donate.bank.name": "Банка: Nordea Bank",
    "donate.bank.account": "Име рачуна: Православна црква у Стокхолму",
    "donate.bank.number": "Број рачуна: 1234-5678-9012",
    "donate.bank.iban": "IBAN: SE45 5000 0000 0583 9825 7466",
    "donate.bank.swift": "BIC/SWIFT: NDEASESS",
    "donate.bank.reference":
      'Молимо укључите своје име и "Донација" у пољу за референце.',
    "donate.otherways": "Други начини подршке",
    "donate.volunteer.title": "Волонтирајте своје време",
    "donate.volunteer.desc":
      "Увек нам требају волонтери да помогну са разним аспектима црквених операција и догађаја. Било да помажете око одржавања, асистирања са литургијским потребама или организовањем догађаја, ваше време нам је драгоцено.",
    "donate.volunteer.link": "Контактирајте нас за волонтирање →",
    "donate.items.title": "Донирајте предмете",
    "donate.items.desc":
      "Наша црква поздравља донације литургијских предмета, икона, књига и других ресурса који подржавају наше богослужење и образовне активности. Такође прикупљамо неквариву храну и одећу за наше програме помоћи заједници.",
    "donate.items.link": "Контактирајте нас о донацијама предмета →",
    "donate.form.title": "Онлајн формулар за донације",
    "donate.form.amount": "Изаберите износ",
    "donate.form.other": "Други износ",
    "donate.form.type": "Тип донације",
    "donate.form.type.general": "Општа подршка",
    "donate.form.type.building": "Одржавање зграде",
    "donate.form.type.outreach": "Рад са заједницом",
    "donate.form.type.education": "Верско образовање",
    "donate.form.type.memorial": "За помен",
    "donate.form.info": "Лични подаци",
    "donate.form.firstName": "Име",
    "donate.form.lastName": "Презиме",
    "donate.form.email": "Имејл адреса",
    "donate.form.recurring": "Учините ово месечном понављајућом донацијом",
    "donate.form.message": "Опциона порука",
    "donate.thanks": "Хвала на вашој великодушности!",

    // Footer
    "footer.address": "Адреса",
    "footer.phone": "Телефон",
    "footer.email": "Е-пошта",
    "footer.rights": "Сва права задржана",
    "footer.description":
      "Црква Светог Саве је православна црква у Стокхолму, у градској четврти Еншеде Горд. Црква припада Епархији британско-скандинавској која је органски део Српске православне цркве.",
    "footer.aboutUs": "О храму",
    "footer.services": "Богослужења",
    "footer.contact": "Контакт",
    "footer.sundayLiturgy": "Свакидашње јутрење",
    "footer.saturdayVespers": "Света литургија",
    "footer.calendarLink": "Расрпоред богослужења",
    "footer.addressValue": "Bägerstavägen 68, 120 47, Enskede Gård",
    "footer.phoneValue": "+46 31 70 70 70",
    "footer.emailValue": "adresa_crkve@crkva_svetog_save.com",
    "footer.copyright": "Садржај је власништво његових аутора.",
  },
  ru: {
    // Navigation
    "nav.home": "Главная",
    "nav.aboutUs": "О нас",
    "nav.calendar": "Календарь",
    "nav.blog": "Блог",
    "nav.contact": "Контакты",
    "nav.donate": "Пожертвовать",
    "nav.articles": "Статьи",
    "nav.services": "Службы",

    // Home Page
    "home.welcome": "Добро пожаловать в",
    "home.church": "Православную Церковь Святого Саввы",
    "home.intro": "Духовный дом для православных верующих в Стокгольме.",
    "home.learnMore": "Узнать больше",
    "home.upcomingServices": "Предстоящие службы",
    "home.upcomingEvents": "Предстоящие события",
    "home.priestMessage": "Послание от священника",
    "home.readMore": "Читать далее",
    "home.visitUs": "Посетите нас",
    "home.location": "Bägerstavägen 68, 120 47 Enskede Gård, Швеция",
    "home.contactInfo": "Контакт",
    "home.phone": "Телефон: +46 8 123 456 78",
    "home.email": "Электронная почта: info@svetisava-stockholm.se",
    "home.officeHours": "Часы работы: Понедельник - пятница, 9:00 - 16:00",
    "home.contactUs": "Связаться с нами",

    // Services
    "services.schedule": "Расписание служб",
    "services.sunday": "Воскресная Литургия",
    "services.vespers": "Субботняя Вечерня",
    "services.specialServices": "Особые службы",
    "services.time": "Время",
    "services.calendar": "Календарь",

    // Articles
    "articles.title": "Статьи",
    "articles.subtitle":
      "Новости, события, тексты и содержание из нашей общины",
    "articles.filter.all": "Все",
    "articles.filter.news": "Новости",
    "articles.filter.happenings": "События",
    "articles.filter.texts": "Тексты",
    "articles.filter.community": "Община",
    "articles.filter.history": "История",
    "articles.readMore": "Читать далее",

    // About
    "about.title": "О нашей церкви",
    "about.history": "Наша история",
    "about.priest": "Наш священник",
    "about.community": "Наша община",
    "about.history.p1":
      "Сербская православная церковь Святого Саввы в Стокгольме была основана в 1985 году сербскими иммигрантами, приехавшими в Швецию в поисках лучшей жизни. То, что начиналось как небольшие молитвенные собрания в домах верующих, превратилось в живой приходской общину, посвященную сохранению сербских православных традиций в Скандинавии.",
    "about.history.p2":
      "В 1992 году община приобрела нынешнее здание, историческое строение, датируемое началом 20-го века, которое было освящено как православная церковь после обширных реноваций. Церковь была названа в честь Святого Саввы, покровителя Сербии и первого архиепископа автокефальной Сербской православной церкви.",
    "about.history.p3":
      "Сегодня наш приход служит православным христианам различных этнических происхождений, включая сербское, греческое, русское, румынское, а также шведских обращенных, отражая разнообразие православия в Стокгольме.",
    "about.history.p4":
      "Наша церковь украшена традиционной иконографией, написанной местными и международными иконописцами, следуя византийской традиции. Интерьер включает вручную вырезанный деревянный иконостас, импортированный из Сербии в 2005 году, изображающий святых, особенно почитаемых в сербской православной традиции.",
    "about.saintsava.title": "Святой Савва: Первый сербский архиепископ",
    "about.saintsava.subtitle": "Жизнь и наследие Святого Саввы",
    "about.saintsava.p1":
      "Святой Савва (1174-1236), рожденный как Растко Неманич, был младшим сыном Стефана Немани, великого жупана Сербии. Несмотря на то, что он был принцем со всеми удобствами королевской жизни, молодой Растко с раннего возраста был привлечен к духовным вопросам.",
    "about.saintsava.p2":
      "В 17 лет Растко покинул отцовский двор и отправился на гору Афон, центр православного монашества, где он стал монахом и принял имя Савва. Его отец позже присоединился к нему, приняв монашеские обеты как Симеон. Вместе они основали монастырь Хиландар на горе Афон, который до сих пор остается важным сербским духовным центром.",
    "about.saintsava.p3":
      "Величайшее достижение Святого Саввы пришлось на 1219 год, когда он успешно договорился об автокефалии (независимости) Сербской православной церкви и стал ее первым архиепископом. Это был решающий момент в сербской истории, так как он установил как религиозную, так и национальную идентичность сербского народа.",
    "about.saintsava.p4":
      'Помимо своей церковной роли, Святой Савва был также дипломатом, законодателем, писателем и просветителем. Он основал школы, больницы и монастыри по всей Сербии и написал Номоканон, первую сербскую конституцию и правовой кодекс. Его вклад в сербскую культуру, право и образование принесли ему титул "Просветитель сербов".',
    "about.saintsava.p5":
      "Святой Савва умер 14 января 1236 года, возвращаясь из паломничества в Святую землю. Его память чтят 27 января по православному календарю. Его наследие продолжает вдохновлять православных христиан во всем мире, представляя идеальную гармонию между духовной преданностью и практическим служением своей общине и нации.",
    "about.priest.title": "Отец Николай Петрович",
    "about.priest.p1":
      "Отец Николай был рукоположен в священники в 1998 году после завершения богословских исследований на Православном богословском факультете Белградского университета и в Православной богословской семинарии Св. Владимира в Соединенных Штатах.",
    "about.priest.p2":
      "До руководства нашим приходом, отец Николай служил общинам в Сербии и Великобритании. Он является нашим приходским священником с 2010 года.",
    "about.priest.p3":
      "Отец Николай свободно владеет сербским, английским и шведским языками, и продолжает изучать греческий, чтобы лучше служить нашей разнообразной общине. Он известен своим теплым пастырским подходом и приверженностью православному образованию.",
    "about.priest.p4":
      "Его видение нашего прихода сосредоточено на сохранении сербских православных традиций, делая их доступными для всех поколений и культурных происхождений.",
    "about.gallery.title": "Галерея церкви",
    "about.location.title": "Расположение церкви и часы работы",
    "about.hours.title": "Часы работы",
    "about.directions.title": "Как добраться",
    "about.directions.public":
      "На общественном транспорте: 5 минут пешком от станции метро Östermalmstorg.",
    "about.directions.bus":
      "На автобусе: Автобусные маршруты 4 и 72 останавливаются рядом с церковью.",
    "about.directions.car":
      "На автомобиле: Ограниченная парковка доступна на Birger Jarlsgatan.",
    "about.contact.title": "Контактная информация",
    "about.contact.address": "Адрес",
    "about.contact.phone": "Телефон",
    "about.contact.email": "Электронная почта",
    "about.contact.priest": "Священник",
    "about.community.p1":
      "Наша приходская община разнообразна и полна жизни, состоя из православных христиан разных культурных происхождений. Мы объединены нашей общей верой и приверженностью жизни по православному пути в Стокгольме.",
    "about.community.stats.families": "Семей",
    "about.community.stats.nationalities": "Национальностей",
    "about.community.stats.years": "Лет служения",
    "about.community.p2":
      "Мы предлагаем ряд служений и мероприятий помимо богослужений, включая:",
    "about.community.activities.sunday":
      "Воскресную школу для детей всех возрастов",
    "about.community.activities.youth":
      "Молодежную группу для подростков и молодых взрослых",
    "about.community.activities.bible":
      "Изучение Библии и катехизические занятия",
    "about.community.activities.charity":
      "Благотворительную работу в местном сообществе",
    "about.community.activities.cultural":
      "Культурные мероприятия, празднующие православные традиции",
    "about.community.activities.fellowship":
      "Трапезы общения после воскресных служб",
    "about.community.p3":
      "Независимо от того, являетесь ли вы православным христианином всю жизнь или просто интересуетесь православной верой, мы приглашаем вас посетить нас и стать частью нашей общины.",

    // Calendar/Events
    "events.title": "Предстоящие события",
    "events.calendar": "Календарь событий",
    "events.services": "Службы",
    "events.all": "Все",
    "events.regularServices": "Регулярные службы",
    "events.specialServices": "Особые службы",
    "events.day": "День",
    "events.service": "Служба",
    "events.time": "Время",
    "events.description": "Описание",
    "events.noEvents": "В настоящее время нет предстоящих событий.",
    "events.location": "Место",
    "events.communityActivities": "Деятельность общины",
    "events.sundaySchool": "Воскресная школа",
    "events.sundaySchool.desc":
      "Еженедельные занятия для детей, чтобы узнать о православной вере и традициях.",
    "events.bibleStudy": "Изучение Библии",
    "events.bibleStudy.desc":
      "Регулярное изучение Писания и дискуссионные группы для взрослых всех возрастов.",
    "events.charity": "Благотворительность",
    "events.charity.desc":
      "Приготовление еды и сбор пожертвований для местных приютов для бездомных.",
    "events.getInvolved":
      "Хотите принять участие? Мы приветствуем волонтеров для всех наших общинных мероприятий!",

    // Contact
    "contact.info": "Контактная информация",
    "contact.address.title": "Адрес",
    "contact.address.line1": "Birger Jarlsgatan 98",
    "contact.address.line2": "114 20 Stockholm",
    "contact.address.line3": "Швеция",
    "contact.phone.title": "Телефон",
    "contact.phone.main": "Главный офис: +46 8 123 456 78",
    "contact.phone.priest": "Отец Николай: +46 8 123 456 79",
    "contact.email.title": "Электронная почта",
    "contact.email.general": "Общие вопросы: info@orthodoxstockholm.se",
    "contact.email.priest":
      "Отец Николай: father.nicholas@orthodoxstockholm.se",
    "contact.hours.title": "Часы работы",
    "contact.hours.weekdays": "Понедельник - пятница: 9:00 - 16:00",
    "contact.hours.saturday": "Суббота: По договоренности",
    "contact.hours.sunday": "Воскресенье: Закрыто (Приходите на Литургию)",
    "contact.form.title": "Отправить нам сообщение",
    "contact.form.name": "Имя",
    "contact.form.email": "Электронная почта",
    "contact.form.subject": "Тема",
    "contact.form.message": "Сообщение",
    "contact.form.submit": "Отправить сообщение",
    "contact.findus": "Найти нас",
    "contact.directions.title": "Как добраться",

    // Donate
    "donate.title": "Поддержите нашу церковь",
    "donate.text": "Помогите поддержать миссию и работу нашей церкви.",
    "donate.button": "Сделать пожертвование",
    "donate.options": "Варианты пожертвований",
    "donate.onetime": "Единоразовое пожертвование",
    "donate.onetime.desc":
      "Поддержите нашу церковь одним пожертвованием любого размера.",
    "donate.onetime.button": "Пожертвовать сейчас",
    "donate.monthly": "Ежемесячная поддержка",
    "donate.monthly.desc":
      "Станьте регулярным жертвователем с ежемесячными пожертвованиями.",
    "donate.monthly.button": "Стать жертвователем",
    "donate.recommended": "Рекомендуется",
    "donate.memorial": "Поминальное пожертвование",
    "donate.memorial.desc":
      "Сделайте пожертвование в память о близком человеке.",
    "donate.memorial.button": "Пожертвовать в память",
    "donate.bank.title": "Детали банковского перевода",
    "donate.bank.desc":
      "Вы можете сделать прямой банковский перевод на счет нашей церкви:",
    "donate.bank.name": "Банк: Nordea Bank",
    "donate.bank.account": "Имя счета: Православная церковь в Стокгольме",
    "donate.bank.number": "Номер счета: 1234-5678-9012",
    "donate.bank.iban": "IBAN: SE45 5000 0000 0583 9825 7466",
    "donate.bank.swift": "BIC/SWIFT: NDEASESS",
    "donate.bank.reference":
      'Пожалуйста, укажите свое имя и "Пожертвование" в поле назначения платежа.',
    "donate.otherways": "Другие способы поддержки",
    "donate.volunteer.title": "Пожертвуйте свое время",
    "donate.volunteer.desc":
      "Нам всегда нужны волонтеры, чтобы помочь с различными аспектами церковных мероприятий и операций. Будь то помощь с обслуживанием, содействие с литургическими нуждами или организация мероприятий, ваше время ценно для нас.",
    "donate.volunteer.link": "Свяжитесь с нами для волонтерства →",
    "donate.items.title": "Пожертвуйте предметы",
    "donate.items.desc":
      "Наша церковь приветствует пожертвования литургических предметов, икон, книг и других ресурсов, которые поддерживают наше богослужение и образовательную деятельность. Мы также собираем нескоропортящиеся продукты питания и одежду для наших программ помощи общине.",
    "donate.items.link": "Свяжитесь с нами о пожертвовании предметов →",
    "donate.form.title": "Онлайн форма пожертвования",
    "donate.form.amount": "Выберите сумму",
    "donate.form.other": "Другая сумма",
    "donate.form.type": "Тип пожертвования",
    "donate.form.type.general": "Общая поддержка",
    "donate.form.type.building": "Обслуживание здания",
    "donate.form.type.outreach": "Общественная деятельность",
    "donate.form.type.education": "Религиозное образование",
    "donate.form.type.memorial": "В память о",
    "donate.form.info": "Личная информация",
    "donate.form.firstName": "Имя",
    "donate.form.lastName": "Фамилия",
    "donate.form.email": "Электронная почта",
    "donate.form.recurring":
      "Сделать это ежемесячным повторяющимся пожертвованием",
    "donate.form.message": "Дополнительное сообщение",
    "donate.thanks": "Спасибо за вашу щедрость!",

    // Footer
    "footer.address": "Адрес",
    "footer.phone": "Телефон",
    "footer.email": "Электронная почта",
    "footer.rights": "Все права защищены",
  },
  el: {
    // Navigation
    "nav.home": "Αρχική",
    "nav.aboutUs": "Σχετικά με εμάς",
    "nav.calendar": "Ημερολόγιο",
    "nav.blog": "Ιστολόγιο",
    "nav.contact": "Επικοινωνία",
    "nav.donate": "Δωρεά",
    "nav.articles": "Άρθρα",
    "nav.services": "Υπηρεσίες",

    // Home Page
    "home.welcome": "Καλώς ήρθατε στην",
    "home.church": "Ορθόδοξη Εκκλησία του Αγίου Σάββα",
    "home.intro":
      "Ένα πνευματικό σπίτι για τους Ορθόδοξους πιστούς στη Στοκχόλμη.",
    "home.learnMore": "Μάθετε περισσότερα",
    "home.upcomingServices": "Επερχόμενες Λειτουργίες",
    "home.upcomingEvents": "Επερχόμενες Εκδηλώσεις",
    "home.priestMessage": "Μήνυμα από τον Ιερέα",
    "home.readMore": "Διαβάστε περισσότερα",
    "home.visitUs": "Επισκεφθείτε μας",
    "home.location": "Bägerstavägen 68, 120 47 Enskede Gård, Σουηδία",
    "home.contactInfo": "Επικοινωνία",
    "home.phone": "Τηλέφωνο: +46 8 123 456 78",
    "home.email": "Email: info@svetisava-stockholm.se",
    "home.officeHours": "Ώρες Γραφείου: Δευτέρα έως Παρασκευή, 9:00 - 16:00",
    "home.contactUs": "Επικοινωνήστε μαζί μας",

    // Services
    "services.schedule": "Πρόγραμμα Λειτουργιών",
    "services.sunday": "Κυριακάτικη Θεία Λειτουργία",
    "services.vespers": "Εσπερινός Σαββάτου",
    "services.specialServices": "Ειδικές Λειτουργίες",
    "services.time": "Ώρα",
    "services.calendar": "Ημερολόγιο",

    // Articles
    "articles.title": "Άρθρα",
    "articles.subtitle":
      "Νέα, εκδηλώσεις, κείμενα και περιεχόμενο από την κοινότητά μας",
    "articles.filter.all": "Όλα",
    "articles.filter.news": "Νέα",
    "articles.filter.happenings": "Εκδηλώσεις",
    "articles.filter.texts": "Κείμενα",
    "articles.filter.community": "Κοινότητα",
    "articles.filter.history": "Ιστορία",
    "articles.readMore": "Διαβάστε περισσότερα",

    // About
    "about.title": "Σχετικά με την Εκκλησία μας",
    "about.history": "Η Ιστορία μας",
    "about.priest": "Ο Ιερέας μας",
    "about.community": "Η Κοινότητά μας",
    "about.history.p1":
      "Η Σερβική Ορθόδοξη Εκκλησία του Αγίου Σάββα στη Στοκχόλμη ιδρύθηκε το 1985 από Σέρβους μετανάστες που είχαν έρθει στη Σουηδία αναζητώντας μια καλύτερη ζωή. Αυτό που ξεκίνησε ως μικρές προσευχητικές συγκεντρώσεις στα σπίτια των μελών εξελίχθηκε σε μια ζωντανή ενοριακή κοινότητα αφοσιωμένη στη διατήρηση των σερβικών ορθόδοξων παραδόσεων στη Σκανδιναβία.",
    "about.history.p2":
      "Το 1992, η κοινότητα αγόρασε το τρέχον κτίριό της, μια ιστορική δομή που χρονολογείται από τις αρχές του 20ού αιώνα, το οποίο καθαγιάστηκε ως ορθόδοξη εκκλησία μετά από εκτεταμένες ανακαινίσεις. Η εκκλησία ονομάστηκε προς τιμήν του Αγίου Σάββα, του προστάτη αγίου της Σερβίας και του πρώτου Αρχιεπισκόπου της αυτοκέφαλης Σερβικής Ορθόδοξης Εκκλησίας.",
    "about.history.p3":
      "Σήμερα, η ενορία μας εξυπηρετεί Ορθόδοξους Χριστιανούς διαφόρων εθνικών καταγωγών, συμπεριλαμβανομένων Σέρβων, Ελλήνων, Ρώσων, Ρουμάνων και Σουηδών προσήλυτων, αντικατοπτρίζοντας την ποικιλόμορφη φύση της Ορθοδοξίας στη Στοκχόλμη.",
    "about.history.p4":
      "Η εκκλησία μας είναι διακοσμημένη με παραδοσιακή αγιογραφία που ζωγραφίστηκε από τοπικούς και διεθνείς αγιογράφους, ακολουθώντας τη βυζαντινή παράδοση. Το εσωτερικό διαθέτει ένα χειροποίητο ξύλινο τέμπλο που εισήχθη από τη Σερβία το 2005, απεικονίζοντας αγίους που τιμώνται ιδιαίτερα στη σερβική ορθόδοξη παράδοση.",
    "about.saintsava.title": "Άγιος Σάββας: Ο Πρώτος Σέρβος Αρχιεπίσκοπος",
    "about.saintsava.subtitle": "Η Ζωή και η Κληρονομιά του Αγίου Σάββα",
    "about.saintsava.p1":
      "Ο Άγιος Σάββας (1174-1236), γεννημένος ως Ράστκο Νεμάνιτς, ήταν ο νεότερος γιος του Στέφαν Νεμάνια, του Μεγάλου Πρίγκιπα της Σερβίας. Παρά το γεγονός ότι ήταν πρίγκιπας με όλες τις ανέσεις της βασιλικής ζωής, ο νεαρός Ράστκο ελκυόταν από πνευματικά ζητήματα από μικρή ηλικία.",
    "about.saintsava.p2":
      "Σε ηλικία 17 ετών, ο Ράστκο εγκατέλειψε την αυλή του πατέρα του και ταξίδεψε στο Άγιο Όρος, το κέντρο του ορθόδοξου μοναχισμού, όπου έγινε μοναχός και πήρε το όνομα Σάββας. Ο πατέρας του αργότερα τον ακολούθησε, παίρνοντας μοναχικούς όρκους ως Συμεών. Μαζί, ίδρυσαν τη Μονή Χιλανδαρίου στο Άγιο Όρος, η οποία παραμένει ένα σημαντικό σερβικό πνευματικό κέντρο μέχρι σήμερα.",
    "about.saintsava.p3":
      "Το μεγαλύτερο επίτευγμα του Αγίου Σάββα ήρθε το 1219 όταν διαπραγματεύτηκε επιτυχώς την αυτοκεφαλία (ανεξαρτησία) της Σερβικής Ορθόδοξης Εκκλησίας και έγινε ο πρώτος Αρχιεπίσκοπός της. Αυτή ήταν μια κρίσιμη στιγμή στη σερβική ιστορία, καθώς καθιέρωσε τόσο τη θρησκευτική όσο και την εθνική ταυτότητα του σερβικού λαού.",
    "about.saintsava.p4":
      'Πέρα από τον εκκλησιαστικό του ρόλο, ο Άγιος Σάββας ήταν επίσης διπλωμάτης, νομοθέτης, συγγραφέας και εκπαιδευτικός. Ίδρυσε σχολεία, νοσοκομεία και μοναστήρια σε όλη τη Σερβία, και συνέγραψε το Νομοκάνονα, το πρώτο σερβικό σύνταγμα και νομικό κώδικα. Οι συνεισφορές του στη σερβική κουλτούρα, νόμο και εκπαίδευση του απέφεραν τον τίτλο "Φωτιστής των Σέρβων".',
    "about.saintsava.p5":
      "Ο Άγιος Σάββας πέθανε στις 14 Ιανουαρίου 1236, ενώ επέστρεφε από προσκύνημα στους Αγίους Τόπους. Η μνήμη του τιμάται στις 27 Ιανουαρίου στο ορθόδοξο ημερολόγιο. Η κληρονομιά του συνεχίζει να εμπνέει Ορθόδοξους Χριστιανούς παγκοσμίως, αντιπροσωπεύοντας την ιδανική αρμονία μεταξύ πνευματικής αφοσίωσης και πρακτικής υπηρεσίας στην κοινότητα και το έθνος του.",
    "about.priest.title": "Πατήρ Νικόλαος Πέτροβιτς",
    "about.priest.p1":
      "Ο Πατήρ Νικόλαος χειροτονήθηκε στην ιεροσύνη το 1998 μετά την ολοκλήρωση των θεολογικών του σπουδών στην Ορθόδοξη Θεολογική Σχολή του Πανεπιστημίου του Βελιγραδίου και στην Ορθόδοξη Θεολογική Σχολή του Αγίου Βλαδιμήρου στις Ηνωμένες Πολιτείες.",
    "about.priest.p2":
      "Πριν ηγηθεί της ενορίας μας, ο Πατήρ Νικόλαος υπηρέτησε κοινότητες στη Σερβία και το Ηνωμένο Βασίλειο. Είναι ο εφημέριός μας από το 2010.",
    "about.priest.p3":
      "Ο Πατήρ Νικόλαος μιλάει άπταιστα σερβικά, αγγλικά και σουηδικά, και συνεχίζει να μαθαίνει ελληνικά για να εξυπηρετεί καλύτερα την ποικιλόμορφη κοινότητά μας. Είναι γνωστός για τη θερμή ποιμαντική του προσέγγιση και την αφοσίωση στην ορθόδοξη εκπαίδευση.",
    "about.priest.p4":
      "Το όραμά του για την ενορία μας επικεντρώνεται στη διατήρηση των σερβικών ορθόδοξων παραδόσεων καθιστώντας τες προσβάσιμες σε όλες τις γενιές και τα πολιτισμικά υπόβαθρα.",
    "about.gallery.title": "Γκαλερί Εκκλησίας",
    "about.location.title": "Τοποθεσία και Ώρες Λειτουργίας",
    "about.hours.title": "Ώρες Λειτουργίας",
    "about.directions.title": "Οδηγίες",
    "about.directions.public":
      "Με τα Μέσα Μαζικής Μεταφοράς: 5 λεπτά περπάτημα από το σταθμό μετρό Östermalmstorg.",
    "about.directions.bus":
      "Με Λεωφορείο: Οι λεωφορειακές γραμμές 4 και 72 σταματούν κοντά στην εκκλησία.",
    "about.directions.car":
      "Με Αυτοκίνητο: Περιορισμένος χώρος στάθμευσης διαθέσιμος στην Birger Jarlsgatan.",
    "about.contact.title": "Πληροφορίες Επικοινωνίας",
    "about.contact.address": "Διεύθυνση",
    "about.contact.phone": "Τηλέφωνο",
    "about.contact.email": "Email",
    "about.contact.priest": "Ιερέας",
    "about.community.p1":
      "Η ενοριακή μας κοινότητα είναι ποικιλόμορφη και ζωντανή, αποτελούμενη από Ορθόδοξους Χριστιανούς διαφόρων πολιτισμικών υποβάθρων. Ενωνόμαστε από την κοινή μας πίστη και δέσμευση στο να ζούμε τον ορθόδοξο τρόπο ζωής στη Στοκχόλμη.",
    "about.community.stats.families": "Οικογένειες",
    "about.community.stats.nationalities": "Εθνικότητες",
    "about.community.stats.years": "Έτη Υπηρεσίας",
    "about.community.p2":
      "Προσφέρουμε μια σειρά από διακονίες και δραστηριότητες πέραν των λειτουργιών λατρείας, συμπεριλαμβανομένων:",
    "about.community.activities.sunday":
      "Κυριακάτικο σχολείο για παιδιά όλων των ηλικιών",
    "about.community.activities.youth":
      "Νεανική ομάδα για εφήβους και νεαρούς ενήλικες",
    "about.community.activities.bible":
      "Μελέτη της Βίβλου και μαθήματα κατήχησης",
    "about.community.activities.charity":
      "Φιλανθρωπική δράση στην τοπική κοινότητα",
    "about.community.activities.cultural":
      "Πολιτιστικές εκδηλώσεις που γιορτάζουν τις ορθόδοξες παραδόσεις",
    "about.community.activities.fellowship":
      "Κοινά γεύματα μετά τις κυριακάτικες λειτουργίες",
    "about.community.p3":
      "Είτε είστε διά βίου Ορθόδοξος Χριστιανός είτε απλά περίεργοι για την Ορθόδοξη πίστη, σας καλωσορίζουμε να μας επισκεφθείτε και να γίνετε μέρος της κοινότητάς μας.",

    // Calendar/Events
    "events.title": "Επερχόμενες Εκδηλώσεις",
    "events.calendar": "Ημερολόγιο Εκδηλώσεων",
    "events.services": "Λειτουργίες",
    "events.all": "Όλα",
    "events.regularServices": "Τακτικές Λειτουργίες",
    "events.specialServices": "Ειδικές Λειτουργίες",
    "events.day": "Ημέρα",
    "events.service": "Λειτουργία",
    "events.time": "Ώρα",
    "events.description": "Περιγραφή",
    "events.noEvents": "Δεν υπάρχουν επερχόμενες εκδηλώσεις αυτή τη στιγμή.",
    "events.location": "Τοποθεσία",
    "events.communityActivities": "Δραστηριότητες Κοινότητας",
    "events.sundaySchool": "Κυριακάτικο Σχολείο",
    "events.sundaySchool.desc":
      "Εβδομαδιαία μαθήματα για παιδιά για να μάθουν για την Ορθόδοξη πίστη και παραδόσεις.",
    "events.bibleStudy": "Μελέτη Βίβλου",
    "events.bibleStudy.desc":
      "Τακτική μελέτη των γραφών και ομάδες συζήτησης για ενήλικες όλων των ηλικιών.",
    "events.charity": "Φιλανθρωπική Δράση",
    "events.charity.desc":
      "Προετοιμασία γευμάτων και συλλογή δωρεών για τοπικά καταφύγια αστέγων.",
    "events.getInvolved":
      "Θέλετε να συμμετάσχετε; Καλωσορίζουμε εθελοντές για όλες τις κοινοτικές μας δραστηριότητες!",

    // Contact
    "contact.info": "Πληροφορίες Επικοινωνίας",
    "contact.address.title": "Διεύθυνση",
    "contact.address.line1": "Birger Jarlsgatan 98",
    "contact.address.line2": "114 20 Stockholm",
    "contact.address.line3": "Σουηδία",
    "contact.phone.title": "Τηλέφωνο",
    "contact.phone.main": "Κεντρικό Γραφείο: +46 8 123 456 78",
    "contact.phone.priest": "Πατήρ Νικόλαος: +46 8 123 456 79",
    "contact.email.title": "Email",
    "contact.email.general": "Γενικές Πληροφορίες: info@orthodoxstockholm.se",
    "contact.email.priest":
      "Πατήρ Νικόλαος: father.nicholas@orthodoxstockholm.se",
    "contact.hours.title": "Ώρες Λειτουργίας",
    "contact.hours.weekdays": "Δευτέρα έως Παρασκευή: 9:00 - 16:00",
    "contact.hours.saturday": "Σάββατο: Κατόπιν ραντεβού",
    "contact.hours.sunday": "Κυριακή: Κλειστά (Ελάτε στη Λειτουργία)",
    "contact.form.title": "Στείλτε μας Μήνυμα",
    "contact.form.name": "Όνομα",
    "contact.form.email": "Email",
    "contact.form.subject": "Θέμα",
    "contact.form.message": "Μήνυμα",
    "contact.form.submit": "Αποστολή Μηνύματος",
    "contact.findus": "Βρείτε μας",
    "contact.directions.title": "Οδηγίες",

    // Donate
    "donate.title": "Υποστηρίξτε την Εκκλησία μας",
    "donate.text":
      "Βοηθήστε να υποστηρίξουμε την αποστολή και το έργο της εκκλησίας μας.",
    "donate.button": "Κάντε Δωρεά",
    "donate.options": "Επιλογές Δωρεάς",
    "donate.onetime": "Εφάπαξ Δωρεά",
    "donate.onetime.desc":
      "Υποστηρίξτε την εκκλησία μας με μια μεμονωμένη δωρεά οποιουδήποτε ποσού.",
    "donate.onetime.button": "Κάντε Δωρεά Τώρα",
    "donate.monthly": "Μηνιαία Υποστήριξη",
    "donate.monthly.desc": "Γίνετε τακτικός υποστηρικτής με μηνιαίες δωρεές.",
    "donate.monthly.button": "Γίνετε Υποστηρικτής",
    "donate.recommended": "Προτεινόμενο",
    "donate.memorial": "Μνημόσυνη Δωρεά",
    "donate.memorial.desc":
      "Κάντε μια δωρεά στη μνήμη ενός αγαπημένου προσώπου.",
    "donate.memorial.button": "Δωρίστε εις Μνήμην",
    "donate.bank.title": "Στοιχεία Τραπεζικού Εμβάσματος",
    "donate.bank.desc":
      "Μπορείτε να κάνετε απευθείας τραπεζικό έμβασμα στον λογαριασμό της εκκλησίας μας:",
    "donate.bank.name": "Τράπεζα: Nordea Bank",
    "donate.bank.account": "Όνομα Λογαριασμού: Ορθόδοξη Εκκλησία στη Στοκχόλμη",
    "donate.bank.number": "Αριθμός Λογαριασμού: 1234-5678-9012",
    "donate.bank.iban": "IBAN: SE45 5000 0000 0583 9825 7466",
    "donate.bank.swift": "BIC/SWIFT: NDEASESS",
    "donate.bank.reference":
      'Παρακαλούμε συμπεριλάβετε το όνομά σας και "Δωρεά" στο πεδίο αναφοράς.',
    "donate.otherways": "Άλλοι Τρόποι Υποστήριξης",
    "donate.volunteer.title": "Προσφέρετε τον Χρόνο σας",
    "donate.volunteer.desc":
      "Πάντα χρειαζόμαστε εθελοντές για να βοηθήσουν με διάφορες πτυχές της λειτουργίας και των εκδηλώσεων της εκκλησίας. Είτε πρόκειται για βοήθεια με τη συντήρηση, την υποστήριξη λειτουργικών αναγκών, ή τη διοργάνωση εκδηλώσεων, ο χρόνος σας είναι πολύτιμος για εμάς.",
    "donate.volunteer.link": "Επικοινωνήστε μαζί μας για εθελοντισμό →",
    "donate.items.title": "Δωρίστε Αντικείμενα",
    "donate.items.desc":
      "Η εκκλησία μας καλωσορίζει δωρεές λειτουργικών αντικειμένων, εικόνων, βιβλίων και άλλων πόρων που υποστηρίζουν τη λατρεία και τις εκπαιδευτικές μας δραστηριότητες. Επίσης συλλέγουμε μη αναλώσιμα τρόφιμα και ρούχα για τα κοινοτικά μας προγράμματα.",
    "donate.items.link": "Επικοινωνήστε μαζί μας για δωρεές αντικειμένων →",
    "donate.form.title": "Φόρμα Ηλεκτρονικής Δωρεάς",
    "donate.form.amount": "Επιλέξτε Ποσό",
    "donate.form.other": "Άλλο ποσό",
    "donate.form.type": "Τύπος Δωρεάς",
    "donate.form.type.general": "Γενική Υποστήριξη",
    "donate.form.type.building": "Συντήρηση Κτιρίου",
    "donate.form.type.outreach": "Κοινοτική Δράση",
    "donate.form.type.education": "Θρησκευτική Εκπαίδευση",
    "donate.form.type.memorial": "Εις Μνήμην",
    "donate.form.info": "Προσωπικές Πληροφορίες",
    "donate.form.firstName": "Όνομα",
    "donate.form.lastName": "Επώνυμο",
    "donate.form.email": "Διεύθυνση Email",
    "donate.form.recurring": "Κάντε αυτή μια μηνιαία επαναλαμβανόμενη δωρεά",
    "donate.form.message": "Προαιρετικό μήνυμα",
    "donate.thanks": "Σας ευχαριστούμε για τη γενναιοδωρία σας!",

    // Footer
    "footer.address": "Διεύθυνση",
    "footer.phone": "Τηλέφωνο",
    "footer.email": "Email",
    "footer.rights": "Με επιφύλαξη παντός δικαιώματος",
  },
  mk: {
    // Navigation
    "nav.home": "Почетна",
    "nav.aboutUs": "За нас",
    "nav.calendar": "Календар",
    "nav.blog": "Блог",
    "nav.contact": "Контакт",
    "nav.donate": "Донирај",
    "nav.articles": "Статии",
    "nav.services": "Служби",

    // Home Page
    "home.welcome": "Добредојдовте во",
    "home.church": "Православната Црква Свети Сава",
    "home.intro": "Духовен дом за православните верници во Стокхолм.",
    "home.learnMore": "Дознајте повеќе",
    "home.upcomingServices": "Претстојни служби",
    "home.upcomingEvents": "Претстојни настани",
    "home.priestMessage": "Порака од свештеникот",
    "home.readMore": "Прочитајте повеќе",
    "home.visitUs": "Посетете не",
    "home.location": "Bägerstavägen 68, 120 47 Enskede Gård, Шведска",
    "home.contactInfo": "Контакт",
    "home.phone": "Телефон: +46 8 123 456 78",
    "home.email": "Е-пошта: info@svetisava-stockholm.se",
    "home.officeHours": "Работно време: Понеделник до петок, 9:00 - 16:00",
    "home.contactUs": "Контактирајте не",

    // Services
    "services.schedule": "Распоред на служби",
    "services.sunday": "Недела Божествена Литургија",
    "services.vespers": "Сабота Вечерна",
    "services.specialServices": "Посебни служби",
    "services.time": "Време",
    "services.calendar": "Календар",

    // Articles
    "articles.title": "Статии",
    "articles.subtitle":
      "Вести, настани, текстови и содржина од нашата заедница",
    "articles.filter.all": "Сите",
    "articles.filter.news": "Вести",
    "articles.filter.happenings": "Настани",
    "articles.filter.texts": "Текстови",
    "articles.filter.community": "Заедница",
    "articles.filter.history": "Историја",
    "articles.readMore": "Прочитај повеќе",

    // About
    "about.title": "За нашата црква",
    "about.history": "Нашата историја",
    "about.priest": "Нашиот свештеник",
    "about.community": "Нашата заедница",
    "about.history.p1":
      "Српската православна црква Свети Сава во Стокхолм беше основана во 1985 година од српски имигранти кои дојдоа во Шведска барајќи подобар живот. Она што започна како мали молитвени собири во домовите на членовите прерасна во живописна парохиска заедница посветена на зачувување на српските православни традиции во Скандинавија.",
    "about.history.p2":
      "Во 1992 година, заедницата ја купи својата сегашна зграда, историска структура која датира од раниот 20ти век, која беше посветена како православна црква по обемни реновирања. Црквата беше именувана во чест на Свети Сава, заштитникот на Србија и првиот Архиепископ на автокефалната Српска православна црква.",
    "about.history.p3":
      "Денес, нашата парохија им служи на православните христијани од различни етнички потекла, вклучувајќи Срби, Грци, Руси, Романци и шведски преобратеници, одразувајќи ја разновидната природа на Православието во Стокхолм.",
    "about.history.p4":
      "Нашата црква е украсена со традиционална иконографија насликана од локални и меѓународни иконописци, следејќи ја византиската традиција. Ентериерот содржи рачно изработен дрвен иконостас увезен од Србија во 2005 година, прикажувајќи светци особено почитувани во српската православна традиција.",
    "about.saintsava.title": "Свети Сава: Првиот српски архиепископ",
    "about.saintsava.subtitle": "Животот и наследството на Свети Сава",
    "about.saintsava.p1":
      "Свети Сава (1174-1236), роден како Растко Немањиќ, бил најмладиот син на Стефан Немања, Големиот Кнез на Србија. И покрај тоа што бил принц со сите удобности на кралскиот живот, младиот Растко бил привлечен кон духовни прашања од рана возраст.",
    "about.saintsava.p2":
      "На 17-годишна возраст, Растко го напуштил дворот на својот татко и отпатувал на Света Гора, центарот на православното монаштво, каде што станал монах и го зел името Сава. Неговиот татко подоцна му се придружил, земајќи монашки завети како Симеон. Заедно, тие го основале манастирот Хиландар на Света Гора, кој останува важен српски духовен центар до ден-денес.",
    "about.saintsava.p3":
      "Најголемото достигнување на Свети Сава дошло во 1219 година кога тој успешно ја договорил автокефалноста (независноста) на Српската православна црква и станал нејзин прв Архиепископ. Ова бил клучен момент во српската историја, бидејќи го воспоставил и религиозниот и националниот идентитет на српскиот народ.",
    "about.saintsava.p4":
      'Покрај неговата црковна улога, Свети Сава бил исто така дипломат, законодавец, писател и едукатор. Тој основал училишта, болници и манастири низ цела Србија, и го напишал Номоканонот, првиот српски устав и правен кодекс. Неговите придонеси кон српската култура, закон и образование му го донеле насловот "Просветител на Србите".',
    "about.saintsava.p5":
      "Свети Сава починал на 14 јануари 1236 година, враќајќи се од аџилак во Светата Земја. Неговиот спомен се одбележува на 27 јануари во православниот календар. Неговото наследство продолжува да инспирира православни христијани ширум светот, претставувајќи идеална хармонија помеѓу духовната преданост и практичната служба кон својата заедница и нација.",
    "about.priest.title": "Отец Николај Петровиќ",
    "about.priest.p1":
      "Отец Николај беше ракакоположен во свештенство во 1998 година по завршувањето на своите теолошки студии на Православниот богословски факултет на Универзитетот во Белград и Православната богословска семинарија Св. Владимир во Соединетите Држави.",
    "about.priest.p2":
      "Пред да ја води нашата парохија, отец Николај служеше на заедници во Србија и Обединетото Кралство. Тој е наш парохиски свештеник од 2010 година.",
    "about.priest.p3":
      "Отец Николај течно зборува српски, англиски и шведски, и продолжува да учи грчки за подобро да ѝ служи на нашата разновидна заедница. Тој е познат по својот топол пасторален пристап и посветеност на православното образование.",
    "about.priest.p4":
      "Неговата визија за нашата парохија се фокусира на зачувување на српските православни традиции, истовремено правејќи ги достапни за сите генерации и културни потекла.",
    "about.gallery.title": "Галерија на црквата",
    "about.location.title": "Локација и работно време на црквата",
    "about.hours.title": "Работно време",
    "about.directions.title": "Упатства",
    "about.directions.public":
      "Со јавен превоз: 5 минути пешачење од метро станицата Östermalmstorg.",
    "about.directions.bus":
      "Со автобус: Автобуските линии 4 и 72 застануваат близу до црквата.",
    "about.directions.car":
      "Со автомобил: Ограничен паркинг достапен на Birger Jarlsgatan.",
    "about.contact.title": "Контакт информации",
    "about.contact.address": "Адреса",
    "about.contact.phone": "Телефон",
    "about.contact.email": "Е-пошта",
    "about.contact.priest": "Свештеник",
    "about.community.p1":
      "Нашата парохиска заедница е разновидна и живописна, составена од православни христијани од различни културни потекла. Обединети сме од нашата заедничка вера и посветеност кон живеењето на православниот начин на живот во Стокхолм.",
    "about.community.stats.families": "Семејства",
    "about.community.stats.nationalities": "Националности",
    "about.community.stats.years": "Години служба",
    "about.community.p2":
      "Нудиме низа служби и активности надвор од богослужбите, вклучувајќи:",
    "about.community.activities.sunday":
      "Неделно училиште за деца од сите возрасти",
    "about.community.activities.youth":
      "Младинска група за тинејџери и млади возрасни",
    "about.community.activities.bible":
      "Проучување на Библијата и катехизички часови",
    "about.community.activities.charity":
      "Хуманитарна работа во локалната заедница",
    "about.community.activities.cultural":
      "Културни настани кои ги слават православните традиции",
    "about.community.activities.fellowship":
      "Заеднички оброци по неделните служби",
    "about.community.p3":
      "Без разлика дали сте доживотен православен христијанин или едноставно љубопитни за православната вера, ве поканиме да не посетите и да станете дел од нашата заедница.",

    // Calendar/Events
    "events.title": "Претстојни настани",
    "events.calendar": "Календар на настани",
    "events.services": "Служби",
    "events.all": "Сите",
    "events.regularServices": "Редовни служби",
    "events.specialServices": "Посебни служби",
    "events.day": "Ден",
    "events.service": "Служба",
    "events.time": "Време",
    "events.description": "Опис",
    "events.noEvents": "Во моментов нема претстојни настани.",
    "events.location": "Локација",
    "events.communityActivities": "Активности на заедницата",
    "events.sundaySchool": "Неделно училиште",
    "events.sundaySchool.desc":
      "Неделни часови за деца да учат за православната вера и традиции.",
    "events.bibleStudy": "Проучување на Библијата",
    "events.bibleStudy.desc":
      "Редовно проучување на Светото Писмо и дискусиони групи за возрасни од сите возрасти.",
    "events.charity": "Хуманитарна работа",
    "events.charity.desc":
      "Подготвување оброци и собирање донации за локални засолништа за бездомници.",
    "events.getInvolved":
      "Сакате да се вклучите? Ги поздравуваме волонтерите за сите наши активности на заедницата!",

    // Contact
    "contact.info": "Контакт информации",
    "contact.address.title": "Адреса",
    "contact.address.line1": "Birger Jarlsgatan 98",
    "contact.address.line2": "114 20 Stockholm",
    "contact.address.line3": "Шведска",
    "contact.phone.title": "Телефон",
    "contact.phone.main": "Главна канцеларија: +46 8 123 456 78",
    "contact.phone.priest": "Отец Николај: +46 8 123 456 79",
    "contact.email.title": "Е-пошта",
    "contact.email.general": "Општи прашања: info@orthodoxstockholm.se",
    "contact.email.priest":
      "Отец Николај: father.nicholas@orthodoxstockholm.se",
    "contact.hours.title": "Работно време",
    "contact.hours.weekdays": "Понеделник до петок: 9:00 - 16:00",
    "contact.hours.saturday": "Сабота: По договор",
    "contact.hours.sunday": "Недела: Затворено (Придружете ни се на Литургија)",
    "contact.form.title": "Испратете ни порака",
    "contact.form.name": "Име",
    "contact.form.email": "Е-пошта",
    "contact.form.subject": "Предмет",
    "contact.form.message": "Порака",
    "contact.form.submit": "Испрати порака",
    "contact.findus": "Најдете не",
    "contact.directions.title": "Упатства",

    // Donate
    "donate.title": "Поддржете ја нашата црква",
    "donate.text":
      "Помогнете да ја поддржиме мисијата и работата на нашата црква.",
    "donate.button": "Направете донација",
    "donate.options": "Опции за донирање",
    "donate.onetime": "Еднократна донација",
    "donate.onetime.desc":
      "Поддржете ја нашата црква со еднократна донација од било кој износ.",
    "donate.onetime.button": "Донирајте сега",
    "donate.monthly": "Месечна поддршка",
    "donate.monthly.desc": "Станете редовен поддржувач со месечни донации.",
    "donate.monthly.button": "Станете поддржувач",
    "donate.recommended": "Препорачано",
    "donate.memorial": "Меморијална донација",
    "donate.memorial.desc": "Направете донација во спомен на сакана личност.",
    "donate.memorial.button": "Донирајте за помен",
    "donate.bank.title": "Детали за банкарски трансфер",
    "donate.bank.desc":
      "Можете да направите директен банкарски трансфер на сметката на нашата црква:",
    "donate.bank.name": "Банка: Nordea Bank",
    "donate.bank.account": "Име на сметка: Православна црква во Стокхолм",
    "donate.bank.number": "Број на сметка: 1234-5678-9012",
    "donate.bank.iban": "IBAN: SE45 5000 0000 0583 9825 7466",
    "donate.bank.swift": "BIC/SWIFT: NDEASESS",
    "donate.bank.reference":
      'Ве молиме вклучете го вашето име и "Донација" во полето за референца.',
    "donate.otherways": "Други начини за поддршка",
    "donate.volunteer.title": "Волонтирајте со вашето време",
    "donate.volunteer.desc":
      "Секогаш ни требаат волонтери да помогнат со различни аспекти на црковните операции и настани. Било да е помош при одржување, помагање со литургиски потреби или организирање настани, вашето време е вредно за нас.",
    "donate.volunteer.link": "Контактирајте не за волонтирање →",
    "donate.items.title": "Донирајте предмети",
    "donate.items.desc":
      "Нашата црква ги поздравува донациите на литургиски предмети, икони, книги и други ресурси кои го поддржуваат нашето богослужение и образовни активности. Исто така собираме трајни прехранбени производи и облека за нашите програми за помош на заедницата.",
    "donate.items.link": "Контактирајте не за донации на предмети →",
    "donate.form.title": "Онлајн формулар за донација",
    "donate.form.amount": "Изберете износ",
    "donate.form.other": "Друг износ",
    "donate.form.type": "Тип на донација",
    "donate.form.type.general": "Општа поддршка",
    "donate.form.type.building": "Одржување на зградата",
    "donate.form.type.outreach": "Активности во заедницата",
    "donate.form.type.education": "Религиозно образование",
    "donate.form.type.memorial": "Во спомен на",
    "donate.form.info": "Лични информации",
    "donate.form.firstName": "Име",
    "donate.form.lastName": "Презиме",
    "donate.form.email": "Е-пошта адреса",
    "donate.form.recurring": "Направете ја ова месечна повторувачка донација",
    "donate.form.message": "Опционална порака",
    "donate.thanks": "Ви благодариме за вашата великодушност!",

    // Footer
    "footer.address": "Адреса",
    "footer.phone": "Телефон",
    "footer.email": "Е-пошта",
    "footer.rights": "Сите права се задржани",
  },
};

// Provider component
export const LanguageProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [language, setLanguage] = useState<Language>("en");

  // Translation function
  const t = (key: string): string => {
    return (
      translations[language][
        key as keyof (typeof translations)[typeof language]
      ] || key
    );
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
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
