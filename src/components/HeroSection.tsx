import React, { useEffect, useState, useMemo } from "react";
import { useLanguage } from "../context/LanguageContext";
import { Link } from "react-router-dom";

const HeroSection: React.FC = () => {
  const { t } = useLanguage();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const imageStyle = useMemo(() => ({
    transform: `translateY(${scrollY * 0.5}px)`,
  }), [scrollY]);

  return (
    <div className="relative bg-orthodox-blue text-white overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/1/1d/Serbisk_ortodoxa_kyrka_Enskede.jpg"
          alt="Beautiful Orthodox church with golden domes"
          className="absolute w-full h-full object-cover"
          style={imageStyle}
        />
        <div className="absolute inset-0 bg-orthodox-blue opacity-40"></div>
      </div>

      <div className="container-custom relative z-10 py-48 md:py-72 text-center">
        <div className="mx-auto max-w-3xl">
          {/* <h2 className="text-2xl md:text-3xl font-serif mb-2 text-orthodox-gold">
            {t('home.welcome')}
          </h2> */}
          <h1 className="text-3xl md:text-5xl font-bold font-serif mb-6 text-white">
            {t("home.churchFullName")}
          </h1>
          <p className="text-xl md:text-2xl mb-8">{t("home.intro")}</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link to="/about" className="btn-secondary">
              {t("home.learnMore")}
            </Link>
            <Link
              to="/calendar"
              className="bg-white text-orthodox-blue hover:bg-opacity-90 px-6 py-2 rounded font-medium transition-colors"
            >
              {t("services.schedule")}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
