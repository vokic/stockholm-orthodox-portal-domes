
import React from 'react';

interface MapProps {
  className?: string;
  address?: string;
  coordinates?: [number, number]; // [latitude, longitude]
}

const Map: React.FC<MapProps> = ({ 
  className = '', 
  address = "Birger Jarlsgatan 98, 114 20 Stockholm, Sweden",
  coordinates = [59.3348, 18.0686] 
}) => {
  // Create a Google Maps embed URL with the address
  const mapEmbedUrl = `https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${encodeURIComponent(address)}&zoom=15&maptype=roadmap&language=en`;
  
  return (
    <div className={`relative w-full h-96 rounded-lg overflow-hidden ${className}`}>
      {/* Google Maps iframe embed */}
      <iframe
        src={mapEmbedUrl}
        className="absolute inset-0 w-full h-full border-0"
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map"
      ></iframe>
    </div>
  );
};

export default Map;
