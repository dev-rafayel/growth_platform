import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';

export const metadata: Metadata = {
  title: 'Fieldnotes | Growth Platform',
  description: 'Ideas and stories from the Growth Platform journal.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <Link className="wordmark" href="/" aria-label="Fieldnotes home">
            <span className="wordmark-mark">F.</span>
            <span>FIELDNOTES</span>
          </Link>
          <nav className="header-nav" aria-label="Main navigation">
            <Link href="/">Journal</Link>
            <a href="http://localhost:1337/admin" target="_blank" rel="noreferrer">CMS <span aria-hidden="true">↗</span></a>
          </nav>
        </header>
        {children}
        <footer className="site-footer">
          <span>FIELDNOTES / GROWTH PLATFORM</span>
          <span>Stories for curious minds.</span>
        </footer>
      </body>
    </html>
  );
}