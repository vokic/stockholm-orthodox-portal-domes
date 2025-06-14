
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
    size?: 'small' | 'medium' | 'large';
  }[];
  className?: string;
  masonry?: boolean;
}

const Gallery: React.FC<GalleryProps> = ({ images, className = '', masonry = false }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [columns, setColumns] = useState<number>(3);

  // Enhanced church gallery images with working placeholder
  const defaultImages = [
    {
      src: '/placeholder.svg',
      alt: 'Beautiful Orthodox church with golden domes',
      size: 'large' as const
    },
    {
      src: '/placeholder.svg',
      alt: 'Orthodox church iconostasis with golden icons',
      size: 'medium' as const
    },
    {
      src: '/placeholder.svg',
      alt: 'Church altar with beautiful Orthodox decorations',
      size: 'small' as const
    },
    {
      src: '/placeholder.svg',
      alt: 'Orthodox church ceremony with congregation',
      size: 'medium' as const
    },
    {
      src: '/placeholder.svg',
      alt: 'Traditional Orthodox wedding ceremony',
      size: 'large' as const
    },
    {
      src: '/placeholder.svg',
      alt: 'Orthodox baptism with holy water',
      size: 'small' as const
    },
    {
      src: '/placeholder.svg',
      alt: 'Church choir during Divine Liturgy',
      size: 'medium' as const
    },
    {
      src: '/placeholder.svg',
      alt: 'Orthodox church architecture details',
      size: 'large' as const
    },
    {
      src: '/placeholder.svg',
      alt: 'Church community gathering after service',
      size: 'medium' as const
    },
    {
      src: '/placeholder.svg',
      alt: 'Orthodox Christmas celebration',
      size: 'small' as const
    },
    {
      src: '/placeholder.svg',
      alt: 'Easter service with paschal candles',
      size: 'large' as const
    },
    {
      src: '/placeholder.svg',
      alt: 'Youth group Bible study session',
      size: 'medium' as const
    }
  ];

  const displayImages = images.length > 0 ? images : defaultImages;

  // Responsive column count based on screen width
  useEffect(() => {
    const updateColumns = () => {
      if (window.innerWidth < 640) {
        setColumns(1);
      } else if (window.innerWidth < 768) {
        setColumns(2);
      } else if (window.innerWidth < 1024) {
        setColumns(3);
      } else {
        setColumns(4);
      }
    };

    updateColumns();
    window.addEventListener('resize', updateColumns);
    return () => window.removeEventListener('resize', updateColumns);
  }, []);

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
  }, [selectedImageIndex, displayImages]);

  // Navigate through images
  const navigateImages = (direction: 'prev' | 'next') => {
    if (selectedImageIndex === null) return;

    setIsLoading(true);
    
    let newIndex;
    if (direction === 'prev') {
      newIndex = selectedImageIndex === 0 ? displayImages.length - 1 : selectedImageIndex - 1;
    } else {
      newIndex = selectedImageIndex === displayImages.length - 1 ? 0 : selectedImageIndex + 1;
    }
    
    setSelectedImageIndex(newIndex);
  };

  const handleImageLoaded = () => {
    setIsLoading(false);
  };

  // Get size class for collage effect
  const getSizeClass = (size?: string) => {
    if (!masonry) {
      switch (size) {
        case 'small':
          return 'col-span-1 row-span-1';
        case 'large':
          return 'col-span-2 row-span-2';
        case 'medium':
        default:
          return 'col-span-1 row-span-2';
      }
    }
    return '';
  };

  // Create columns for masonry layout
  const renderMasonryLayout = () => {
    const columnContents: JSX.Element[][] = Array.from({ length: columns }, () => []);
    
    displayImages.forEach((image, index) => {
      const columnIndex = index % columns;
      
      columnContents[columnIndex].push(
        <div 
          key={index}
          className="mb-4 overflow-hidden rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
          onClick={() => setSelectedImageIndex(index)}
        >
          <img
            src={image.src}
            alt={image.alt}
            className="w-full h-auto object-cover transition-transform hover:scale-105 duration-500"
            loading="lazy"
          />
        </div>
      );
    });
    
    return (
      <div className="flex gap-4">
        {columnContents.map((column, columnIndex) => (
          <div key={columnIndex} className="flex-1 flex flex-col">
            {column}
          </div>
        ))}
      </div>
    );
  };

  // Standard grid layout
  const renderGridLayout = () => (
    <div className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 auto-rows-[minmax(150px,auto)] gap-3`}>
      {displayImages.map((image, index) => (
        <div 
          key={index} 
          className={`${getSizeClass(image.size)} overflow-hidden rounded-lg cursor-pointer hover:opacity-90 transition-opacity`}
          onClick={() => setSelectedImageIndex(index)}
        >
          <img 
            src={image.src} 
            alt={image.alt} 
            className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );

  return (
    <>
      <div className={className}>
        {masonry ? renderMasonryLayout() : renderGridLayout()}
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
              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 border-4 border-t-orthodox-gold border-opacity-50 rounded-full animate-spin"></div>
                </div>
              )}
              
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
              
              <img 
                src={displayImages[selectedImageIndex].src} 
                alt={displayImages[selectedImageIndex].alt} 
                className={`max-h-[80vh] max-w-full object-contain transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
                onLoad={handleImageLoaded}
              />
              
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
              
              <div className="absolute bottom-4 left-0 right-0 text-center text-white text-sm">
                {selectedImageIndex + 1} / {displayImages.length}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Gallery;
