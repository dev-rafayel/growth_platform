import type { Footer } from '../types';
import type { FooterProps } from '@/components/layout/Footer/types';
import { mapLinks } from './linkMapper';

export function mapFooter(footer: Footer, siteName: string)
  :FooterProps {
  const year = new Date().getFullYear();

  return {
    siteName,
    newsletter: {
      label: footer.newsletterLabel ?? 'Closing-soon alerts, once a week.',
      placeholder: footer.newsletterPlaceholder ?? 'you@email.com',
      buttonText: footer.newsletterButton ?? 'Subscribe',
    },
    columns: (footer.columns ?? []).map((column) => ({
      title: column.title,
      links: mapLinks(column.links),
    })),
    copyright: (footer.copyright ?? '')
      .replaceAll('{year}', String(year)),
    legalLinks: mapLinks(footer.legalLinks),
  };
}
