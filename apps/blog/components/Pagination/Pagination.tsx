import Link from 'next/link';
import type { PaginationProps } from './types';

export function Pagination({ page, pageCount }: PaginationProps) {
  if (pageCount <= 1) return null;

  return (
    <nav className="pagination" aria-label="Pagination">
      {page > 1 ? 
        <Link href={page === 2 ? '/' : `/?page=${page - 1}`}>
          ← Newer
        </Link> : <span />
      }
      <span className="pagination-status">Page {page} of {pageCount}</span>
      {page < pageCount ? 
        <Link href={`/?page=${page + 1}`}>Older →</Link> : <span />}
    </nav>
  );
}
