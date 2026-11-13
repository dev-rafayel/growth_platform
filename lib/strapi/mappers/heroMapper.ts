import type { HeroSection } from '../types';
import type { HeroProps } from '@/components/Hero/types';

export function mapHero(section: HeroSection): HeroProps {
  return {
    title: section.title,
    description: section.description ?? '',
    buttonText: section.buttonText ?? 'Learn More',
    buttonUrl: section.buttonUrl ?? '',
  }
}