import React from 'react';
import Image from 'next/image';
import { Phone, Navigation, Clock, ShieldCheck, MapPin, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '@/lib/site-data';

export default function Hero() {
  return (
    <section id="home" className="relative bg-gradient-to-b from-[#F5F7FA] via-white to-white pt-8 pb-16 lg:pt-16 lg:pb-24 overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-blue-100/60 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 -ml-20 w-80 h-80 rounded-full bg-amber-100/50 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Top Badges */}
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-bold bg-[#102A43] text-[#F4B942] shadow-sm">
                <Clock className="w-4 h-4 text-[#F4B942]" />
                <span>OPEN 24 HOURS</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold bg-blue-50 text-[#1D4ED8] border border-blue-200">
                <MapPin className="w-3.5 h-3.5" />
                <span>Near Jalandhar Bus Stand (Gate 3)</span>
              </span>
            </div>

            {/* Main H1 - Local SEO Targeted */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-black text-[#102A43] tracking-tight leading-[1.15]">
              Your Dedicated Space for Focused Study in{' '}
              <span className="text-[#1D4ED8] underline decoration-[#F4B942] decoration-4 underline-offset-8">
                Jalandhar
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg md:text-xl text-[#263238] font-normal leading-relaxed max-w-2xl">
              Discover a peaceful, comfortable and distraction-free self-study environment near Jalandhar Bus Stand. Focus on your goals and make every hour productive.
            </p>

            {/* Key Quick Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 py-2 text-xs sm:text-sm text-slate-700 font-semibold">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Air Conditioned</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Fiber Wi-Fi</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Desk Charging Points</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Private Partitions</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>24/7 CCTV Safety</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>RO Drinking Water</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-3">
              <a
                href={BUSINESS_INFO.telUrl}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-[#1D4ED8] hover:bg-[#1E40AF] text-white font-extrabold text-base rounded-xl shadow-lg shadow-blue-500/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <Phone className="w-5 h-5 text-[#F4B942]" />
                <span>Call Now: {BUSINESS_INFO.phone}</span>
              </a>

              <a
                href={BUSINESS_INFO.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white hover:bg-slate-50 text-[#102A43] font-bold text-base rounded-xl border-2 border-slate-200 hover:border-[#1D4ED8] shadow-sm transition-all"
              >
                <Navigation className="w-5 h-5 text-[#1D4ED8]" />
                <span>Get Directions</span>
              </a>
            </div>

            {/* Address snippet under CTA */}
            <p className="text-xs text-slate-500 flex items-center gap-1.5 pt-1">
              <MapPin className="w-3.5 h-3.5 text-slate-400" />
              <span>Gate 3, Bus Stand, Near Headmasters Academy, Jawahar Nagar, Jalandhar</span>
            </p>
          </div>

          {/* Right Column: Hero Visual Image */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Glow Behind Image */}
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-amber-500 rounded-2xl blur-lg opacity-25" />

              {/* Card Container */}
              <div className="relative rounded-2xl overflow-hidden border-2 border-slate-100 shadow-2xl bg-[#0F172A]">
                <div className="relative w-full aspect-[4/3] sm:aspect-[16/11]">
                  <Image
                    src="/images/hero-library.svg"
                    alt="Self Study Library interior hall near Jalandhar Bus Stand Punjab"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                    className="object-cover"
                  />
                </div>

                {/* Overlaid Banner at Bottom of Hero Card */}
                <div className="p-4 bg-[#102A43] text-white flex items-center justify-between border-t border-[#1E3A5F]">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#1D4ED8] flex items-center justify-center text-[#F4B942]">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-wider text-amber-300 font-bold">100% Distraction Free</div>
                      <div className="text-sm font-semibold text-slate-200">Self Study Library • Jalandhar</div>
                    </div>
                  </div>
                  <a
                    href={BUSINESS_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 px-3 py-1.5 rounded-md transition-colors"
                  >
                    Inquire Seat
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

