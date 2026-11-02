'use client';

import React, { useState } from 'react';
import {
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  HelpCircle,
  ChevronDown,
  Sparkles,
  ExternalLink,
} from 'lucide-react';
import { BUSINESS_INFO, FAQS } from '@/lib/site-data';

export default function Contact() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-[#F5F7FA] border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-50 text-[#1D4ED8] mb-3">
            Get in Touch
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#102A43] tracking-tight">
            Contact Self Study Library
          </h2>
          <div className="w-16 h-1.5 bg-[#F4B942] mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Have questions about seat availability, study shifts, or timings? Reach out directly via call, WhatsApp, or visit us in person.
          </p>
        </div>

        {/* Contact Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          {/* Card 1: Direct Contact Information */}
          <div className="lg:col-span-5 bg-white rounded-2xl p-8 border border-slate-200 shadow-lg space-y-6">
            <h3 className="text-2xl font-bold text-[#102A43] border-b border-slate-100 pb-4">
              Self Study Library
            </h3>

            {/* Address */}
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#1D4ED8] flex items-center justify-center flex-shrink-0 mt-0.5">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase text-slate-400">Library Location</p>
                <p className="text-sm font-semibold text-[#102A43] leading-relaxed mt-0.5">
                  Gate 3, Bus Stand, Near Headmasters Academy,<br />
                  Outside Jawahar Nagar, Jalandhar,<br />
                  Punjab 144001, India.
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-[#D97706] flex items-center justify-center flex-shrink-0 mt-0.5">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase text-slate-400">Direct Calling Line</p>
                <a
                  href={BUSINESS_INFO.telUrl}
                  className="text-lg font-extrabold text-[#1D4ED8] hover:underline mt-0.5 inline-block"
                >
                  {BUSINESS_INFO.phone}
                </a>
                <p className="text-xs text-slate-500">Available 24 hours for seat queries</p>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase text-slate-400">Library Operating Hours</p>
                <p className="text-base font-extrabold text-emerald-700 mt-0.5">
                  Open 24 Hours, 7 Days a Week
                </p>
                <p className="text-xs text-slate-500">Day shifts, night shifts, and 24-hour passes</p>
              </div>
            </div>

            {/* Clickable Action Buttons */}
            <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
              <a
                href={BUSINESS_INFO.telUrl}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-4 bg-[#1D4ED8] hover:bg-[#1E40AF] text-white font-bold text-sm rounded-xl transition-all shadow-md"
              >
                <Phone className="w-4 h-4 text-amber-300" />
                <span>Click to Call: {BUSINESS_INFO.phone}</span>
              </a>

              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3.5 px-4 bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold text-sm rounded-xl transition-all shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>

              <a
                href={BUSINESS_INFO.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-sm rounded-xl transition-all"
              >
                <ExternalLink className="w-4 h-4 text-slate-600" />
                <span>Open Google Maps Directions</span>
              </a>
            </div>
          </div>

          {/* Card 2: Frequent Questions (FAQ) Section */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-8 border border-slate-200 shadow-lg">
            <div className="flex items-center gap-2.5 mb-6">
              <HelpCircle className="w-6 h-6 text-[#1D4ED8]" />
              <h3 className="text-2xl font-bold text-[#102A43]">
                Frequently Asked Questions
              </h3>
            </div>

            <div className="space-y-4">
              {FAQS.map((faq, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-slate-200 overflow-hidden transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex items-center justify-between p-4 text-left font-bold text-sm sm:text-base text-[#102A43] hover:text-[#1D4ED8] bg-slate-50/50 hover:bg-slate-100/60 transition-colors"
                    aria-expanded={openFaq === idx}
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 flex-shrink-0 transition-transform duration-200 text-slate-500 ${
                        openFaq === idx ? 'rotate-180 text-[#1D4ED8]' : ''
                      }`}
                    />
                  </button>

                  {openFaq === idx && (
                    <div className="p-4 bg-white text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-8 p-4 rounded-xl bg-blue-50 border border-blue-100 flex items-center gap-3 text-xs sm:text-sm text-blue-900">
              <Sparkles className="w-5 h-5 text-[#1D4ED8] flex-shrink-0" />
              <span>
                Want to book an inspection or discuss monthly membership fees? Call or WhatsApp us anytime at <strong>+91 81959 74627</strong>.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

