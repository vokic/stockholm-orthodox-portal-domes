import React from "react";
import { useLanguage } from "../context/LanguageContext";

interface OurCommunitySectionProps {
  onImageClick?: (imageSrc: string) => void;
}

const OurCommunitySection: React.FC<OurCommunitySectionProps> = ({
  onImageClick,
}) => {
  const { t } = useLanguage();

  const communityImages = [
    {
      src: "images/about/crkva-stokholm-zajednica-1.jpg",
      alt: t("about.ourCommunity.image1Alt"),
    },
    {
      src: "images/about/crkva-stokholm-zajednica-2.jpg",
      alt: t("about.ourCommunity.image2Alt"),
    },
    {
      src: "images/about/crkva-stokholm-zajednica-3.jpg",
      alt: t("about.ourCommunity.image1Alt"),
    },
    {
      src: "images/about/crkva-stokholm-zajednica-4.jpg",
      alt: t("about.ourCommunity.image2Alt"),
    },
    {
      src: "images/about/crkva-stokholm-zajednica-5.jpg",
      alt: t("about.ourCommunity.image1Alt"),
    },
    {
      src: "images/about/crkva-stokholm-zajednica-6.jpg",
      alt: t("about.ourCommunity.image2Alt"),
    },
    {
      src: "images/about/crkva-stokholm-zajednica-7.jpg",
      alt: t("about.ourCommunity.image1Alt"),
    },
    {
      src: "images/about/crkva-stokholm-zajednica-8.jpg",
      alt: t("about.ourCommunity.image2Alt"),
    },
  ];

  return (
    <section className="section bg-orthodox-cream">
      <div className="container-custom">
        <div className="card">
          <h2 className="text-2xl font-serif mb-8 text-orthodox-blue border-b border-orthodox-gold pb-2 text-center">
            {t("about.ourCommunity.title")}
          </h2>

          {/* Text content in centered column */}
          <div className="max-w-4xl mx-auto mb-8">
            <p className="mb-6 ">{t("about.ourCommunity.p1")}</p>
            <p className="mb-6 ">{t("about.ourCommunity.p2")}</p>
            <p className="">{t("about.ourCommunity.p3")}</p>
          </div>

          {/* Images in 50/50 grid */}
          <div className="grid grid-cols-4 gap-4">
            {communityImages.map((image, index) => (
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

export default OurCommunitySection;
