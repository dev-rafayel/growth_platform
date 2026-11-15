import Link from 'next/link';
import type { CategoryGridProps } from './types';

export function CategoryGrid({ title, link }: CategoryGridProps) {
  return (
    <section className="category-grid">
      <div className="section-head">
        <h2 className="section-title">{title}</h2>
        {link && (
          <Link className="section-link" href={link.url}>{link.text}</Link>
        )}
      </div>
    </section>
  );
}
