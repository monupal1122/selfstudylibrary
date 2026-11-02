import React from 'react';
import { BUSINESS_INFO, FACILITIES, getSiteUrl } from '@/lib/site-data';

export default function JsonLd() {
  const siteUrl = getSiteUrl();

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Library',
    '@id': `${siteUrl}/#library`,
    name: BUSINESS_INFO.name,
    alternateName: [
      'Self Study Library Jalandhar',
      'Self Study Library Near Bus Stand',
      'Self Study Library Jawahar Nagar',
    ],
    description:
      'Self Study Library is a peaceful, 24-hour self study library and reading room located near Gate 3, Jalandhar Bus Stand, Outside Jawahar Nagar, Jalandhar, Punjab. Featuring individual study cabins, air-conditioning, high-speed Wi-Fi, and CCTV security.',
    url: siteUrl,
    telephone: BUSINESS_INFO.phoneRaw,
    image: [
      `${siteUrl}/images/og-image.svg`,
      `${siteUrl}/images/hero-library.svg`,
      `${siteUrl}/logo/logo.svg`,
    ],
    logo: `${siteUrl}/logo/logo.svg`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Gate 3, Bus Stand, Near Headmasters Academy, Outside, Jawahar Nagar',
      addressLocality: 'Jalandhar',
      addressRegion: 'Punjab',
      postalCode: '144001',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '31.3236',
      longitude: '75.5786',
    },
    hasMap: BUSINESS_INFO.googleMapsPlaceUrl,
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
        opens: '00:00',
        closes: '23:59',
      },
    ],
    amenityFeature: FACILITIES.map((f) => ({
      '@type': 'LocationFeatureSpecification',
      name: f.title,
      value: true,
    })),
    priceRange: '₹₹',
    currenciesAccepted: 'INR',
    paymentAccepted: 'Cash, UPI',
    isAccessibleForFree: false,
    areaServed: [
      {
        '@type': 'City',
        name: 'Jalandhar',
      },
      {
        '@type': 'AdministrativeArea',
        name: 'Jawahar Nagar, Jalandhar',
      },
      {
        '@type': 'AdministrativeArea',
        name: 'Bus Stand, Jalandhar',
      },
      {
        '@type': 'State',
        name: 'Punjab',
      },
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: BUSINESS_INFO.phoneRaw,
      contactType: 'customer service',
      availableLanguage: ['English', 'Hindi', 'Punjabi'],
      areaServed: 'IN',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
