import Link from 'next/link'
import type { HeroProps } from './types';

// tmp file for testing Hero component
export function Hero({ title, description, buttonText, buttonUrl }: HeroProps ) {

  return (
    <section className="hero">
        
      <div className="hero-inner">
        <h1 className="hero-title">
          {title}
        </h1>
        {description && 
          <p className="hero-copy">{description}</p>
        }
        {buttonText && buttonUrl && (
          <Link className="hero-btn" href={buttonUrl}>
            {buttonText}
          </Link>
        )}
      </div>
    </section>
  );
}