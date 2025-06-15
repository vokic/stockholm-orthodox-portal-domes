
import React from "react";
import { useLanguage } from '../context/LanguageContext';

interface OurMissionSectionProps {
  onImageClick?: (imageSrc: string) => void;
}

const OurMissionSection: React.FC<OurMissionSectionProps> = ({ onImageClick }) => {
  const { t } = useLanguage();

  const missionImages = [
    {
      src: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=800&h=600&fit=crop",
      alt: t('about.ourMission.image1Alt'),
    },
    {
      src: "https://images.unsplash.com/photo-1473177104440-ffee2f376098?w=800&h=600&fit=crop",
      alt: t('about.ourMission.image2Alt'),
    },
  ];

  return (
    <section className="section bg-white">
      <div className="container-custom">
        <div className="card">
          <h2 className="text-2xl font-serif mb-6 text-orthodox-blue border-b border-orthodox-gold pb-2">
            {t('about.ourMission.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="mb-6">
                {t('about.ourMission.p1')}
              </p>
              <img
                src={missionImages[0].src}
                alt={missionImages[0].alt}
                className="rounded-lg mb-6 shadow-md cursor-pointer hover:opacity-90 transition-opacity"
                onClick={() => onImageClick?.(missionImages[0].src)}
              />
              <p className="mb-6">
                {t('about.ourMission.p2')}
              </p>
            </div>
            <div>
              <img
                src={missionImages[1].src}
                alt={missionImages[1].alt}
                className="rounded-lg mb-6 shadow-md cursor-pointer hover:opacity-90 transition-opacity"
                onClick={() => onImageClick?.(missionImages[1].src)}
              />
              <p className="mb-6">
                {t('about.ourMission.p3')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurMissionSection;
