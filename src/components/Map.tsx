import React from "react";
import { useLanguage } from "../context/LanguageContext";

interface MapProps {
  className?: string;
  address?: string;
  coordinates?: [number, number]; // [latitude, longitude]
}

const Map: React.FC<MapProps> = ({
  className = "",
  address = "Bägerstavägen 68, 120 47 Enskede Gård, Stockholm, Sweden",
  coordinates = [59.3348, 18.0686],
}) => {
  const { t } = useLanguage();
  // Create a Google Maps embed URL with the address
  const mapEmbedUrl = `https://www.google.com/maps/embed/v1/place?key=${import.meta.env.VITE_GOOGLE_MAPS_KEY}&q=${encodeURIComponent(
    address
  )}&zoom=15&maptype=roadmap&language=en`;

  return (
    <div
      className={`relative w-full h-96 rounded-lg overflow-hidden ${className}`}
    >
      {/* Google Maps iframe embed */}
      <iframe
        src={mapEmbedUrl}
        className="absolute inset-0 w-full h-full border-0"
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title={t("aria.googleMap")}
      ></iframe>
    </div>
  );
};

export default Map;
