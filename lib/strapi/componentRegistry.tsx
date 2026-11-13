import type { HeroSection } from './types';
import { mapHero } from './mappers/heroMapper';
import { Hero } from '@/components/Hero';

export const registry = {
  'landing-page.hero': (block: HeroSection) => <Hero {...mapHero(block)}/>

};