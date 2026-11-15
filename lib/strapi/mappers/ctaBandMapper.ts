import type { CtaBandSection } from '../types';
import type { CtaBandProps } from '@/components/sections/CTA/types';

export function mapCtaBand(section: CtaBandSection): CtaBandProps {
  return {
    title: section.title,
    description: section.description ?? '',
    buttonText: section.buttonText,
    buttonUrl: section.buttonUrl,
  };
}
