import { fetchStrapi, type CollectionResponse } from '@growth/strapi';
import type { LandingPage } from './types';

export async function getPageBySlug(slug: string): 
  Promise<LandingPage | null> {
  const params = {
    'filters[slug][$eq]': slug,
    'populate[sections][on][landing-page.hero][populate]': '*',
    'populate[sections][on][landing-page.auction-row][populate][items][populate]': '*',
    'populate[sections][on][landing-page.category-grid][populate]': '*',
    'populate[sections][on][landing-page.cta-band][populate]': '*',
    'populate[sections][on][landing-page.faq][populate]': '*',
    'populate[seo][populate]': '*',
  };

  const res = await fetchStrapi<CollectionResponse<LandingPage>>('/api/landing-pages', params);
  return res.data?.[0] ?? null;
}
