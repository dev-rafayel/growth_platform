import type { QuoteProps } from './types';

export function Quote({ text, cite }: QuoteProps) {
  if (!text) return null;

  return (
    <figure className="quote">
      <blockquote>{text}</blockquote>
      {cite && <figcaption>{cite}</figcaption>}
    </figure>
  );
}
