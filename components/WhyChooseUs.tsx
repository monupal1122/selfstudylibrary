import React from 'react';
import {
  MapPin,
  Clock,
  GraduationCap,
  Sparkles,
  BadgeCheck,
  Sun,
  ShieldCheck,
  Users,
} from 'lucide-react';
import { WHY_CHOOSE_ITEMS, BUSINESS_INFO } from '@/lib/site-data';

const iconMap: Record<string, React.ReactNode> = {
  MapPin: <MapPin className="w-6 h-6" />,
  Clock: <Clock className="w-6 h-6" />,
  GraduationCap: <GraduationCap className="w-6 h-6" />,
  Sparkles: <Sparkles className="w-6 h-6" />,
  BadgeCheck: <BadgeCheck className="w-6 h-6" />,
  Sun: <Sun className="w-6 h-6" />,
};

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-16 md:py-24 bg-white border-t border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-50 text-[#1D4ED8] mb-3">
            Why Self Study Library
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#102A43] tracking-tight">
            Why Students in Jalandhar Choose Us
          </h2>
          <div className="w-16 h-1.5 bg-[#F4B942] mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            When preparing for competitive exams or college tests, you need a clean and quiet place where you can sit without interruptions. Here is why students in Jalandhar prefer studying with us:
          </p>
        </div>

        {/* 6 Key Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_CHOOSE_ITEMS.map((item, idx) => (
            <div
              key={item.id}
              className="p-8 rounded-2xl bg-white border border-slate-200/90 hover:border-[#1D4ED8] shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
            >
              {/* Top Accent Gradient Border */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#102A43] via-[#1D4ED8] to-[#F4B942] opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-[#102A43] text-[#F4B942] flex items-center justify-center group-hover:scale-105 transition-transform shadow-md">
                  {iconMap[item.icon] || <ShieldCheck className="w-6 h-6" />}
                </div>
                <span className="text-3xl font-black text-slate-200 group-hover:text-blue-100 transition-colors">
                  0{idx + 1}
                </span>
              </div>

              <h3 className="text-xl font-bold text-[#102A43] mb-3 group-hover:text-[#1D4ED8] transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Study Statistics / Trust Bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 p-8 rounded-2xl bg-[#102A43] text-white shadow-xl">
          <div className="text-center p-3">
            <div className="text-3xl sm:text-4xl font-black text-[#F4B942] mb-1">24 / 7</div>
            <div className="text-xs sm:text-sm font-semibold text-slate-300">Open Round the Clock</div>
          </div>
          <div className="text-center p-3 border-l border-slate-700">
            <div className="text-3xl sm:text-4xl font-black text-[#F4B942] mb-1">Gate 3</div>
            <div className="text-xs sm:text-sm font-semibold text-slate-300">Jalandhar Bus Stand</div>
          </div>
          <div className="text-center p-3 border-t md:border-t-0 md:border-l border-slate-700">
            <div className="text-3xl sm:text-4xl font-black text-[#F4B942] mb-1">100%</div>
            <div className="text-xs sm:text-sm font-semibold text-slate-300">Silent Study Ambiance</div>
          </div>
          <div className="text-center p-3 border-t md:border-t-0 md:border-l border-slate-700">
            <div className="text-3xl sm:text-4xl font-black text-[#F4B942] mb-1">All-In</div>
            <div className="text-xs sm:text-sm font-semibold text-slate-300">AC, Wi-Fi &amp; RO Water</div>
          </div>
        </div>
      </div>
    </section>
  );
}

