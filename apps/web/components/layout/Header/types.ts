import type { ButtonLinkFields, LinkFields } from '@/lib/strapi/types';

export type NavLink = LinkFields & {
  highlight: boolean;
}

export type HeaderProps = {
  siteName: string;
  logo: { src: string; alt: string } | null;
  navLinks: Array<NavLink>;
  searchPlaceholder: string;
  signInLink: ButtonLinkFields | null;
  joinLink: ButtonLinkFields | null;
};