import Link from 'next/link';
import type { CategoryGridSection } from '@/lib/strapi/types';

export function CategoryGrid({ section }: { section: CategoryGridSection }) {
  return (
    <section className="category-grid">
      <div className="section-head">
        <h2 className="section-title">{section.title}</h2>
        {section.linkText && section.linkUrl && (
          <Link className="section-link" href={section.linkUrl}>{section.linkText}</Link>
        )}
      </div>
    </section>
  );
}
