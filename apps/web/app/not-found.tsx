import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="not-found">
      <p className="eyebrow">404 / PAGE NOT FOUND</p>
      <h1>This page hasn’t<br /><em>taken root.</em></h1>
      <Link href="/" className="text-link">RETURN HOME <span aria-hidden="true">↗</span></Link>
    </main>
  );
}