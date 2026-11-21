import { fetchStrapi } from '@growth/strapi';
import type { Global } from './types';

export async function getGlobal(): Promise<Global | null> {
  const res = await fetchStrapi<{ data: Global | null }>('/api/global', {
    'populate[defaultSeo][populate]': '*'
  });
  return res.data;
}
