import { STRAPI_URL, STRAPI_API_TOKEN, STRAPI_CACHE_TAG, REVALIDATE } from './constants';

export async function fetchStrapi<T>(endpoint: string, params: Record<string, string> = {}): Promise<T> {
  const query = new URLSearchParams(params);
  const url = `${STRAPI_URL}${endpoint}${query.size ? `?${query}` : ''}`;
  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${STRAPI_API_TOKEN}`
    },
    next: { revalidate: REVALIDATE, tags: [STRAPI_CACHE_TAG] }
  });

  if (!res.ok) {
    console.error('Response:', res.statusText);
    throw new Error(`Failed to fetch data from Strapi: ${res.status} ${res.statusText}`);
  }
  
  return res.json();
}