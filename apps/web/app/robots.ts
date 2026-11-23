import type { MetadataRoute } from 'next';
import { LANDINGS_SSR_URL } from '@growth/strapi';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/', disallow: '/api/' },
    sitemap: `${LANDINGS_SSR_URL}/sitemap.xml`,
  };
}
