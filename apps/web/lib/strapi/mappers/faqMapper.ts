import type { FaqSection } from '../types';
import type { FaqProps } from '@/components/sections/FAQ/types';

export function mapFaq(section: FaqSection): FaqProps {
  return {
    title: section.title,
    items: (section.items ?? []).map(({ id, question, answer }) => ({ id, question, answer })),
  };
}
