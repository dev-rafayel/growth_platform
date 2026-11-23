import type { MetadataRoute } from 'next';
import { LANDINGS_SSR_URL } from '@growth/strapi';
import { getAllPages } from '@/lib/strapi/pages';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const pages = await getAllPages();

  return pages
    .filter((page) => !page.seo?.noIndex)
    .map((page) => ({
      url: page.slug === 'home' ?
        `${LANDINGS_SSR_URL}/` : `${LANDINGS_SSR_URL}/${page.slug}`,
      lastModified: new Date(page.updatedAt),
    }));
}
