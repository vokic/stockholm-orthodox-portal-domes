
import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogClose
} from "@/components/ui/dialog";
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface GalleryProps {
  images: {
    src: string;
    alt: string;
  }[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImageIndex === null) return;
      
      if (e.key === 'ArrowLeft') {
        navigateImages('prev');
      } else if (e.key === 'ArrowRight') {
        navigateImages('next');
      } else if (e.key === 'Escape') {
        setSelectedImageIndex(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImageIndex, images]);

  // Navigate through images
  const navigateImages = (direction: 'prev' | 'next') => {
    if (selectedImageIndex === null) return;

    setIsLoading(true);
    
    let newIndex;
    if (direction === 'prev') {
      newIndex = selectedImageIndex === 0 ? images.length - 1 : selectedImageIndex - 1;
    } else {
      newIndex = selectedImageIndex === images.length - 1 ? 0 : selectedImageIndex + 1;
    }
    
    setSelectedImageIndex(newIndex);
  };

  const handleImageLoaded = () => {
    setIsLoading(false);
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div 
            key={index} 
            className="aspect-square overflow-hidden rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
            onClick={() => setSelectedImageIndex(index)}
          >
            <img 
              src={image.src} 
              alt={image.alt} 
              className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
            />
          </div>
        ))}
      </div>

      <Dialog 
        open={selectedImageIndex !== null} 
        onOpenChange={(open) => !open && setSelectedImageIndex(null)}
      >
        <DialogContent className="max-w-5xl p-0 bg-black/90 border-none">
          <DialogClose className="absolute right-3 top-3 z-10 text-white hover:text-gray-300">
            <X className="h-6 w-6" />
          </DialogClose>
          
          {selectedImageIndex !== null && (
            <div className="w-full h-full flex items-center justify-center p-4 relative">
              {/* Loading indicator */}
              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 border-4 border-t-orthodox-gold border-opacity-50 rounded-full animate-spin"></div>
                </div>
              )}
              
              {/* Left navigation button */}
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  navigateImages('prev');
                }}
                className="absolute left-4 z-10 bg-black/40 text-white rounded-full p-2 hover:bg-black/60 transition-colors"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              
              {/* Image */}
              <img 
                src={images[selectedImageIndex].src} 
                alt={images[selectedImageIndex].alt} 
                className={`max-h-[80vh] max-w-full object-contain transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
                onLoad={handleImageLoaded}
              />
              
              {/* Right navigation button */}
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  navigateImages('next');
                }}
                className="absolute right-4 z-10 bg-black/40 text-white rounded-full p-2 hover:bg-black/60 transition-colors"
                aria-label="Next image"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
              
              {/* Image counter */}
              <div className="absolute bottom-4 left-0 right-0 text-center text-white text-sm">
                {selectedImageIndex + 1} / {images.length}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Gallery;
