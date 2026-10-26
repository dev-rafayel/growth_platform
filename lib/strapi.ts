const STRAPI_URL = (process.env.STRAPI_URL || 'http://localhost:1337').replace(/\/$/, '');

type Entity<T> = T & {
  id?: number;
  documentId?: string;
  attributes?: T;
};

export type Media = {
  url?: string;
  alternativeText?: string | null;
  formats?: Record<string, { url: string }>;
};

export type Category = {
  name?: string;
  slug?: string;
};

export type Author = {
  name?: string;
};

export type Article = {
  id?: number;
  documentId?: string;
  title?: string;
  slug?: string;
  description?: string;
  cover?: Entity<Media> | { data?: Entity<Media> | null } | null;
  category?: Entity<Category> | { data?: Entity<Category> | null } | null;
  author?: Entity<Author> | { data?: Entity<Author> | null } | null;
  blocks?: Array<Record<string, unknown>>;
  publishedAt?: string | null;
};

type CollectionResponse<T> = {
  data?: Array<Entity<T>>;
};

export type ArticleResult = {
  articles: Article[];
  connected: boolean;
};

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

export async function getArticles(): Promise<ArticleResult> {
  try {
    const response = await fetch(`${STRAPI_URL}/api/articles?populate=*`, { cache: 'no-store' });
    if (!response.ok) return { articles: [], connected: false };
    const result = (await response.json()) as CollectionResponse<Article>;
    return {
      articles: (result.data || []).map(normalize),
      connected: true,
    };
  } catch {
    return { articles: [], connected: false };
  }
}

export async function getArticle(slug: string): Promise<Article | null> {
  try {
    const query = new URLSearchParams({
      'filters[slug][$eq]': slug,
      populate: '*',
    });
    const response = await fetch(`${STRAPI_URL}/api/articles?${query}`, { cache: 'no-store' });
    if (!response.ok) return null;
    const result = (await response.json()) as CollectionResponse<Article>;
    return result.data?.[0] ? normalize(result.data[0]) : null;
  } catch {
    return null;
  }
}