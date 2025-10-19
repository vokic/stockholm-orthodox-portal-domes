import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useLanguage } from "../context/LanguageContext";
import ParishTodaySection from "../components/ParishTodaySection";
import OurMissionSection from "../components/OurMissionSection";
import OurCommunitySection from "../components/OurCommunitySection";
import AboutHero from "../components/about/AboutHero";
import AboutHistory from "../components/about/AboutHistory";
import AboutSvetiSava from "../components/about/AboutSvetiSava";
import AboutPriests from "../components/about/AboutPriests";
import AboutLocationHours from "../components/about/AboutLocationHours";
import AboutCommunityStats from "../components/about/AboutCommunityStats";
import AboutGallery from "../components/about/AboutGallery";
import AboutImageModal from "../components/about/AboutImageModal";
import ParishesSection from "@/components/ParishesSection";

const AboutPage: React.FC = () => {
  const { t } = useLanguage();
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null
  );
  const [isLoading, setIsLoading] = useState(false);

  // All standalone images on the page for modal viewing
  const allPageImages = [
    {
      src: "/images/about/srpska-pravoslavna-crkva-stockholm-danas-1.jpg",
      alt: t("about.parishToday.image1Alt"),
    },
    {
      src: "/images/about/srpska-pravoslavna-crkva-stockholm-danas-2.jpg",
      alt: t("about.parishToday.image2Alt"),
    },
    {
      src: "/images/about/srpska-pravoslavna-crkva-stockholm-danas-3.jpg",
      alt: t("about.parishToday.image3Alt"),
    },
    // History section images
    {
      src: "/images/about/crkva-stockholm-stari-izgled.jpg",
      alt: t("about.gallery.churchHistory"),
    },
    {
      src: "/images/about/crkva-stockholm-spolja-1.jpg",
      alt: t("about.gallery.churchHistory"),
    },
    {
      src: "/images/about/sveti-sava-1.jpg",
      alt: t("about.svetiSava.image0Alt"),
    },
    {
      src: "/images/about/sveti-sava-2.jpg",
      alt: t("about.svetiSava.image0Alt"),
    },
    {
      src: "/images/about/sveti-sava-3.jpg",
      alt: t("about.svetiSava.image0Alt"),
    },
    {
      src: "https://images.unsplash.com/photo-1473177104440-ffee2f376098?w=800&h=600&fit=crop",
      alt: t("about.svetiSava.image1Alt"),
    },
    {
      src: "https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?w=800&h=900&fit=crop",
      alt: t("about.svetiSava.image2Alt"),
    },
    {
      src: "https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?w=800&h=600&fit=crop",
      alt: t("about.svetiSava.image3Alt"),
    },
    {
      src: "/placeholder.svg",
      alt: t("about.gallery.churchHistory"),
    },
    {
      src: "/placeholder.svg",
      alt: t("about.gallery.churchInterior"),
    },
    {
      src: "/placeholder.svg",
      alt: t("about.priest1.imageAlt"),
    },
    {
      src: "/placeholder.svg",
      alt: t("about.priest2.imageAlt"),
    },
    {
      src: "https://images.unsplash.com/photo-1551038247-3d9af20df552?w=800&h=600&fit=crop",
      alt: t("about.parishToday.image1Alt"),
    },
    {
      src: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=800&h=600&fit=crop",
      alt: t("about.ourMission.image1Alt"),
    },
    {
      src: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&h=600&fit=crop",
      alt: t("about.ourCommunity.image1Alt"),
    },
    {
      src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop",
      alt: t("about.ourCommunity.image2Alt"),
    },
  ];

  // Handle image click
  const handleImageClick = (imageSrc: string) => {
    const imageIndex = allPageImages.findIndex((img) => img.src === imageSrc);
    if (imageIndex !== -1) {
      setSelectedImageIndex(imageIndex);
      setIsLoading(true);
    }
  };

  // Navigate through images
  const navigateImages = (direction: "prev" | "next") => {
    if (selectedImageIndex === null) return;

    setIsLoading(true);

    let newIndex;
    if (direction === "prev") {
      newIndex =
        selectedImageIndex === 0
          ? allPageImages.length - 1
          : selectedImageIndex - 1;
    } else {
      newIndex =
        selectedImageIndex === allPageImages.length - 1
          ? 0
          : selectedImageIndex + 1;
    }

    setSelectedImageIndex(newIndex);
  };

  const handleImageLoaded = () => {
    setIsLoading(false);
  };

  const handleCloseModal = () => {
    setSelectedImageIndex(null);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <AboutHero />

        {/* Parish Today Section */}
        <ParishTodaySection onImageClick={handleImageClick} />

        {/* Our Mission Section */}
        {/* <OurMissionSection onImageClick={handleImageClick} /> */}

        {/* Our Community Section */}
        {/* <OurCommunitySection onImageClick={handleImageClick} /> */}

        {/* Parishes Section */}
        {/* <ParishesSection /> */}

        {/* Gallery Section */}
        <AboutGallery />

        {/* History Section */}
        {/* <AboutHistory onImageClick={handleImageClick} /> */}

        {/* Sveti Sava Section */}
        {/* <AboutSvetiSava onImageClick={handleImageClick} /> */}

        {/* Our Priests Section */}
        {/* <AboutPriests onImageClick={handleImageClick} /> */}

        {/* Location and Working Hours Section */}
        {/* <AboutLocationHours /> */}

        {/* Our Community Section */}
        {/* <AboutCommunityStats /> */}
      </main>

      <Footer />

      {/* Modal for standalone images */}
      <AboutImageModal
        selectedImageIndex={selectedImageIndex}
        allPageImages={allPageImages}
        isLoading={isLoading}
        onClose={handleCloseModal}
        onNavigate={navigateImages}
        onImageLoaded={handleImageLoaded}
      />
    </div>
  );
};

export default AboutPage;
