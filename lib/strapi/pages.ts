import { fetchStrapi } from './client';
import type { CollectionResponse, LandingPage } from './types';

export async function getPageBySlug(slug: string): Promise<LandingPage | null> {
  const params = { 'filters[slug][$eq]': slug, 'populate[sections][populate]': '*',}

  const res = await fetchStrapi<CollectionResponse<LandingPage>>('/api/landing-pages', params);
  return res.data?.[0] ?? null;
}
