import type { LinkFields } from '@/lib/strapi/types';

export type FooterColumn = {
  title: string;
  links: Array<LinkFields>;
};

export type Newsletter = {
  label: string;
  placeholder: string;
  buttonText: string;
};

export type FooterProps = {
  siteName: string;
  newsletter: Newsletter;
  columns: Array<FooterColumn>;
  copyright: string;
  legalLinks: Array<LinkFields>;
};
