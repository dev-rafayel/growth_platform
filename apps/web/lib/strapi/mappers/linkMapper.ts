import type { LinkVariant, StrapiLink } from '@growth/strapi';
import type { ButtonLinkFields, LinkFields } from '../types';

export function mapLink(link: StrapiLink | null)
  :LinkFields | null {

  return link ? {
    label: link.label,
    url: link.url
  } : null;
}

// same as mapLink + the button style chosen in the cms
// fallback is used when the variant is empty
export function mapButtonLink(
  link: StrapiLink | null,
  fallback: LinkVariant = 'accent',
): ButtonLinkFields | null {

  return link ? {
    label: link.label,
    url: link.url,
    variant: link.variant ?? fallback,
  } : null;
}

// For repeatable link fields: arrays never contain null.
export function mapLinks(links: Array<StrapiLink> | null)
  :Array<LinkFields> {

  return (links ?? []).map((link) => ({
    label: link.label,
    url: link.url,
  }));
}
