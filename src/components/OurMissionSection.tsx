
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
          <h2 className="text-2xl font-serif mb-8 text-orthodox-blue border-b border-orthodox-gold pb-2 text-center">
            {t('about.ourMission.title')}
          </h2>
          
          {/* Text content in centered column */}
          <div className="max-w-4xl mx-auto mb-8">
            <p className="mb-6 text-center">
              {t('about.ourMission.p1')}
            </p>
            <p className="mb-6 text-center">
              {t('about.ourMission.p2')}
            </p>
            <p className="text-center">
              {t('about.ourMission.p3')}
            </p>
          </div>

          {/* Images in symmetric grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {missionImages.map((image, index) => (
              <div key={index} className="flex justify-center">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="rounded-lg shadow-md cursor-pointer hover:opacity-90 transition-opacity w-full max-w-md"
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
