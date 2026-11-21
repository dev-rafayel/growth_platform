import Markdown from 'react-markdown';
import type { RichTextProps } from './types';

// react-markdown ignores raw HTML in the source, so editor content can't inject markup.
export function RichText({ markdown }: RichTextProps) {
  if (!markdown) return null;

  return (
    <div className="rich-text">
      <Markdown>{markdown}</Markdown>
    </div>
  );
}
