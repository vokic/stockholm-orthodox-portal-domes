
import React from "react";
import { useLanguage } from '../context/LanguageContext';

interface OurCommunitySectionProps {
  onImageClick?: (imageSrc: string) => void;
}

const OurCommunitySection: React.FC<OurCommunitySectionProps> = ({ onImageClick }) => {
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
          <h2 className="text-2xl font-serif mb-8 text-orthodox-blue border-b border-orthodox-gold pb-2 text-center">
            {t('about.ourCommunity.title')}
          </h2>
          
          {/* Text content in centered column */}
          <div className="max-w-4xl mx-auto mb-8">
            <p className="mb-6 text-center">
              {t('about.ourCommunity.p1')}
            </p>
            <p className="mb-6 text-center">
              {t('about.ourCommunity.p2')}
            </p>
            <p className="text-center">
              {t('about.ourCommunity.p3')}
            </p>
          </div>

          {/* Images in symmetric grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {communityImages.map((image, index) => (
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

export default OurCommunitySection;
