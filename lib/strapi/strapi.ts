import type { Article, CollectionResponse } from './types';
import { REVALIDATE, STRAPI_CACHE_TAG, STRAPI_URL } from './constants';

export function mediaUrl(value: Article['cover']): string | null {
  const url = value?.url;
  if (!url) return null;

  return url.startsWith('http') ? url : `${STRAPI_URL}${url}`;
}

export async function getArticles(): Promise<Article[]> {
  // Errors must propagate: a failed refresh then keeps serving the last cached page.
  const response = await fetch(`${STRAPI_URL}/api/articles?populate=*`, { next: { revalidate: REVALIDATE, tags: [STRAPI_CACHE_TAG] } });
  if (!response.ok) {
    console.error('Response:', response.statusText);
    throw new Error(`Strapi responded ${response.status}`);
  }
  const result = (await response.json()) as CollectionResponse<Article>;
  return result.data;
}

export async function getArticle(slug: string): Promise<Article | null> {
  const query = new URLSearchParams({ 'filters[slug][$eq]': slug, populate: '*' });
  const response = await fetch(`${STRAPI_URL}/api/articles?${query}`, { next: { revalidate: REVALIDATE, tags: [STRAPI_CACHE_TAG] } });
  if (!response.ok) {
    console.error('Response:', response.statusText);
    throw new Error(`Strapi responded ${response.status}`);
  }
  const result = (await response.json()) as CollectionResponse<Article>;
  return result.data[0] ?? null;
}