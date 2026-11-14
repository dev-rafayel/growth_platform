import type { CategoryGridSection } from '../types';
import type { CategoryGridProps } from '@/components/sections/Category/types';

export function mapCategoryGrid(section: CategoryGridSection): CategoryGridProps {
  return {
    title: section.title,
    limit: section.limit ?? 6,
    link: section.linkText && section.linkUrl ? { text: section.linkText, url: section.linkUrl } : null,
  };
}
