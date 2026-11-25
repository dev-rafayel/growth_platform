import type { CtaBandSection } from '../types';
import type { CtaBandProps } from '@/components/sections/CTA/types';
import { mapButtonLink } from './linkMapper';

export function mapCtaBand(section: CtaBandSection): CtaBandProps {
  return {
    title: section.title,
    description: section.description ?? '',
    link: mapButtonLink(section.link, 'dark'),
  };
}
