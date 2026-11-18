import type { Picture } from '@/components/types';

export type PostCardProps = {
  slug: string;
  title: string;
  excerpt: string;
  date: { iso: string; label: string };
  cover: Picture | null;
  category: string | null;
  author: string | null;
};
