import React from "react";
import { useLanguage } from "../context/LanguageContext";

interface OurMissionSectionProps {
  onImageClick?: (imageSrc: string) => void;
}

const OurMissionSection: React.FC<OurMissionSectionProps> = ({
  onImageClick,
}) => {
  const { t } = useLanguage();

  const missionImages = [
    {
      src: "images/about/hram-1.jpg",
      alt: t("about.ourMission.image2Alt"),
    },
    {
      src: "images/about/hram-2.jpg",
      alt: t("about.ourMission.image2Alt"),
    },
    {
      src: "images/about/hram-3.jpg",
      alt: t("about.ourMission.image2Alt"),
    },
    {
      src: "images/about/hram-4.jpg",
      alt: t("about.ourMission.image2Alt"),
    },
  ];

  return (
    <section className="section bg-white">
      <div className="container-custom">
        <div className="card">
          <h2 className="text-2xl font-serif mb-8 text-orthodox-blue border-b border-orthodox-gold pb-2 text-center">
            {t("about.ourMission.title")}
          </h2>

          {/* Text content in centered column */}
          <div className="max-w-4xl mx-auto mb-8">
            <p className="mb-6 ">{t("about.ourMission.p1")}</p>
            <p className="mb-6 ">{t("about.ourMission.p2")}</p>
            <p className="">{t("about.ourMission.p3")}</p>
          </div>

          {/* Images in 50/50 grid */}
          <div className="grid grid-cols-4 gap-4">
            {missionImages.map((image, index) => (
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
    </section>
  );
};

export default OurMissionSection;
