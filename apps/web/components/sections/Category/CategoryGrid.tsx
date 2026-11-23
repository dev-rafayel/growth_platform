import Link from 'next/link';
import type { CategoryGridProps } from './types';
import { styles } from './styles';

export function CategoryGrid({ 
  title, 
  link, 
  items }: 
  CategoryGridProps) {
  return (
    <section
      id="categories"
      className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>
          {title}
        </h2>
        {link && (
          <Link
            href={link.url}
            className={styles.link}>
            {link.text}
            <svg
              aria-hidden="true"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="M13 6l6 6-6 6" />
            </svg>
          </Link>
        )}
      </div>
      <div className={styles.grid}>
        {items.map((category) => (
          <Link
            key={category.id}
            href={category.url}
            className={styles.card}
          >
            <div className={styles.body}>
              <span className={styles.name}>
                {category.title}
              </span>
              <span className={styles.description}>
                {category.description}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
