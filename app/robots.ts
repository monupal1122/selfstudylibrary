import { MetadataRoute } from 'next';
import { BUSINESS_INFO } from '@/lib/site-data';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${BUSINESS_INFO.canonicalUrl}/sitemap.xml`,
  };
}

