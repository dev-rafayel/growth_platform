import Link from 'next/link';
import { CtaBandSection } from '@/lib/strapi/types';

export function CtaBand({ section }: { section: CtaBandSection }) {
  return (
    <section className="cta-band">
      <div className="cta-band-inner">
        <h2 className="cta-band-title">{section.title}</h2>
        {section.description && <p className="cta-band-copy">{section.description}</p>}
        <Link className="cta-band-cta" href={section.buttonUrl}>
          {section.buttonText}
        </Link>
      </div>
    </section>
  );
}

