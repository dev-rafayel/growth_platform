import { fetchStrapi, type CollectionResponse } from '@growth/strapi';
import type { LandingPage, PageSummary } from './types';

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

export async function getAllPages(): Promise<Array<PageSummary>> {
  const params = {
    'fields[0]': 'slug',
    'fields[1]': 'updatedAt',
    'populate[seo][fields][0]': 'noIndex',
    'pagination[pageSize]': '100',
  };

  const res = await fetchStrapi<CollectionResponse<PageSummary>>('/api/landing-pages', params);
  return res.data ?? [];
}
