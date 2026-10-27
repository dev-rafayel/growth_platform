export type Entity<T> = T & {
  id?: number;
  documentId?: string;
  attributes?: T;
};

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
  cover?: Entity<Media> | { data?: Entity<Media> | null } | null;
  category?: Entity<Category> | { data?: Entity<Category> | null } | null;
  author?: Entity<Author> | { data?: Entity<Author> | null } | null;
  blocks?: Array<Record<string, unknown>>;
  publishedAt?: string | null;
};

export type CollectionResponse<T> = {
  data?: Array<Entity<T>>;
};
