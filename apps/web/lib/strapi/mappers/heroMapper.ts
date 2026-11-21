import type { HeroSection } from '../types';
import type { HeroProps } from '@/components/sections/Hero/types';
import { mediaUrl } from '@growth/strapi';

export function mapHero(section: HeroSection): HeroProps {
  const backgroundSrc = mediaUrl(section.background);

  return {
    title: section.title,
    description: section.description ?? '',
    buttonText: section.buttonText,
    buttonUrl: section.buttonUrl,
    background: backgroundSrc ? { src: backgroundSrc, alt: section.background?.alternativeText ?? '' } : null
  };
}
