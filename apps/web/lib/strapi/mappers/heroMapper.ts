import type { HeroSection } from '../types';
import type { HeroImage, HeroProps } from '@/components/sections/Hero/types';
import { mediaUrl, type Media } from '@growth/strapi';

function toHeroImage(media: Media | null): HeroImage | null {
  const src = mediaUrl(media);
  return src ? { src, alt: media?.alternativeText || '' } : null;
}

export function mapHero(section: HeroSection): HeroProps {
  return {
    title: section.title,
    description: section.description ?? '',
    buttonText: section.buttonText,
    buttonUrl: section.buttonUrl,
    background: toHeroImage(section.background),
    mobileBackground: toHeroImage(section.mobileBackground),
  };
}
