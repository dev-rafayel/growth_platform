import type { Registry } from '@growth/strapi';
import type { Section } from './types';
import { mapHero } from './mappers/heroMapper';
import { mapAuctionRow } from './mappers/auctionRowMapper';
import { mapCategoryGrid } from './mappers/categoryGridMapper';
import { mapCtaBand } from './mappers/ctaBandMapper';
import { mapFaq } from './mappers/faqMapper';
import { Hero } from '@/components/sections/Hero';
import { AuctionRow } from '@/components/sections/AuctionRow';
import { CategoryGrid } from '@/components/sections/Category';
import { CtaBand } from '@/components/sections/CTA';
import { Faq } from '@/components/sections/FAQ/Faq';

export const componentRegistration: Registry<Section> = {
  'landing-page.hero': (block) => <Hero {...mapHero(block)} />,
  'landing-page.auction-row': (block) => <AuctionRow {...mapAuctionRow(block)} />,
  'landing-page.category-grid': (block) => <CategoryGrid {...mapCategoryGrid(block)} />,
  'landing-page.cta-band': (block) => <CtaBand {...mapCtaBand(block)} />,
  'landing-page.faq': (block) => <Faq {...mapFaq(block)} />,
};
