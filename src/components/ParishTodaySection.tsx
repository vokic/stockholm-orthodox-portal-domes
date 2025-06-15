
import React from "react";
import { useLanguage } from '../context/LanguageContext';

interface ParishTodaySectionProps {
  onImageClick?: (imageSrc: string) => void;
}

const ParishTodaySection: React.FC<ParishTodaySectionProps> = ({ onImageClick }) => {
  const { t } = useLanguage();

  const images = [
    {
      src: "https://images.unsplash.com/photo-1551038247-3d9af20df552?w=800&h=600&fit=crop",
      alt: t('about.parishToday.image1Alt'),
    },
    {
      src: "https://images.unsplash.com/photo-1473177104440-ffee2f376098?w=800&h=600&fit=crop",
      alt: t('about.parishToday.image2Alt'),
    },
    {
      src: "https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?w=800&h=600&fit=crop",
      alt: t('about.parishToday.image3Alt'),
    },
  ];

  return (
    <section className="section bg-orthodox-cream">
      <div className="container-custom">
        <div className="card">
          <h2 className="text-2xl font-serif mb-8 text-orthodox-blue border-b border-orthodox-gold pb-2 text-center">
            {t('about.parishToday.title')}
          </h2>
          
          {/* Text content in centered column */}
          <div className="max-w-4xl mx-auto mb-8">
            <p className="mb-6 text-center">
              {t('about.parishToday.p1')}
            </p>
            <p className="mb-6 text-center">
              {t('about.parishToday.p2')}
            </p>
            <p className="text-center">
              {t('about.parishToday.p3')}
            </p>
          </div>

          {/* Images in symmetric grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <div key={index} className="flex justify-center">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="rounded-lg shadow-md cursor-pointer hover:opacity-90 transition-opacity w-full max-w-sm"
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

export default ParishTodaySection;
