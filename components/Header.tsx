'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, Menu, X, Clock, MapPin } from 'lucide-react';
import { BUSINESS_INFO, NAV_ITEMS } from '@/lib/site-data';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Notification Bar - Highlighting 24 Hours & Location */}
      <div className="bg-[#102A43] text-white text-xs sm:text-sm py-2 px-4 border-b border-[#1E3A5F]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1.5 font-medium text-amber-300">
              <Clock className="w-3.5 h-3.5" />
              <span>Open 24 Hours, 7 Days a Week</span>
            </span>
            <span className="hidden md:inline-flex items-center gap-1 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              <span>Gate 3, Bus Stand, Jawahar Nagar, Jalandhar</span>
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={BUSINESS_INFO.telUrl}
              className="hover:text-amber-300 transition-colors flex items-center gap-1.5 font-semibold"
              title="Call Self Study Library"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>{BUSINESS_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md py-2.5'
            : 'bg-white py-3.5 border-b border-slate-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              href="#home"
              className="flex items-center gap-2 group focus:outline-none focus:ring-2 focus:ring-[#1D4ED8] rounded-lg"
              title="Self Study Library Jalandhar"
            >
              <div className="relative w-48 sm:w-60 h-12">
                <Image
                  src="/logo/logo.svg"
                  alt="Self Study Library Jalandhar Logo"
                  fill
                  priority
                  className="object-contain object-left"
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2" aria-label="Main navigation">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-3.5 py-2 text-sm font-semibold text-slate-700 hover:text-[#1D4ED8] rounded-md transition-colors hover:bg-slate-50"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA Call Now */}
            <div className="hidden lg:flex items-center space-x-3">
              <a
                href={BUSINESS_INFO.telUrl}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#1D4ED8] hover:bg-[#1E40AF] text-white font-bold text-sm rounded-lg shadow-sm hover:shadow transition-all transform active:scale-95"
              >
                <Phone className="w-4 h-4 text-amber-300" />
                <span>Call Now</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <a
                href={BUSINESS_INFO.telUrl}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#1D4ED8] text-white text-xs font-bold rounded-lg shadow-sm"
                aria-label="Call Self Study Library"
              >
                <Phone className="w-3.5 h-3.5 text-amber-300" />
                <span>Call</span>
              </a>

              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg text-slate-700 hover:text-[#102A43] hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]"
                aria-expanded={isOpen}
                aria-label="Toggle navigation menu"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white shadow-xl animate-in slide-in-from-top-2 duration-200">
            <div className="px-4 pt-3 pb-5 space-y-1">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2.5 text-base font-semibold text-slate-700 hover:text-[#1D4ED8] hover:bg-slate-50 rounded-md transition-colors"
                >
                  {item.name}
                </Link>
              ))}

              <div className="pt-4 border-t border-slate-100 flex flex-col gap-2.5">
                <a
                  href={BUSINESS_INFO.telUrl}
                  onClick={() => setIsOpen(false)}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-[#1D4ED8] text-white font-bold text-base rounded-lg shadow text-center"
                >
                  <Phone className="w-5 h-5 text-amber-300" />
                  <span>Call +91 81959 74627</span>
                </a>
                <a
                  href={BUSINESS_INFO.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-base rounded-lg text-center"
                >
                  <MapPin className="w-5 h-5 text-[#1D4ED8]" />
                  <span>Get Directions (Bus Stand Gate 3)</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

