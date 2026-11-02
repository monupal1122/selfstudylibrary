import React from 'react';
import { VolumeX, BookOpen, MapPin, Clock, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO } from '@/lib/site-data';

export default function About() {
  return (
    <section id="about" className="py-16 md:py-20 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-50 text-[#1D4ED8] mb-3">
            About Our Library
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#102A43] tracking-tight">
            A Better Place to Focus on Your Goals
          </h2>
          <div className="w-14 h-1 bg-[#F4B942] mx-auto mt-3 rounded-full" />
          <p className="mt-4 text-base sm:text-lg text-slate-700 leading-relaxed">
            Finding a quiet corner to study at home with daily chores, family guests, and noise can be difficult. <strong className="text-[#102A43]">Self Study Library in Jalandhar</strong> is built to give students and exam aspirants an honest, quiet, and comfortable space to sit and study for hours without any disturbance.
          </p>
        </div>

        {/* 4 Core Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="p-6 rounded-xl bg-[#F5F7FA] border border-slate-200 hover:border-[#1D4ED8] transition-all hover:shadow-md">
            <div className="w-11 h-11 rounded-lg bg-[#102A43] text-[#F4B942] flex items-center justify-center mb-4">
              <VolumeX className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[#102A43] mb-2">
              Strict Silent Environment
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              We strictly maintain pin-drop silence in the reading halls. No loud talking, no phone calls inside, and no interruptions.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-6 rounded-xl bg-[#F5F7FA] border border-slate-200 hover:border-[#1D4ED8] transition-all hover:shadow-md">
            <div className="w-11 h-11 rounded-lg bg-[#1D4ED8] text-white flex items-center justify-center mb-4">
              <BookOpen className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[#102A43] mb-2">
              Individual Study Cabins
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              You get your own partition desk with a comfortable cushioned chair, charging socket, and personal space to keep your books and laptop.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-6 rounded-xl bg-[#F5F7FA] border border-slate-200 hover:border-[#1D4ED8] transition-all hover:shadow-md">
            <div className="w-11 h-11 rounded-lg bg-[#102A43] text-[#F4B942] flex items-center justify-center mb-4">
              <MapPin className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[#102A43] mb-2">
              Near Jalandhar Bus Stand
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Located right outside Gate 3 of the Bus Stand in Jawahar Nagar, near Headmasters Academy. Easy to reach on foot or by local transport.
            </p>
          </div>

          {/* Card 4 */}
          <div className="p-6 rounded-xl bg-[#F5F7FA] border border-slate-200 hover:border-[#1D4ED8] transition-all hover:shadow-md">
            <div className="w-11 h-11 rounded-lg bg-[#1D4ED8] text-white flex items-center justify-center mb-4">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[#102A43] mb-2">
              Open 24 Hours Every Day
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Study on your own schedule. Whether you like studying early in the morning or doing full night revision, the library is open 24/7.
            </p>
          </div>
        </div>

        {/* Practical Student Banner */}
        <div className="mt-10 p-7 sm:p-9 rounded-2xl bg-[#102A43] text-white shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-8 space-y-3">
              <h3 className="text-2xl font-bold text-white">
                Preparing for Competitive Exams in Punjab?
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Many of our students are actively preparing for <strong>UPSC, PPSC, Punjab Police, Banking, SSC, IELTS / PTE, NEET, and Semester Exams</strong>. Being around dedicated students naturally builds consistency and study discipline.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 text-sm text-slate-200">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#F4B942] flex-shrink-0" />
                  <span>Proper lighting that does not strain your eyes</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#F4B942] flex-shrink-0" />
                  <span>24/7 CCTV surveillance for safe night study</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#F4B942] flex-shrink-0" />
                  <span>Air conditioning for summer &amp; comfortable winters</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#F4B942] flex-shrink-0" />
                  <span>RO drinking water &amp; clean washrooms</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-center justify-center p-5 bg-white/10 rounded-xl border border-white/15 text-center">
              <span className="text-xs uppercase font-bold text-amber-300 tracking-wider mb-1">Visit Today</span>
              <div className="text-lg font-bold text-white mb-2">Check Seat &amp; Timings</div>
              <p className="text-xs text-slate-300 mb-4">Call or drop by directly to select your cabin desk.</p>
              <a
                href={BUSINESS_INFO.telUrl}
                className="w-full py-2.5 px-4 bg-[#F4B942] hover:bg-amber-400 text-[#102A43] font-bold text-sm rounded-lg text-center transition-colors shadow"
              >
                Call: {BUSINESS_INFO.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
