import type { CategoryGridSection } from '../types';
import type { CategoryGridProps } from '@/components/sections/Category/types';

export function mapCategoryGrid(section: CategoryGridSection): CategoryGridProps {
  return {
    title: section.title,
    link: section.linkText && section.linkUrl ? { text: section.linkText, url: section.linkUrl } : null,
    items: (section.items ?? []).map(({ id, title, description, categoryUrl }) => ({
      id,
      title,
      description,
      url: categoryUrl,
    })),
  };
}
