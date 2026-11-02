import React from 'react';
import {
  Armchair,
  VolumeX,
  BookOpen,
  Wind,
  Wifi,
  ShieldCheck,
  Zap,
  Droplets,
  Check,
} from 'lucide-react';
import { FACILITIES, BUSINESS_INFO } from '@/lib/site-data';

const iconMap: Record<string, React.ReactNode> = {
  Armchair: <Armchair className="w-6 h-6" />,
  VolumeX: <VolumeX className="w-6 h-6" />,
  BookOpen: <BookOpen className="w-6 h-6" />,
  Wind: <Wind className="w-6 h-6" />,
  Wifi: <Wifi className="w-6 h-6" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6" />,
  Zap: <Zap className="w-6 h-6" />,
  Droplets: <Droplets className="w-6 h-6" />,
};

export default function Facilities() {
  return (
    <section id="facilities" className="py-16 md:py-24 bg-[#F5F7FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-100 text-[#D97706] mb-3">
            Designed For Serious Learners
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#102A43] tracking-tight">
            Our Library Facilities &amp; Amenities
          </h2>
          <div className="w-16 h-1.5 bg-[#F4B942] mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Every amenity at Self Study Library is carefully arranged to support long, comfortable, and uninterrupted self-study sessions.
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FACILITIES.map((facility) => (
            <div
              key={facility.id}
              className="bg-white rounded-2xl p-6 border border-slate-200/80 hover:border-[#1D4ED8] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#102A43] group-hover:bg-[#1D4ED8] text-[#F4B942] group-hover:text-white flex items-center justify-center transition-colors">
                    {iconMap[facility.icon] || <Check className="w-6 h-6" />}
                  </div>
                  {facility.tag && (
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 group-hover:bg-blue-50 group-hover:text-[#1D4ED8] transition-colors">
                      {facility.tag}
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-bold text-[#102A43] mb-2 group-hover:text-[#1D4ED8] transition-colors">
                  {facility.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {facility.description}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-100 flex items-center text-xs font-semibold text-emerald-700 gap-1.5">
                <Check className="w-4 h-4 text-emerald-600" />
                <span>Available at Self Study Library</span>
              </div>
            </div>
          ))}
        </div>

        {/* Callout Strip */}
        <div className="mt-12 p-6 bg-white rounded-2xl border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-sm">
          <div>
            <h3 className="text-base font-bold text-[#102A43]">
              Need a personalized walkthrough or want to inspect the facilities?
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              Visit us directly at Gate 3, Jalandhar Bus Stand or drop a quick WhatsApp message.
            </p>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0">
            <a
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm rounded-lg transition-colors"
            >
              WhatsApp Us
            </a>
            <a
              href={BUSINESS_INFO.telUrl}
              className="px-4 py-2 bg-[#102A43] hover:bg-[#1E3A5F] text-[#F4B942] font-bold text-xs sm:text-sm rounded-lg transition-colors"
            >
              Call Library
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

