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

export type HeroSection = {
  id: number;
  title: string;
  description?: string;
  buttonText?: string;
  buttonUrl?: string;
  __component: 'landing-page.hero';
}

export type LandingPage = {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  sections?: Array<HeroSection>
}