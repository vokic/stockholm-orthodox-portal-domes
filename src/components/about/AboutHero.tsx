import React from "react";
import { useLanguage } from "../../context/LanguageContext";

const AboutHero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div
      className="bg-orthodox-blue text-white py-16"
      style={{
        backgroundImage: "url('images/about/crkva-stockholm-spolja-1.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        backgroundBlendMode: "multiply",
      }}
    >
      <div className="container-custom rounded-lg p-8">
        <h1 className="text-3xl md:text-4xl font-bold font-serif mb-4 text-orthodox-gold">
          {t("about.title")}
        </h1>
        <p className="text-lg mt-2">{t("about.intro")}</p>
      </div>
    </div>
  );
};

export default AboutHero;
