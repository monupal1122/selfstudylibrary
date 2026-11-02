'use client';

import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '@/lib/site-data';

export default function FloatingActionButtons() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3 pointer-events-none">
      {/* Phone Floating Button */}
      <a
        href={BUSINESS_INFO.telUrl}
        className="pointer-events-auto flex items-center gap-2 px-3.5 py-2.5 bg-[#1D4ED8] hover:bg-[#1E40AF] text-white rounded-full shadow-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 group focus:outline-none focus:ring-4 focus:ring-blue-300"
        title="Call Self Study Library"
        aria-label="Call +91 81959 74627"
      >
        <Phone className="w-5 h-5 text-amber-300 animate-pulse" />
        <span className="hidden sm:inline text-xs font-bold tracking-wide pr-1">
          Call Now
        </span>
      </a>

      {/* WhatsApp Floating Button */}
      <a
        href={BUSINESS_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto flex items-center gap-2 px-3.5 py-2.5 bg-[#25D366] hover:bg-[#20BD5A] text-white rounded-full shadow-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 group focus:outline-none focus:ring-4 focus:ring-green-300"
        title="Chat on WhatsApp"
        aria-label="Chat on WhatsApp with Self Study Library"
      >
        <MessageCircle className="w-5 h-5" />
        <span className="hidden sm:inline text-xs font-bold tracking-wide pr-1">
          WhatsApp
        </span>
      </a>
    </div>
  );
}

