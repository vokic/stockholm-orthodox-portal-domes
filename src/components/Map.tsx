
import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { MapPin } from 'lucide-react';

interface MapProps {
  className?: string;
}

const Map: React.FC<MapProps> = ({ className = '' }) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [apiKey, setApiKey] = React.useState<string>('');
  const [showApiKeyInput, setShowApiKeyInput] = React.useState(true);

  const address = "Bägerstavägen 68, 120 47 Enskede Gård, Sweden";
  const coordinates = { lng: 18.048665, lat: 59.289213 }; // Coordinates for the address

  useEffect(() => {
    if (!mapContainer.current || !apiKey) return;
    
    try {
      mapboxgl.accessToken = apiKey;
      
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [coordinates.lng, coordinates.lat],
        zoom: 14
      });
      
      // Add navigation controls
      map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');
      
      // Add marker
      const marker = new mapboxgl.Marker({ color: "#c39c4e" })
        .setLngLat([coordinates.lng, coordinates.lat])
        .setPopup(new mapboxgl.Popup({ offset: 25 }).setText(address))
        .addTo(map.current);
      
      marker.togglePopup(); // Show popup by default
      
      // Disable scroll zoom for better UX
      map.current.scrollZoom.disable();
    } catch (error) {
      console.error("Error initializing map:", error);
      setShowApiKeyInput(true);
    }
    
    return () => {
      if (map.current) {
        map.current.remove();
      }
    };
  }, [apiKey]);

  const handleApiKeySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const key = formData.get('mapboxApiKey') as string;
    setApiKey(key);
    setShowApiKeyInput(false);
  };

  return (
    <div className={`relative w-full h-96 rounded-lg overflow-hidden ${className}`}>
      {showApiKeyInput ? (
        <div className="w-full h-full flex flex-col items-center justify-center bg-gray-100 p-6 rounded-lg">
          <div className="max-w-md w-full">
            <h3 className="text-lg font-medium mb-4">Map API Key Required</h3>
            <p className="text-sm text-gray-600 mb-4">
              To view the map, please enter your Mapbox public token. You can find this in your Mapbox account dashboard.
            </p>
            <form onSubmit={handleApiKeySubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="mapboxApiKey"
                  placeholder="Enter your Mapbox public token"
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 px-4 bg-orthodox-blue text-white rounded hover:bg-opacity-90 transition-colors"
              >
                Load Map
              </button>
              <p className="text-xs text-gray-500 mt-2">
                This token will only be stored in your browser's memory for this session.
              </p>
            </form>
          </div>
        </div>
      ) : (
        <>
          <div ref={mapContainer} className="w-full h-full" />
          <div className="absolute top-4 left-4 bg-white px-3 py-2 rounded-md shadow-md flex items-center">
            <MapPin className="w-4 h-4 text-orthodox-gold mr-2" />
            <span className="text-sm font-medium">Sveti Sava Church</span>
          </div>
        </>
      )}
    </div>
  );
};

export default Map;
