import Link from 'next/link';
import { CtaBandProps } from './types';

export function CtaBand({ 
  title, 
  description, 
  buttonText, 
  buttonUrl 
}: CtaBandProps) {
  return (
    <section className="cta-band">
      <div className="cta-band-inner">
        <h2 className="cta-band-title">{title}</h2>
        {description && <p className="cta-band-copy">{description}</p>}
        <Link className="cta-band-cta" href={buttonUrl}>
          {buttonText}
        </Link>
      </div>
    </section>
  );
}
