import type { Media } from './types';
import { STRAPI_URL } from './constants';

export function mediaUrl(media: Media | null | undefined): string | null {
  const url = media?.url;
  if (!url) return null;

  return url.startsWith('http') ? url : `${STRAPI_URL}${url}`;
}
