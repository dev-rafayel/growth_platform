import type { QuoteBlock } from '../types';
import type { QuoteProps } from '@/components/blocks/Quote/types';

export function mapQuote(block: QuoteBlock): QuoteProps {
  return {
    text: block.body ?? '',
    cite: block.title ?? '',
  };
}
