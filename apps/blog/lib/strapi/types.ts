import type { Media, Seo } from '@growth/strapi';

export type Author = {
  id: number;
  name: string;
  avatar: Media | null;
};

export type Category = {
  id: number;
  name: string;
  slug: string;
};

export type RichTextBlock = {
  id: number;
  body: string | null;
  __component: 'shared.rich-text';
};

export type QuoteBlock = {
  id: number;
  title: string | null;
  body: string | null;
  __component: 'shared.quote';
};

export type MediaBlock = {
  id: number;
  file: Media | null;
  __component: 'shared.media';
};

export type SliderBlock = {
  id: number;
  files: Array<Media> | null;
  __component: 'shared.slider';
};

export type ArticleBlock =
  | RichTextBlock
  | QuoteBlock
  | MediaBlock
  | SliderBlock;

export type BlogPostSummary = {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  description: string | null;
  publishedAt: string;
  cover: Media | null;
  author: Author | null;
  category: Category | null;
};

export type BlogPost = BlogPostSummary & {
  blocks: Array<ArticleBlock>;
  seo: Seo | null;
};
