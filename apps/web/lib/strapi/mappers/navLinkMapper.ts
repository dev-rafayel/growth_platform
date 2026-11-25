import type { StrapiLink } from '@growth/strapi';
import type { NavLink } from '@/components/layout/Header/types';

export function mapNavLink(link: StrapiLink): NavLink {
  return {
    label: link.label,
    url: link.url,
    highlight: link.highlight ?? false,
  };
}
