import { notFound } from 'next/navigation';
import { getPageBySlug } from '@/lib/strapi/pages';
import { SectionRenderer } from '@/lib/strapi/renderer';
import type { Props } from './types';

export default async function LandingPage({ params }: Props) {
  const { slug } = await params;
  const page = await getPageBySlug(slug);
  if (!page) notFound();

  return (
    <main>
      <SectionRenderer sections={page.sections} />
    </main>
  );
}
