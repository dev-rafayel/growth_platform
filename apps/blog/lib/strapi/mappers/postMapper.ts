import type { BlogPost, BlogPostSummary } from '../types';
import type { PostCardProps } from '@/components/PostCard/types';
import type { PostHeaderProps } from '@/components/PostHeader/types';
import { toPicture } from './picture';

const dateFormat = new Intl.DateTimeFormat('en', 
  { month: 'short', 
    day: 'numeric', 
    year: 'numeric' 
  });

function toDate(iso: string) {
  return { iso, label: dateFormat.format(new Date(iso)) };
}

export function mapPostCard(post: BlogPostSummary): PostCardProps {
  return {
    slug: post.slug,
    title: post.title,
    excerpt: post.description ?? '',
    date: toDate(post.publishedAt),
    cover: toPicture(post.cover),
    category: post.category?.name ?? null,
    author: post.author?.name ?? null,
  };
}

export function mapPostHeader(post: BlogPost): PostHeaderProps {
  return {
    title: post.title,
    excerpt: post.description ?? '',
    date: toDate(post.publishedAt),
    cover: toPicture(post.cover),
    category: post.category?.name ?? null,
    author: post.author ? { 
      name: post.author.name, 
      avatar: toPicture(post.author.avatar) } : null,
  };
}
