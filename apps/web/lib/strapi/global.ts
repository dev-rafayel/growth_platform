import { fetchStrapi } from '@growth/strapi';
import type { Global } from './types';

export async function getGlobal(): Promise<Global | null> {
  const res = await fetchStrapi<{ data: Global | null }>('/api/global', {
    'populate[defaultSeo][populate]': '*',
    'populate[announcementBar][populate]': '*',
    'populate[header][populate]': '*',
    'populate[footer][populate][columns][populate]': '*',
    'populate[footer][populate][legalLinks]': 'true',
  });
  return res.data;
}
