import { styles } from './styles';
import { SearchInputProps } from './types';

// A plain GET form: works without JavaScript and keeps the header a
// server component. Submitting goes to /search?q=...
export function SearchInput({ placeholder }: SearchInputProps) {
  return (
    <form action="/search" role="search" className={styles.search}>
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        className={styles.searchIcon}
        aria-hidden="true"
      >
        <circle cx="11" cy="11" r="7" />
        <path d="M20 20l-3.5-3.5" />
      </svg>
      <label htmlFor="site-search" className="sr-only">
        Search lots
      </label>
      <input
        id="site-search"
        type="search"
        name="q"
        placeholder={placeholder}
        className={styles.searchInput}
      />
    </form>
  );
}
