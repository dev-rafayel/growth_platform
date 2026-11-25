import { mediaUrl } from '@growth/strapi';
import type { Header } from '../types';
import type { HeaderProps } from '@/components/layout/Header/types';
import { mapButtonLink } from './linkMapper';
import { mapNavLink } from './navLinkMapper';

export function mapHeader(header: Header, siteName: string)
  :HeaderProps {
  const logoSrc = mediaUrl(header.logo);
  
  return {
    siteName,
    logo: logoSrc ? { 
      src: logoSrc, 
      alt: header.logo?.alternativeText ?? siteName
    } : null,
    navLinks: header.navLinks.map(mapNavLink),
    auctionMenu: header.auctionMenu?.links.length ? {
      label: header.auctionMenu.label,
      url: header.auctionMenu.url,
      links: header.auctionMenu.links.map(mapNavLink),
    } : null,
    searchPlaceholder: header.searchPlaceholder ?? 'Search lots...',
    signInLink: mapButtonLink(header.signInLink, 'text'),
    joinLink: mapButtonLink(header.joinLink, 'dark'),
  };
} 