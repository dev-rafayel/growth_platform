import { mediaUrl } from '@growth/strapi';
import type { Header } from '../types';
import type { HeaderProps } from '@/components/layout/Header/types';
import { mapButtonLink } from './linkMapper';

export function mapHeader(header: Header, siteName: string)
  :HeaderProps {
  const logoSrc = mediaUrl(header.logo);
  
  return {
    siteName,
    logo: logoSrc ? { 
      src: logoSrc, 
      alt: header.logo?.alternativeText ?? siteName
    } : null,
    navLinks: header.navLinks.map((link) => ({
      label: link.label,
      url: link.url,
      highlight: link.highlight ?? false,
    })),
    searchPlaceholder: header.searchPlaceholder ?? 'Search lots...',
    signInLink: mapButtonLink(header.signInLink, 'text'),
    joinLink: mapButtonLink(header.joinLink, 'dark'),
  };
} 