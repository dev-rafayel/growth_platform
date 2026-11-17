import { notFound } from 'next/navigation';
import { getPageBySlug } from '@/lib/strapi/pages';
import { SectionRenderer } from '@growth/strapi/renderer';
import { componentRegistration } from '@/lib/strapi/registration';
import type { Props } from './types';

export default async function LandingPage({ params }: Props) {
  const { slug } = await params;
  const page = await getPageBySlug(slug);
  if (!page) notFound();

  return (
    <main>
      <SectionRenderer sections={page.sections} registry={componentRegistration} />
    </main>
  );
}
