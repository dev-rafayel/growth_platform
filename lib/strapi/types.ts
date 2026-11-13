export type Media = {
  url?: string;
  alternativeText?: string | null;
  formats?: Record<string, { url: string }>;
};

export type Category = {
  name?: string;
  slug?: string;
};

export type Author = {
  name?: string;
};

export type Article = {
  id?: number;
  documentId?: string;
  title?: string;
  slug?: string;
  description?: string;
  cover?: Media | null;
  category?: Category | null;
  author?: Author | null;
  blocks?: Array<Record<string, unknown>>;
  publishedAt?: string | null;
};

export type CollectionResponse<T> = {
  data: Array<T>;
};

export type Seo = {
  id: number;
  metaTitle: string;
  metaDescription: string;
  shareImage?: Media | null;
};

export type HeroSection = {
  id: number;
  title: string;
  description?: string;
  buttonText: string;
  buttonUrl: string;
  background?: Media | null;
  __component: 'landing-page.hero';
};

export type AuctionRowSection = {
  id: number;
  title: string;
  source: 'ending_soon' | 'newest';
  limit?: number;
  linkText?: string;
  linkUrl?: string;
  __component: 'landing-page.auction-row';
};

export type CategoryGridSection = {
  id: number;
  title: string;
  limit?: number;
  linkText?: string;
  linkUrl?: string;
  __component: 'landing-page.category-grid';
};

export type CtaBandSection = {
  id: number;
  title: string;
  description?: string;
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

export type Section =
  | HeroSection
  | AuctionRowSection
  | CategoryGridSection
  | CtaBandSection
  | FaqSection;

export type LandingPage = {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  seo: Seo;
  sections: Array<Section>;
};
