import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import type { FooterProps } from './types';
import { styles } from './styles';

export function Footer({
  siteName,
  newsletter,
  columns,
  copyright,
  legalLinks,
}: FooterProps) {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.grid}>
          <div className={styles.brand}>
            <span className={styles.siteName}>{siteName}</span>

            {/* TODO: /api/newsletter does not exist yet.
                POST keeps the email out of the URL. */}
            <form action="/api/newsletter" method="post">
              <label
                htmlFor="newsletter-email"
                className={styles.newsletterLabel}
              >
                {newsletter.label}
              </label>
              <div className={`${styles.newsletterRow} mt-4`}>
                <input
                  id="newsletter-email"
                  type="email"
                  name="email"
                  required
                  autoComplete="email"
                  placeholder={newsletter.placeholder}
                  className={styles.newsletterInput}
                />
                <Button type="submit" variant="accent">
                  {newsletter.buttonText}
                </Button>
              </div>
            </form>
          </div>

          {columns.map((column) => (
            <nav
              key={column.title}
              aria-label={column.title}
              className={styles.column}
            >
              <span className={styles.columnTitle}>
                {column.title}
              </span>
              {column.links.map((link, i) => (
                <Link
                  key={`${link.url}-${i}`}
                  href={link.url}
                  className={styles.link}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          ))}
        </div>

        <div className={styles.bottom}>
          {copyright && 
          <span>
            {copyright}
          </span>}
          {legalLinks.length > 0 && (
            <nav 
              aria-label="Legal" 
              className={styles.legal}>
              {legalLinks.map((link, i) => (
                <Link
                  key={`${link.url}-${i}`}
                  href={link.url}
                  className={styles.link}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          )}
        </div>
      </div>
    </footer>
  );
}
