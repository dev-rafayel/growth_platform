import type { AuctionRowSection } from '../types';
import type { AuctionRowProps } from '@/components/sections/AuctionRow/types';

export function mapAuctionRow(section: AuctionRowSection): AuctionRowProps {
  return {
    title: section.title,
    source: section.source,
    limit: section.limit ?? 8,
    link: section.linkText && section.linkUrl ? { text: section.linkText, url: section.linkUrl } : null,
  };
}
