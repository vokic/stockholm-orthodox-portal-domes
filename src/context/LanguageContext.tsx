// src/context/LanguageContext.tsx

import { createContext, useState, useContext, useCallback, ReactNode } from "react";
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

const languageData = {
  sr_cyr,
  sr_lat,
  sv,
  // ...
};

const LanguageContext = createContext<LanguageContext>({
  language: "sr_cyr",
  setLanguage: () => {},
  t: (key: string) => key,
});

const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState("sr_cyr");

  const t = useCallback((key: string) => {
    const value = languageData[language as keyof typeof languageData]?.[key];
    return typeof value === "string" ? value : key;
  }, [language]);

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
