import { MetadataRoute } from 'next';
import { BUSINESS_INFO } from '@/lib/site-data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = BUSINESS_INFO.canonicalUrl;
  const lastModified = new Date();

  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
  ];
}

