
import React from 'react';
import { MapPin } from 'lucide-react';

interface MapProps {
  className?: string;
  address?: string;
  coordinates?: [number, number]; // [latitude, longitude]
}

const Map: React.FC<MapProps> = ({ 
  className = '', 
  address = "Bägerstavägen 68, 120 47 Enskede Gård, Sweden",
  coordinates = [59.289213, 18.048665] 
}) => {
  // Create a custom pin for the church location
  const customPin = encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="#1EAEDB" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
      <line x1="12" y1="6" x2="12" y2="14" stroke="white" stroke-width="1.5"></line>
      <line x1="8" y1="10" x2="16" y2="10" stroke="white" stroke-width="1.5"></line>
    </svg>
  `);

  // Create a Google Maps embed URL with custom marker
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
      
      {/* Custom pin overlay */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-full pointer-events-none">
        <MapPin size={32} className="text-blue-500 fill-blue-500" />
      </div>
    </div>
  );
};

export default Map;
