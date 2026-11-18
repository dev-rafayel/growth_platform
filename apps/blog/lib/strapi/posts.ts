import { fetchStrapi, type CollectionResponse, type Pagination } from '@growth/strapi';
import type { BlogPost, BlogPostSummary } from './types';

export const POSTS_PER_PAGE = 9;

const summaryParams = {
  'fields[0]': 'title',
  'fields[1]': 'slug',
  'fields[2]': 'description',
  'fields[3]': 'publishedAt',
  'populate[cover]': 'true',
  'populate[category]': 'true',
  'populate[author][populate][avatar]': 'true',
};

export async function getPosts(page: number): 
  Promise<{ 
    posts: BlogPostSummary[]; 
    pagination: Pagination | null 
  }> {
  const params = {
    ...summaryParams,
    'sort[0]': 'publishedAt:desc',
    'pagination[page]': String(page),
    'pagination[pageSize]': String(POSTS_PER_PAGE),
  };

  const res = await fetchStrapi<CollectionResponse<BlogPostSummary>>('/api/articles', params);
  return { posts: res.data, pagination: res.meta?.pagination ?? null };
}

export async function getPostBySlug(slug: string): 
  Promise<BlogPost | null> {
  const params = {
    'filters[slug][$eq]': slug,
    'populate[cover]': 'true',
    'populate[category]': 'true',
    'populate[author][populate][avatar]': 'true',
    'populate[blocks][populate]': '*',
    'populate[seo][populate]': '*',
  };

  const res = await fetchStrapi<CollectionResponse<BlogPost>>
  ('/api/articles', params);
  return res.data[0] ?? null;
}
