
import React from "react";
import { useLanguage } from '../context/LanguageContext';

const OurCommunitySection: React.FC = () => {
  const { t } = useLanguage();

  const communityImages = [
    {
      src: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&h=600&fit=crop",
      alt: t('about.ourCommunity.image1Alt'),
    },
    {
      src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop",
      alt: t('about.ourCommunity.image2Alt'),
    },
  ];

  return (
    <section className="section bg-orthodox-cream">
      <div className="container-custom">
        <div className="card">
          <h2 className="text-2xl font-serif mb-6 text-orthodox-blue border-b border-orthodox-gold pb-2">
            {t('about.ourCommunity.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="mb-6">
                {t('about.ourCommunity.p1')}
              </p>
              <img
                src={communityImages[0].src}
                alt={communityImages[0].alt}
                className="rounded-lg mb-6 shadow-md"
              />
              <p className="mb-6">
                {t('about.ourCommunity.p2')}
              </p>
            </div>
            <div>
              <img
                src={communityImages[1].src}
                alt={communityImages[1].alt}
                className="rounded-lg mb-6 shadow-md"
              />
              <p className="mb-6">
                {t('about.ourCommunity.p3')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurCommunitySection;
