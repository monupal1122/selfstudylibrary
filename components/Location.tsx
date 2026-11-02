import React from 'react';
import { MapPin, Navigation, Phone, Clock, Compass, Bus, Shield } from 'lucide-react';
import { BUSINESS_INFO } from '@/lib/site-data';

export default function Location() {
  return (
    <section id="location" className="py-16 md:py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-50 text-[#1D4ED8] mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>Prime City Center Location</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#102A43] tracking-tight">
            Find Us Near Jalandhar Bus Stand
          </h2>
          <div className="w-16 h-1.5 bg-[#F4B942] mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Conveniently located right opposite Gate 3 of the Jalandhar Interstate Bus Terminal, near Headmasters Academy in Jawahar Nagar.
          </p>
        </div>

        {/* Location Grid: Details Card & Interactive Google Maps Embed */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Address & Direction Guide Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-2xl bg-[#102A43] text-white shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-36 h-36 bg-[#1D4ED8] rounded-full blur-3xl opacity-30 pointer-events-none" />

              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#F4B942] text-[#102A43] flex items-center justify-center font-bold">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Self Study Library</h3>
                  <p className="text-xs text-amber-300 font-semibold">Jalandhar, Punjab</p>
                </div>
              </div>

              {/* Exact Address */}
              <div className="space-y-2 border-t border-slate-700 pt-5 text-sm text-slate-200">
                <p className="font-bold text-white text-base">Address:</p>
                <p className="leading-relaxed font-medium">
                  {BUSINESS_INFO.address.line1},<br />
                  {BUSINESS_INFO.address.line2},<br />
                  {BUSINESS_INFO.address.city}, {BUSINESS_INFO.address.state} {BUSINESS_INFO.address.postalCode}, {BUSINESS_INFO.address.country}
                </p>
              </div>

              {/* Landmark Highlights */}
              <div className="mt-6 pt-5 border-t border-slate-700 space-y-2.5 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <Bus className="w-4 h-4 text-[#F4B942] flex-shrink-0" />
                  <span><strong>Landmark:</strong> Directly at Gate 3, Bus Stand Jalandhar</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-[#F4B942] flex-shrink-0" />
                  <span><strong>Nearby:</strong> Near Headmasters Academy, Jawahar Nagar</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#F4B942] flex-shrink-0" />
                  <span><strong>Timings:</strong> Open 24 Hours, 7 Days a Week</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 pt-5 border-t border-slate-700 flex flex-col sm:flex-row gap-3">
                <a
                  href={BUSINESS_INFO.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#F4B942] hover:bg-amber-400 text-[#102A43] font-extrabold text-sm rounded-xl transition-all shadow-md active:scale-95"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Get Directions</span>
                </a>

                <a
                  href={BUSINESS_INFO.telUrl}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#1D4ED8] hover:bg-blue-600 text-white font-extrabold text-sm rounded-xl transition-all shadow-md active:scale-95"
                >
                  <Phone className="w-4 h-4 text-amber-300" />
                  <span>Call Now</span>
                </a>
              </div>
            </div>

            {/* Commuter Accessibility Note */}
            <div className="p-5 rounded-2xl bg-[#F5F7FA] border border-slate-200 text-xs sm:text-sm text-slate-600 space-y-2">
              <p className="font-bold text-[#102A43] flex items-center gap-2">
                <Bus className="w-4 h-4 text-[#1D4ED8]" />
                <span>How to Reach Us:</span>
              </p>
              <p className="leading-relaxed">
                If arriving by bus from Phagwara, Ludhiana, Amritsar, Kapurthala, or Hoshiarpur, step out through <strong>Gate 3</strong> of Jalandhar Bus Stand towards Jawahar Nagar. Self Study Library is right beside the main academy cluster.
              </p>
            </div>
          </div>

          {/* Embedded Google Maps Container */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl overflow-hidden border-2 border-slate-200 shadow-xl bg-slate-100">
              {/* Map header info */}
              <div className="p-4 bg-[#102A43] text-white flex items-center justify-between border-b border-slate-700">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#F4B942]" />
                  <span className="text-xs sm:text-sm font-semibold">
                    Google Maps • Gate 3, Bus Stand, Jawahar Nagar, Jalandhar
                  </span>
                </div>
                <a
                  href={BUSINESS_INFO.googleMapsPlaceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-amber-300 hover:underline font-bold"
                >
                  View Large Map
                </a>
              </div>

              {/* Map Iframe */}
              <div className="relative w-full h-[400px] sm:h-[460px]">
                <iframe
                  title="Self Study Library Location Map near Jalandhar Bus Stand Gate 3"
                  src="https://maps.google.com/maps?q=Gate+3+Bus+Stand+Jawahar+Nagar+Jalandhar+Punjab+144001&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>

              {/* Map Footer Bar */}
              <div className="p-3 bg-white border-t border-slate-200 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-600">
                <span className="font-medium">
                  Postal Code: 144001 • Jalandhar City Center
                </span>
                <a
                  href={BUSINESS_INFO.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-bold text-[#1D4ED8] hover:underline"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Start Turn-by-Turn GPS Navigation &rarr;</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

