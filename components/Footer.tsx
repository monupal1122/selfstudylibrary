import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Phone, Clock, Navigation, Heart, Shield } from 'lucide-react';
import { BUSINESS_INFO, NAV_ITEMS } from '@/lib/site-data';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#102A43] text-white border-t border-[#1E3A5F] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-700">
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative w-64 h-14">
              <Image
                src="/logo/logo-white.svg"
                alt="Self Study Library Jalandhar Logo"
                fill
                className="object-contain object-left"
              />
            </div>
            <p className="text-sm text-slate-300 leading-relaxed max-w-md">
              Self Study Library is Jalandhar’s premier 24-hour self-study space located right at Gate 3 of Jalandhar Bus Stand, outside Jawahar Nagar. Providing individual partition cabins, ergonomic seating, high-speed Wi-Fi, and a strictly silent atmosphere for focused exam preparation.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-xs font-semibold text-amber-300">
              <Clock className="w-3.5 h-3.5" />
              <span>Open 24 Hours • 7 Days a Week</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-base font-bold text-white uppercase tracking-wider">
              Quick Navigation
            </h3>
            <ul className="space-y-2 text-sm text-slate-300">
              {NAV_ITEMS.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="hover:text-[#F4B942] transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-[#F4B942]">&rsaquo;</span>
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact & Address */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="text-base font-bold text-white uppercase tracking-wider">
              Location &amp; Contact
            </h3>
            <div className="space-y-3 text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-5 h-5 text-[#F4B942] flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  Gate 3, Bus Stand, Near Headmasters Academy, Outside, Jawahar Nagar, Jalandhar, Punjab 144001, India.
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#F4B942] flex-shrink-0" />
                <a
                  href={BUSINESS_INFO.telUrl}
                  className="font-bold text-white hover:text-amber-300 transition-colors"
                >
                  {BUSINESS_INFO.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#F4B942] flex-shrink-0" />
                <span>Open 24 Hours (Monday – Sunday)</span>
              </div>

              <div className="pt-2">
                <a
                  href={BUSINESS_INFO.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#1D4ED8] hover:bg-blue-600 text-white font-bold text-xs rounded-lg transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Google Maps Directions</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Local SEO Keywords Footer Cloud */}
        <div className="py-6 border-b border-slate-700/60 text-xs text-slate-400">
          <p className="font-semibold text-slate-300 mb-2">Popular Searches in Jalandhar:</p>
          <div className="flex flex-wrap gap-x-4 gap-y-1.5">
            <span>Self Study Library in Jalandhar</span>
            <span>•</span>
            <span>Library Near Bus Stand Jalandhar</span>
            <span>•</span>
            <span>Self Study Library Near Bus Stand</span>
            <span>•</span>
            <span>Reading Room in Jalandhar</span>
            <span>•</span>
            <span>Study Library in Jawahar Nagar Jalandhar</span>
            <span>•</span>
            <span>24 Hours Library in Jalandhar</span>
            <span>•</span>
            <span>Study Room Near Jalandhar Bus Stand</span>
            <span>•</span>
            <span>Best Self Study Library in Jalandhar</span>
          </div>
        </div>

        {/* Copyright & Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-3">
          <p>
            &copy; {currentYear} Self Study Library, Jalandhar. All rights reserved.
          </p>
          <p className="flex items-center gap-1">
            <span>Dedicated to student success in Punjab</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

