import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';

export const metadata: Metadata = {
  title: { default: 'Bidnow Blog', template: '%s | Bidnow Blog' },
  description: 'News, guides and stories from Bidnow.',
};

export default function RootLayout({ children }: 
  Readonly<{ children: React.ReactNode }>) {
  
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          {/* Plain <a>: the main site is another zone, and Link would prefix /blog */}
          {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
          <a className="wordmark" href="/">Bidnow</a>
          <nav className="header-nav" aria-label="Blog navigation">
            <Link href="/">Blog</Link>
          </nav>
        </header>
        {children}
        <footer className="site-footer">
          <span>© Bidnow</span>
          {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
          <a href="/">bidnow.com</a>
        </footer>
      </body>
    </html>
  );
}
