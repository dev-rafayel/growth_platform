import Link from 'next/link';
import { AuctionRowProps } from './types';

export function AuctionRow({ title, link }: AuctionRowProps) {
  return (
    <section className="auction-row">
      <div className="section-head">
        <h2 className="section-title">{title}</h2>
        {link && (
          <Link className="section-link" href={link.url}>{link.text}</Link>
        )}
      </div>
    </section>
  );
}
