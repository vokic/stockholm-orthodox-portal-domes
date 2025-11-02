// src/context/LanguageContext.tsx

import { createContext, useState, useContext } from "react";
import sr_cyr from "../lang/sr_cyr.json";
import sr_lat from "../lang/sr_lat.json";
import sv from "../lang/sv.json";

interface Language {
  code: string;
  label: string;
  short: string;
}

interface LanguageContext {
  language: string;
  setLanguage: (language: string) => void;
  t: (key: string) => string;
}

// const languages: Language[] = [
//   { code: "sr_cir", label: "Srpski (cirilica)", short: "SR cir" },
//   { code: "sr_lat", label: "Srpski (latinica)", short: "SR lat" },
//   // ...
// ];

const languageData = {
  sr_cyr,
  sr_lat,
  sv,
  // ...
};

console.log(languageData);

const LanguageContext = createContext<LanguageContext>({
  language: "sr_cyr",
  setLanguage: () => {},
  t: (key: string) => key,
});

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("sr_cyr");

  const t = (key: string) => {
    const value = languageData[language]?.[key];
    return typeof value === "string" ? value : key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

export { LanguageProvider, useLanguage, type Language };
