import type { RichTextBlock } from '../types';
import type { RichTextProps } from '@/components/blocks/RichText/types';

export function mapRichText(block: RichTextBlock): RichTextProps {
  return {
    markdown: block.body ?? '',
  };
}
