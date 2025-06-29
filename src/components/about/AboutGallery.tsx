import React from "react";
import { useLanguage } from "../../context/LanguageContext";
import Gallery from "../Gallery";

const AboutGallery: React.FC = () => {
  const { t } = useLanguage();

  // Church Now gallery images
  const churchNowImages = [
    {
      src: "images/about/crkva-stockholm-spolja-1.jpg",
      alt: t("about.gallery.churchNow.alt1"),
    },
    {
      src: "images/about/crkva-stockholm-spolja-2.jpg",
      alt: t("about.gallery.churchNow.alt2"),
    },
    {
      src: "images/about/crkva-stockholm-spolja-3.jpg",
      alt: t("about.gallery.churchNow.alt3"),
    },
    {
      src: "images/about/crkva-stockholm-spolja-4.jpg",
      alt: t("about.gallery.churchNow.alt4"),
    },
    {
      src: "images/about/crkva-stockholm-spolja-5.jpg",
      alt: t("about.gallery.churchNow.alt5"),
    },
    {
      src: "images/about/crkva-stockholm-spolja-6.jpg",
      alt: t("about.gallery.churchNow.alt6"),
    },
    {
      src: "images/about/crkva-stockholm-spolja-7.jpg",
      alt: t("about.gallery.churchNow.alt7"),
    },
    {
      src: "images/about/crkva-stockholm-spolja-8.jpg",
      alt: t("about.gallery.churchNow.alt8"),
    },
    {
      src: "images/about/crkva-stockholm-spolja-9.jpg",
      alt: t("about.gallery.churchNow.alt9"),
    },
    {
      src: "images/about/crkva-stockholm-spolja-10.jpg",
      alt: t("about.gallery.churchNow.alt9"),
    },
  ];

  // Old photos gallery images
  const oldPhotosImages = [
    {
      src: "images/about/crkva-stockholm-stari-izgled.jpg",
      alt: t("about.gallery.oldPhotos.alt1"),
    },
  ];

  // Interior gallery images
  const interiorImages = [
    {
      src: "images/about/crkva-stockholm-unutra-1.jpg",
      alt: t("about.gallery.interior.alt1"),
    },
    {
      src: "images/about/crkva-stockholm-unutra-2.jpg",
      alt: t("about.gallery.interior.alt2"),
    },
    {
      src: "images/about/crkva-stockholm-unutra-3.jpg",
      alt: t("about.gallery.interior.alt3"),
    },
    {
      src: "images/about/crkva-stockholm-unutra-4.jpg",
      alt: t("about.gallery.interior.alt4"),
    },
    {
      src: "images/about/crkva-stockholm-unutra-5.jpg",
      alt: t("about.gallery.interior.alt5"),
    },
    {
      src: "images/about/crkva-stockholm-unutra-6.jpg",
      alt: t("about.gallery.interior.alt6"),
    },
    {
      src: "images/about/crkva-stockholm-unutra-7.jpg",
      alt: t("about.gallery.interior.alt7"),
    },
    {
      src: "images/about/crkva-stockholm-unutra-8.jpg",
      alt: t("about.gallery.interior.alt8"),
    },
    {
      src: "images/about/crkva-stockholm-unutra-9.jpg",
      alt: t("about.gallery.interior.alt9"),
    },
    {
      src: "images/about/crkva-stockholm-unutra-10.jpg",
      alt: t("about.gallery.interior.alt9"),
    },
    {
      src: "images/about/crkva-stockholm-unutra-11.jpg",
      alt: t("about.gallery.interior.alt9"),
    },
    {
      src: "images/about/crkva-stockholm-unutra-12.jpg",
      alt: t("about.gallery.interior.alt9"),
    },
    {
      src: "images/about/crkva-stockholm-unutra-13.jpg",
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
