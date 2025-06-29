
import React from "react";
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface ImageData {
  src: string;
  alt: string;
}

interface AboutImageModalProps {
  selectedImageIndex: number | null;
  allPageImages: ImageData[];
  isLoading: boolean;
  onClose: () => void;
  onNavigate: (direction: "prev" | "next") => void;
  onImageLoaded: () => void;
}

const AboutImageModal: React.FC<AboutImageModalProps> = ({
  selectedImageIndex,
  allPageImages,
  isLoading,
  onClose,
  onNavigate,
  onImageLoaded,
}) => {
  return (
    <Dialog
      open={selectedImageIndex !== null}
      onOpenChange={(open) => !open && onClose()}
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
                onNavigate("prev");
              }}
              className="absolute left-4 z-10 bg-black/40 text-white rounded-full p-2 hover:bg-black/60 transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <img
              src={allPageImages[selectedImageIndex].src}
              alt={allPageImages[selectedImageIndex].alt}
              className={`max-h-[80vh] max-w-full object-contain transition-opacity duration-300 ${
                isLoading ? "opacity-0" : "opacity-100"
              }`}
              onLoad={onImageLoaded}
            />

            <button
              onClick={(e) => {
                e.stopPropagation();
                onNavigate("next");
              }}
              className="absolute right-4 z-10 bg-black/40 text-white rounded-full p-2 hover:bg-black/60 transition-colors"
              aria-label="Next image"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            <div className="absolute bottom-4 left-0 right-0 text-center text-white text-sm">
              {selectedImageIndex + 1} / {allPageImages.length}
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default AboutImageModal;
