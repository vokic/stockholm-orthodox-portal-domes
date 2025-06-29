import React from "react";
import { useLanguage } from "../../context/LanguageContext";
import SerbianCross from "../SerbianCross";

interface AboutHistoryProps {
  onImageClick?: (imageSrc: string) => void;
}

const AboutHistory: React.FC<AboutHistoryProps> = ({ onImageClick }) => {
  const { t } = useLanguage();

  const images = [
    {
      src: "/images/about/crkva-stockholm-stari-izgled.jpg",
      alt: t("about.gallery.churchHistory"),
    },
    {
      src: "/images/about/crkva-stockholm-spolja-1.jpg",
      alt: t("about.gallery.churchHistory"),
    },
  ];

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
              {images.map((image, index) => (
                <div key={index} className="flex justify-center">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="rounded-lg shadow-md cursor-pointer hover:opacity-90 transition-opacity w-full max-w-sm h-80 object-cover"
                    onClick={() => onImageClick?.(image.src)}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHistory;
