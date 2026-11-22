import type { LinkFields } from '@/lib/strapi/types';

export type AnnouncementBarProps = {
  isLive: boolean;
  text: string;
  link: LinkFields | null;
}