import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Facilities from '@/components/Facilities';
import WhyChooseUs from '@/components/WhyChooseUs';
import Gallery from '@/components/Gallery';
import Location from '@/components/Location';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import FloatingActionButtons from '@/components/FloatingActionButtons';

export default function HomePage() {
  return (
    <div className="relative min-h-screen flex flex-col bg-white">
      {/* Sticky Header Navigation */}
      <Header />

      {/* Main Content Landmark */}
      <main className="flex-1">
        {/* Section 1: Hero */}
        <Hero />

        {/* Section 2: Introduction & Focus */}
        <About />

        {/* Section 3: Facilities */}
        <Facilities />

        {/* Section 4: Why Choose Us */}
        <WhyChooseUs />

        {/* Section 5: Gallery with Lightbox Preview */}
        <Gallery />

        {/* Section 6: Location & Interactive Map */}
        <Location />

        {/* Section 7: Contact & Student FAQs */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Persistent Floating Call & WhatsApp Buttons */}
      <FloatingActionButtons />
    </div>
  );
}

