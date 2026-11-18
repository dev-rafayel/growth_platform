import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="not-found">
      <h1>Post not found</h1>
      <p>It may have been moved or unpublished.</p>
      <Link href="/">← All posts</Link>
    </main>
  );
}
