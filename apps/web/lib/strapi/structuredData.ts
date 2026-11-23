import { LANDINGS_SSR_URL, mediaUrl } from '@growth/strapi';
import type {
  FaqSection,
  Global,
  LandingPage,
  PageInfo,
} from './types';

export function buildStructuredData(
  page: LandingPage,
  global: Global | null,
  { url, 
    title, 
    description 
  }: PageInfo,
) {
  const siteUrl = `${LANDINGS_SSR_URL}/`;
  const orgId = `${siteUrl}#organization`;
  const logo = mediaUrl(global?.header?.logo);

  const organization = {
    '@type': 'Organization',
    '@id': orgId,
    name: global?.siteName,
    url: siteUrl,
    ...(logo && { logo }),
  };

  const webPage = {
    '@type': 'WebPage',
    '@id': `${url}#webpage`,
    url,
    name: title,
    description,
    inLanguage: 'en-US',
    publisher: { '@id': orgId },
  };

  const faqItems = page.sections
    .filter((s): s is FaqSection => s.__component === 'landing-page.faq')
    .flatMap((s) => s.items ?? []);

  const faqPage = faqItems.length > 0 && {
    '@type': 'FAQPage',
    '@id': `${url}#faq`,
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  };

  return {
    '@context': 'https://schema.org',
    '@graph': [organization, webPage, faqPage].filter(Boolean),
  };
}

export function toJsonLd(data: object) {
  return JSON.stringify(data).replace(/</g, '\\u003c');
}
