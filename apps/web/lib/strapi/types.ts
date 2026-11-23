import type { LinkVariant, StrapiLink, Media, Seo } from '@growth/strapi';

export type HeroSection = {
  id: number;
  title: string;
  description: string | null;
  buttonText: string;
  buttonUrl: string;
  background: Media | null;
  __component: 'landing-page.hero';
};

export type AuctionCard = {
  id: number;
  title: string;
  image: Media | null;
  category: string;
  auctionUrl: string;
  price: number;
  bidCount: number | null;
  endsAt: string | null;
  listedAt: string | null;
};

export type AuctionRowSection = {
  id: number;
  title: string;
  source: 'ending_soon' | 'newest';
  linkText: string | null;
  linkUrl: string | null;
  items: Array<AuctionCard>;
  __component: 'landing-page.auction-row';
};

export type CategoryCard = {
  id: number;
  title: string;
  description: string;
  categoryUrl: string;
};

export type CategoryGridSection = {
  id: number;
  title: string;
  linkText: string | null;
  linkUrl: string | null;
  items: Array<CategoryCard>;
  __component: 'landing-page.category-grid';
};

export type CtaBandSection = {
  id: number;
  title: string;
  description: string;
  buttonText: string;
  buttonUrl: string;
  __component: 'landing-page.cta-band';
};

export type FaqItem = {
  id: number;
  question: string;
  answer: string;
};

export type FaqSection = {
  id: number;
  title: string;
  items: Array<FaqItem>;
  __component: 'landing-page.faq';
};

export type LandingPage = {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  seo: Seo | null;
  sections: Array<Section>;
};

export type AnnouncementBar = {
  id: number;
  text: string;
  isLive: boolean | null;
  link: StrapiLink;
};

export type Header = {
  id: number;
  siteName: string;
  logo: Media | null;
  navLinks: Array<StrapiLink>;
  searchPlaceholder: string | null;
  signInLink: StrapiLink | null;
  joinLink: StrapiLink | null;
};

export type FooterColumn = {
  id: number;
  title: string;
  links: Array<StrapiLink>;
};

export type Footer = {
  id: number;
  newsletterLabel: string | null;
  newsletterPlaceholder: string | null;
  newsletterButton: string | null;
  columns: Array<FooterColumn>;
  copyright: string | null;
  legalLinks: Array<StrapiLink>;
};

export type Global = {
  id: number;
  documentId: string;
  siteName: string;
  siteDescription: string;
  favicon: Media | null;
  defaultSeo: Seo | null;
  announcementBar: AnnouncementBar | null;
  header: Header | null;
  footer: Footer | null;
};

export type LinkFields = {
  label: string;
  url: string;
};

export type ButtonLinkFields = LinkFields & {
  variant: LinkVariant;
};

export type HowToStep = {
  id: number;
  title: string;
  description: string;
}

export type HowToSection = {
  id: number;
  title: string;
  description: string | null;
  steps: Array<HowToStep>;
  __component: 'landing-page.how-to';
};

// In case of creating anything, create above Section
export type Section =
  | HeroSection
  | AuctionRowSection
  | CategoryGridSection
  | CtaBandSection
  | FaqSection
  | HowToSection;
