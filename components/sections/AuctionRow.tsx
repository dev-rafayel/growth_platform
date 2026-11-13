import Link from 'next/link';
import type { AuctionRowSection } from '@/lib/strapi/types';

export function AuctionRow({ section }: { section: AuctionRowSection }) {
  return (
    <section className="auction-row">
      <div className="section-head">
        <h2 className="section-title">{section.title}</h2>
        {section.linkText && section.linkUrl && (
          <Link className="section-link" href={section.linkUrl}>{section.linkText}</Link>
        )}
      </div>
    </section>
  );
}
