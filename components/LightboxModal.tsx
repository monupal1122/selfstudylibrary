'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GalleryImage } from '@/types';

interface LightboxModalProps {
  images: GalleryImage[];
  currentIndex: number | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export default function LightboxModal({
  images,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}: LightboxModalProps) {
  useEffect(() => {
    if (currentIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [currentIndex, onClose, onPrev, onNext]);

  if (currentIndex === null || !images[currentIndex]) return null;

  const current = images[currentIndex];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Image Preview"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-5 right-5 z-20 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#F4B942]"
        aria-label="Close Lightbox"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Prev Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#F4B942]"
        aria-label="Previous Image"
      >
        <ChevronLeft className="w-7 h-7" />
      </button>

      {/* Next Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#F4B942]"
        aria-label="Next Image"
      >
        <ChevronRight className="w-7 h-7" />
      </button>

      {/* Image & Caption Container */}
      <div
        className="relative max-w-4xl w-full max-h-[85vh] flex flex-col items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full aspect-[4/3] max-h-[70vh] rounded-2xl overflow-hidden bg-slate-900 border border-white/10 shadow-2xl">
          <Image
            src={current.src}
            alt={current.alt}
            fill
            sizes="(max-width: 1024px) 95vw, 1000px"
            className="object-contain"
            priority
          />
        </div>

        {/* Caption */}
        <div className="mt-4 text-center text-white px-4">
          <span className="inline-block px-2.5 py-0.5 mb-1.5 text-xs font-semibold rounded-full bg-amber-400 text-slate-950">
            {current.category}
          </span>
          <p className="text-base sm:text-lg font-medium">{current.caption}</p>
          <p className="text-xs text-slate-400 mt-1">
            Photo {currentIndex + 1} of {images.length} • Self Study Library Jalandhar
          </p>
        </div>
      </div>
    </div>
  );
}

