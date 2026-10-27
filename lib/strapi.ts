import type { Entity, Article, CollectionResponse, Media } from './types';
import { REVALIDATE, STRAPI_URL } from './constants';

function normalize<T>(entity: Entity<T>): T & { id?: number; documentId?: string } {
  return { ...entity.attributes, ...entity };
}

export function relation<T>(value: Entity<T> | { data?: Entity<T> | null } | null | undefined): T | null {
  if (!value) return null;
  const entity = 'data' in value ? value.data ?? null : value as Entity<T>;
  return entity ? normalize<T>(entity) : null;
}

export function mediaUrl(value: Article['cover']): string | null {
  const media = relation(value as Entity<Media> | { data?: Entity<Media> | null } | null);
  const url = media?.formats?.small?.url || media?.url;
  if (!url) return null;
  return url.startsWith('http') ? url : `${STRAPI_URL}${url}`;
}

export async function getArticles(): Promise<Article[]> {
  // Errors must propagate: a failed refresh then keeps serving the last cached page.
  const response = await fetch(`${STRAPI_URL}/api/articles?populate=*`, { next: { revalidate: REVALIDATE } });
  if (!response.ok) throw new Error(`Strapi responded ${response.status}`);
  const result = (await response.json()) as CollectionResponse<Article>;
  return (result.data || []).map(normalize);
}

export async function getArticle(slug: string): Promise<Article | null> {
  const query = new URLSearchParams({ 'filters[slug][$eq]': slug, populate: '*' });
  const response = await fetch(`${STRAPI_URL}/api/articles?${query}`, { next: { revalidate: REVALIDATE } });
  if (!response.ok) throw new Error(`Strapi responded ${response.status}`);
  const result = (await response.json()) as CollectionResponse<Article>;
  return result.data?.[0] ? normalize(result.data[0]) : null;
}