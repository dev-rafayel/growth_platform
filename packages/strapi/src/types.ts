import type { ReactNode } from 'react';

export type Media = {
  url?: string;
  alternativeText?: string | null;
  formats?: Record<string, { url: string }>;
  name?: string;
  mime?: string;
  width?: number | null;
  height?: number | null;
};

export type Pagination = {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
};

export type CollectionResponse<T> = {
  data: Array<T>;
  meta?: { pagination?: Pagination };
};

export type Seo = {
  id: number;
  metaTitle: string;
  metaDescription: string;
  shareImage: Media | null;
};

export type Block = { id: number; __component: string };

// One entry per block type: a block type missing here is a type error.
export type Registry<B extends Block> = {
  [K in B['__component']]: (block: Extract<B, { __component: K }>) => ReactNode;
};