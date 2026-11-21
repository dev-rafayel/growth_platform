import { mediaUrl, type Media } from '@growth/strapi';
import type { Picture } from '@/components/types';

// next/image needs real dimensions; anything that isn't an image with a size is skipped.
export function toPicture(media: Media | null | undefined, fallbackAlt = ''): 
  Picture | null {
  const src = mediaUrl(media);
  if (
    !src || 
    !media?.width || 
    !media.height || 
    !media.mime?.startsWith('image/')
  ) return null;

  return {
    src,
    alt: media.alternativeText ?? fallbackAlt,
    width: media.width,
    height: media.height,
  };
}
