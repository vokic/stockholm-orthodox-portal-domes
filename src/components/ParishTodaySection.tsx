
import React from "react";
import { useLanguage } from '../context/LanguageContext';

const ParishTodaySection: React.FC = () => {
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
          <h2 className="text-2xl font-serif mb-6 text-orthodox-blue border-b border-orthodox-gold pb-2">
            {t('about.parishToday.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="mb-6">
                {t('about.parishToday.p1')}
              </p>
              <img
                src={images[0].src}
                alt={images[0].alt}
                className="rounded-lg mb-6 shadow-md"
              />
              <p className="mb-6">
                {t('about.parishToday.p2')}
              </p>
            </div>
            <div>
              <img
                src={images[1].src}
                alt={images[1].alt}
                className="rounded-lg mb-6 shadow-md"
              />
              <p className="mb-6">
                {t('about.parishToday.p3')}
              </p>
              <img
                src={images[2].src}
                alt={images[2].alt}
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParishTodaySection;
