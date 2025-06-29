
import React from "react";
import { useLanguage } from "../../context/LanguageContext";
import Gallery from "../Gallery";

const AboutGallery: React.FC = () => {
  const { t } = useLanguage();

  // Church Now gallery images
  const churchNowImages = [
    {
      src: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=800&h=600&fit=crop",
      alt: t("about.gallery.churchNow.alt1"),
    },
    {
      src: "https://images.unsplash.com/photo-1551038247-3d9af20df552?w=800&h=600&fit=crop",
      alt: t("about.gallery.churchNow.alt2"),
    },
    {
      src: "https://images.unsplash.com/photo-1466442929976-97f336a657be?w=800&h=600&fit=crop",
      alt: t("about.gallery.churchNow.alt3"),
    },
    {
      src: "/placeholder.svg",
      alt: t("about.gallery.churchNow.alt4"),
    },
    {
      src: "/placeholder.svg",
      alt: t("about.gallery.churchNow.alt5"),
    },
    {
      src: "/placeholder.svg",
      alt: t("about.gallery.churchNow.alt6"),
    },
    {
      src: "/placeholder.svg",
      alt: t("about.gallery.churchNow.alt7"),
    },
    {
      src: "/placeholder.svg",
      alt: t("about.gallery.churchNow.alt8"),
    },
    {
      src: "/placeholder.svg",
      alt: t("about.gallery.churchNow.alt9"),
    },
  ];

  // Old photos gallery images
  const oldPhotosImages = [
    {
      src: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=800&h=600&fit=crop",
      alt: t("about.gallery.oldPhotos.alt1"),
    },
    {
      src: "https://images.unsplash.com/photo-1466721591366-2d5fba72006d?w=800&h=600&fit=crop",
      alt: t("about.gallery.oldPhotos.alt2"),
    },
    {
      src: "https://images.unsplash.com/photo-1493962853295-0fd70327578a?w=800&h=600&fit=crop",
      alt: t("about.gallery.oldPhotos.alt3"),
    },
    {
      src: "/placeholder.svg",
      alt: t("about.gallery.oldPhotos.alt4"),
    },
    {
      src: "/placeholder.svg",
      alt: t("about.gallery.oldPhotos.alt5"),
    },
    {
      src: "/placeholder.svg",
      alt: t("about.gallery.oldPhotos.alt6"),
    },
    {
      src: "/placeholder.svg",
      alt: t("about.gallery.oldPhotos.alt7"),
    },
    {
      src: "/placeholder.svg",
      alt: t("about.gallery.oldPhotos.alt8"),
    },
    {
      src: "/placeholder.svg",
      alt: t("about.gallery.oldPhotos.alt9"),
    },
  ];

  // Interior gallery images
  const interiorImages = [
    {
      src: "https://images.unsplash.com/photo-1473177104440-ffee2f376098?w=800&h=600&fit=crop",
      alt: t("about.gallery.interior.alt1"),
    },
    {
      src: "https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?w=800&h=600&fit=crop",
      alt: t("about.gallery.interior.alt2"),
    },
    {
      src: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&h=600&fit=crop",
      alt: t("about.gallery.interior.alt3"),
    },
    {
      src: "/placeholder.svg",
      alt: t("about.gallery.interior.alt4"),
    },
    {
      src: "/placeholder.svg",
      alt: t("about.gallery.interior.alt5"),
    },
    {
      src: "/placeholder.svg",
      alt: t("about.gallery.interior.alt6"),
    },
    {
      src: "/placeholder.svg",
      alt: t("about.gallery.interior.alt7"),
    },
    {
      src: "/placeholder.svg",
      alt: t("about.gallery.interior.alt8"),
    },
    {
      src: "/placeholder.svg",
      alt: t("about.gallery.interior.alt9"),
    },
  ];

  return (
    <section className="section">
      <div className="container-custom">
        <div className="card">
          <h2 className="text-2xl font-serif mb-6 text-orthodox-blue border-b border-orthodox-gold pb-2">
            {t("about.gallery.title")}
          </h2>

          {/* Church Now Section */}
          <div className="mb-12">
            <h3 className="text-xl font-serif mb-4 text-orthodox-blue">
              {t("about.gallery.churchNow.title")}
            </h3>
            <p className="text-gray-600 mb-6">
              {t("about.gallery.churchNow.description")}
            </p>
            <Gallery images={churchNowImages} />
          </div>

          {/* Old Photos Section */}
          <div className="mb-12">
            <h3 className="text-xl font-serif mb-4 text-orthodox-blue">
              {t("about.gallery.oldPhotos.title")}
            </h3>
            <p className="text-gray-600 mb-6">
              {t("about.gallery.oldPhotos.description")}
            </p>
            <Gallery images={oldPhotosImages} />
          </div>

          {/* Interior Section */}
          <div>
            <h3 className="text-xl font-serif mb-4 text-orthodox-blue">
              {t("about.gallery.interior.title")}
            </h3>
            <p className="text-gray-600 mb-6">
              {t("about.gallery.interior.description")}
            </p>
            <Gallery images={interiorImages} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutGallery;
