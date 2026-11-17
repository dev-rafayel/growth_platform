import Image from 'next/image';
import Link from 'next/link';
import type { HeroProps } from './types';

// tmp file for testing Hero component
export function Hero({ title, description, buttonText, buttonUrl, background }: HeroProps) {
  return (
    <section className="hero">
      {background && (
        <Image className="hero-bg" src={background.src} alt={background.alt} fill sizes="100vw" priority />
      )}
      <div className="hero-inner">
        <h1 className="hero-title">{title}</h1>
        {description && <p className="hero-copy">{description}</p>}
        {buttonText && buttonUrl && (
          <Link className="hero-btn" href={buttonUrl}>{buttonText}</Link>
        )}
      </div>
    </section>
  );
}
