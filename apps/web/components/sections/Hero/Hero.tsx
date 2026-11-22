import { Bricolage_Grotesque } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import type { HeroProps } from './types';

const headingFont = Bricolage_Grotesque({ subsets: ['latin'], weight: ['800'] });

export function Hero({ 
  title,
  description, 
  buttonText, 
  buttonUrl, 
  background }: HeroProps) {
  return (
    <section style={{ 
      position: 'relative', 
      minHeight: 600, 
      display: 'flex', 
      alignItems: 'flex-end',
      borderRadius: 28,
      overflow: 'hidden',
      margin: 24,
      backgroundColor: '#1E1C19', }}
    >
      <style href="hero-btn" precedence="default">{`
        .hero-btn { background: #C7341A; transition: background-color 0.2s ease; }
        .hero-btn:hover { background: #A82B14; }
      `}</style>
      {background && (
        <Image
          src={background.src}
          alt={background.alt}
          fill
          sizes="100vw"
          priority
          style={{ 
            objectFit: 'cover', 
            objectPosition: 'center' }}
        />
      )}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          background: 
          'linear-gradient(0deg, ' + 
          'rgba(14,13,12,0.85) 0%, ' +
          'rgba(14,13,12,0.2) 60%, ' + 
          'rgba(14,13,12,0) 100%)',
        }}
      />
      <div 
        style={{ 
          position: 'relative', 
          color: '#FFFFFF',
          padding: 'clamp(32px, 5vw, 72px)',
          display: 'flex',
          flexDirection: 'column',
          gap: 24,
          maxWidth: 900 }}
      >
        <h1
          className={headingFont.className}
          style={{
            margin: 0,
            fontSize: 'clamp(32px, 5vw, 72px)',
            lineHeight: 0.92,
            letterSpacing: '-0.045em',
          }}>
          {title}
        </h1>
        {description && 
          <p style={{ 
            margin: 0, 
            maxWidth: 560, 
            fontSize: 17, 
            lineHeight: 1.5, 
            color: '#E4E0D8' }}
          >
            {description}
          </p>
        }
        {buttonText 
          && buttonUrl && (
          <Link
            href={buttonUrl}
            className="hero-btn"
            style={{
              alignSelf: 'flex-start',
              height: 48,
              padding: '0 22px',
              borderRadius: 999,
              color: '#FFFFFF',
              fontWeight: 600,
              fontSize: 15,
              display: 'flex',
              alignItems: 'center',
              gap: 10,
            }}
          >
            {buttonText}
            <svg 
              aria-hidden="true" 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round">
              <path d="M5 12h14" />
              <path d="M13 6l6 6-6 6" />
            </svg>
          </Link>
        )}
      </div>
    </section>
  );
}
