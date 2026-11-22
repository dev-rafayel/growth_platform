import type { AnnouncementBar } from '../types';
import type { AnnouncementBarProps } from '@/components/layout/AnnouncementBar/types';
import { mapLink } from './linkMapper';

export function mapAnnouncementBar(bar: AnnouncementBar)
  :AnnouncementBarProps {

  return {
    isLive: bar.isLive ?? false,
    text: bar.text,
    link: mapLink(bar.link),
  };
}