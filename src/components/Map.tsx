
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
  // Create a Google Maps embed URL without an API key
  // Format: https://www.google.com/maps/embed/v1/place?q=LOCATION_QUERY
  const encodedAddress = encodeURIComponent(address);
  const mapEmbedUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2036.4768582526775!2d${coordinates[1]}!3d${coordinates[0]}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f77d45a792a45%3A0x77d50356d9e38b9!2sB%C3%A4gerstav%C3%A4gen%2068%2C%20120%2047%20Stockholm!5e0!3m2!1sen!2sus!4v1620392301654!5m2!1sen!2sus`;

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
