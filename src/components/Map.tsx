
import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { MapPin } from 'lucide-react';
import L from 'leaflet';

// Fix for default marker icons in Leaflet with webpack/vite
// This is needed because Leaflet's default marker icons reference files that aren't properly bundled
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

// This component sets the view of the map after it's mounted
const SetViewOnMount = ({ coords }: { coords: [number, number] }) => {
  const map = useMap();
  
  useEffect(() => {
    map.setView(coords, 14);
  }, [map, coords]);
  
  return null;
};

interface MapProps {
  className?: string;
}

const Map: React.FC<MapProps> = ({ className = '' }) => {
  const address = "Bägerstavägen 68, 120 47 Enskede Gård, Sweden";
  const coordinates: [number, number] = [59.289213, 18.048665]; // [lat, lng] format for Leaflet
  
  return (
    <div className={`relative w-full h-96 rounded-lg overflow-hidden ${className}`}>
      {/* Map container */}
      <MapContainer 
        style={{ height: '100%', width: '100%' }}
        className="z-0 rounded-lg"
      >
        <SetViewOnMount coords={coordinates} />
        
        {/* OpenStreetMap tile layer */}
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        {/* Marker for the church location */}
        <Marker position={coordinates}>
          <Popup>
            <div className="p-1">
              <strong>Sveti Sava Church</strong><br />
              {address}
            </div>
          </Popup>
        </Marker>
      </MapContainer>
      
      {/* Title overlay */}
      <div className="absolute top-4 left-4 bg-white px-3 py-2 rounded-md shadow-md flex items-center z-[400]">
        <MapPin className="w-4 h-4 text-orthodox-gold mr-2" />
        <span className="text-sm font-medium">Sveti Sava Church</span>
      </div>
    </div>
  );
};

export default Map;
