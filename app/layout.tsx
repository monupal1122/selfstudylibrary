import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { BUSINESS_INFO } from '@/lib/site-data';
import JsonLd from '@/components/JsonLd';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  fallback: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
});

export const viewport: Viewport = {
  themeColor: '#102A43',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(BUSINESS_INFO.canonicalUrl),
  title: 'Self Study Library in Jalandhar | Near Bus Stand – Open 24 Hours',
  description:
    'Looking for a self study library near Jalandhar Bus Stand? Visit Self Study Library at Gate 3, Jawahar Nagar, Jalandhar. Open 24 hours. Call 81959 74627.',
  keywords: [
    'Self Study Library in Jalandhar',
    'Library Near Bus Stand Jalandhar',
    'Self Study Library Near Bus Stand',
    'Reading Room in Jalandhar',
    'Study Library in Jawahar Nagar Jalandhar',
    '24 Hours Library in Jalandhar',
    'Study Room Near Jalandhar Bus Stand',
    'Best Self Study Library in Jalandhar',
    'Self Study Library Punjab',
    'Silent Study Room Jalandhar',
  ],
  authors: [{ name: 'Self Study Library' }],
  creator: 'Self Study Library',
  publisher: 'Self Study Library',
  alternates: {
    canonical: BUSINESS_INFO.canonicalUrl,
  },
  openGraph: {
    title: 'Self Study Library in Jalandhar | Near Bus Stand – Open 24 Hours',
    description:
      'Looking for a self study library near Jalandhar Bus Stand? Visit Self Study Library at Gate 3, Jawahar Nagar, Jalandhar. Open 24 hours. Call 81959 74627.',
    url: BUSINESS_INFO.canonicalUrl,
    siteName: 'Self Study Library Jalandhar',
    images: [
      {
        url: '/images/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Self Study Library near Jalandhar Bus Stand, Punjab - Open 24 Hours',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Self Study Library in Jalandhar | Near Bus Stand – Open 24 Hours',
    description:
      'Looking for a self study library near Jalandhar Bus Stand? Visit Self Study Library at Gate 3, Jawahar Nagar, Jalandhar. Open 24 hours. Call 81959 74627.',
    images: ['/images/og-image.svg'],
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/icons/icon.svg', type: 'image/svg+xml' },
    ],
    shortcut: ['/favicon.svg'],
    apple: [{ url: '/icons/icon.svg' }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <JsonLd />
      </head>
      <body className={`${inter.className} ${inter.variable} min-h-screen bg-white text-[#263238] antialiased selection:bg-[#F4B942] selection:text-[#102A43]`}>
        {children}
      </body>
    </html>
  );
}
