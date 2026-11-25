import type { ButtonLinkFields, LinkFields } from '@/lib/strapi/types';
import type { ReactNode } from 'react';

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

export type SearchInputProps = {
  placeholder: string;
};

export type MobileMenuProps = {
  links: Array<NavLink>;
  // Sign in / join buttons, rendered by the server Header.
  actions?: ReactNode;
};

export type NavLinksProps = {
  links: Array<NavLink>;
};

export type NavItemProps = NavLink & { 
  className?: string 
};