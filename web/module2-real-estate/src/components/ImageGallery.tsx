// src/components/ImageGallery.tsx
import { useState } from "react";
import ImageModal from "./ImageModal";

interface ImageGalleryProps {
  images: string[];
  title?: string;
}

export default function ImageGallery({ images, title }: ImageGalleryProps) {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleOpen = (index: number) => {
    setCurrentIndex(index);
    setOpen(true);
  };

  const handlePrev = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  const handleNext = () => setCurrentIndex((prev) => (prev + 1) % images.length);

  if (!images || images.length === 0) return null;

  return (
    <>
      {/* Thumbnails */}
      <div className="grid grid-cols-4 gap-2">
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`${title ?? "Propiedad"} - Imagen ${i + 1}`}
            className="w-full h-24 object-cover rounded cursor-pointer hover:scale-105 transition-transform"
            onClick={() => handleOpen(i)}
          />
        ))}
      </div>

      {/* Modal */}
      {open && (
        <ImageModal
          images={images}
          currentIndex={currentIndex}
          onClose={() => setOpen(false)}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      )}
    </>
  );
}