import { mediaUrl } from '@growth/strapi';
import type { MediaBlock } from '../types';
import type { MediaProps } from '@/components/blocks/Media/types';
import { toPicture } from './picture';

// shared.media accepts images, videos and any other file; the mime type decides how it renders.
export function mapMedia(block: MediaBlock): MediaProps | null {
  const { file } = block;
  const src = mediaUrl(file);
  if (!file || !src) return null;

  const image = toPicture(file);
  if (image) return { kind: 'image', image };

  if (file.mime?.startsWith('video/')) return { kind: 'video', src, mime: file.mime };

  return { kind: 'file', src, name: file.name ?? 'Download file' };
}
