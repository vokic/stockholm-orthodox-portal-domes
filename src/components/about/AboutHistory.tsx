
import React from "react";
import { useLanguage } from "../../context/LanguageContext";
import SerbianCross from "../SerbianCross";

interface AboutHistoryProps {
  onImageClick: (imageSrc: string) => void;
}

const AboutHistory: React.FC<AboutHistoryProps> = ({ onImageClick }) => {
  const { t } = useLanguage();

  return (
    <section className="section bg-orthodox-cream">
      <div className="container-custom">
        <div className="card">
          <h2 className="text-2xl font-serif mb-6 text-orthodox-blue border-b border-orthodox-gold pb-2">
            {t("about.history")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <p className="mb-4">{t("about.historyText.p1")}</p>
              <div className="ornament">
                <SerbianCross size={32} className="text-orthodox-gold" />
              </div>
              <p className="mb-4">{t("about.historyText.p2")}</p>
            </div>
            <div className="space-y-4">
              <img
                src="/placeholder.svg"
                alt={t("about.gallery.churchHistory")}
                className="rounded-lg w-full cursor-pointer hover:opacity-90 transition-opacity"
                onClick={() => onImageClick("/placeholder.svg")}
              />
              <img
                src="/placeholder.svg"
                alt={t("about.gallery.churchInterior")}
                className="rounded-lg w-full cursor-pointer hover:opacity-90 transition-opacity"
                onClick={() => onImageClick("/placeholder.svg")}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHistory;
