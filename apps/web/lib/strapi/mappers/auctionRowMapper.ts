import { mediaUrl } from '@growth/strapi';
import type { AuctionCard, AuctionRowSection } from '../types';
import type { AuctionCardProps, AuctionRowProps } from '@/components/sections/AuctionRow/types';

function toNumber(value: string | null): number | null {
  if (value === null || value.trim() === '') return null;
  const number = Number(value);
  return Number.isFinite(number) ? number : null;
}

function toDate(value: string | null): Date | null {
  if (!value) return null;
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? null : date;
}

function mapAuctionCard(card: AuctionCard): AuctionCardProps {
  const imageSrc = mediaUrl(card.image);

  return {
    id: card.id,
    title: card.title,
    image: imageSrc ? { src: imageSrc, alt: card.image?.alternativeText ?? card.title } : null,
    category: card.category,
    url: card.auctionUrl,
    price: toNumber(card.price),
    bidCount: toNumber(card.bidCount),
    endsAt: toDate(card.endsAt),
    listedAt: toDate(card.listedAt),
  };
}

export function mapAuctionRow(section: AuctionRowSection): AuctionRowProps {
  return {
    title: section.title,
    source: section.source,
    link: section.linkText && section.linkUrl ? { text: section.linkText, url: section.linkUrl } : null,
    items: (section.items ?? []).map(mapAuctionCard),
  };
}
