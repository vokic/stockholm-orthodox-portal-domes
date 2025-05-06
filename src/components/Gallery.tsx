
import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogClose
} from "@/components/ui/dialog";
import { X } from 'lucide-react';

interface GalleryProps {
  images: {
    src: string;
    alt: string;
  }[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div 
            key={index} 
            className="aspect-square overflow-hidden rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
            onClick={() => setSelectedImage(image.src)}
          >
            <img 
              src={image.src} 
              alt={image.alt} 
              className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
            />
          </div>
        ))}
      </div>

      <Dialog open={!!selectedImage} onOpenChange={(open) => !open && setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0 bg-black/90 border-none">
          <DialogClose className="absolute right-3 top-3 z-10 text-white hover:text-gray-300">
            <X className="h-6 w-6" />
          </DialogClose>
          
          {selectedImage && (
            <div className="w-full h-full flex items-center justify-center p-4">
              <img 
                src={selectedImage} 
                alt="Gallery view" 
                className="max-h-[80vh] max-w-full object-contain"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Gallery;
