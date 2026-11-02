'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ZoomIn, Sparkles, Camera } from 'lucide-react';
import { GALLERY_ITEMS } from '@/lib/site-data';
import LightboxModal from '@/components/LightboxModal';

const categories = ['All', 'Study Hall', 'Cabin Seats', 'Environment', 'Amenities'] as const;

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredImages = selectedCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  const handlePrev = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + filteredImages.length) % filteredImages.length);
  };

  const handleNext = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % filteredImages.length);
  };

  return (
    <section id="gallery" className="py-16 md:py-24 bg-[#F5F7FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-100 text-[#D97706] mb-3">
            <Camera className="w-3.5 h-3.5" />
            <span>Library Ambiance &amp; Interior</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#102A43] tracking-tight">
            Explore Self Study Library
          </h2>
          <div className="w-16 h-1.5 bg-[#F4B942] mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Take a visual tour of our quiet individual cubicles, air-conditioned reading halls, and comfortable study environment in Jalandhar.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                selectedCategory === cat
                  ? 'bg-[#102A43] text-[#F4B942] shadow-md'
                  : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image, idx) => (
            <div
              key={image.id}
              onClick={() => setLightboxIndex(idx)}
              className="group cursor-pointer rounded-2xl overflow-hidden bg-white border border-slate-200 hover:border-[#1D4ED8] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-900">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Hover Overlay with Zoom Icon */}
                <div className="absolute inset-0 bg-[#102A43]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white text-[#102A43] flex items-center justify-center shadow-lg transform scale-75 group-hover:scale-100 transition-transform">
                    <ZoomIn className="w-6 h-6 text-[#1D4ED8]" />
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-[#102A43]/85 text-[#F4B942] backdrop-blur-sm">
                    {image.category}
                  </span>
                </div>
              </div>

              {/* Caption */}
              <div className="p-4 bg-white flex-1 flex flex-col justify-between">
                <h3 className="text-sm font-bold text-[#102A43] group-hover:text-[#1D4ED8] transition-colors line-clamp-2">
                  {image.caption}
                </h3>
                <span className="mt-2 text-xs font-semibold text-slate-400 group-hover:text-[#1D4ED8] inline-flex items-center gap-1">
                  Click to view full preview &rarr;
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Note regarding photographs */}
        <p className="mt-8 text-center text-xs text-slate-500 flex items-center justify-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-amber-500" />
          <span>Photographs represent the study cabins and facilities at Self Study Library Jalandhar. You are welcome to visit Gate 3, Bus Stand for a live walkthrough.</span>
        </p>

        {/* Lightbox Modal */}
        <LightboxModal
          images={filteredImages}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      </div>
    </section>
  );
}

