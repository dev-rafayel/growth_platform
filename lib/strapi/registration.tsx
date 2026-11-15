import type { ReactNode } from 'react';
import type { Section } from './types';
import { mapHero } from './mappers/heroMapper';
import { mapAuctionRow } from './mappers/auctionRowMapper';
import { mapCategoryGrid } from './mappers/categoryGridMapper';
import { mapCtaBand } from './mappers/ctaBandMapper';
import { mapFaq } from './mappers/faqMapper';
import { Hero } from '@/components/sections/Hero/Hero';
import { AuctionRow } from '@/components/sections/AuctionRow/AuctionRow';
import { CategoryGrid } from '@/components/sections/Category/CategoryGrid';
import { CtaBand } from '@/components/sections/CTA/CtaBand';
import { Faq } from '@/components/sections/FAQ/Faq';

// One entry per Strapi component: a block type missing here is a type error.
type SectionRenderers = {
  [K in Section['__component']]: (block: Extract<Section, { __component: K }>) => ReactNode;
};

export const componentRegistration: SectionRenderers = {
  'landing-page.hero': (block) => <Hero {...mapHero(block)} />,
  'landing-page.auction-row': (block) => <AuctionRow {...mapAuctionRow(block)} />,
  'landing-page.category-grid': (block) => <CategoryGrid {...mapCategoryGrid(block)} />,
  'landing-page.cta-band': (block) => <CtaBand {...mapCtaBand(block)} />,
  'landing-page.faq': (block) => <Faq {...mapFaq(block)} />,
};
