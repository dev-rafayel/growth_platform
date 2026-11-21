import type { Picture } from '@/components/types';

export type PostHeaderProps = {
  title: string;
  excerpt: string;
  date: { iso: string; label: string };
  cover: Picture | null;
  category: string | null;
  author: { name: string; avatar: Picture | null } | null;
};
