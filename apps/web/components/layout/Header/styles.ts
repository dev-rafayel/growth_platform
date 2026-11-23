const focus =
  'focus-visible:outline-2 focus-visible:outline-offset-2 ' +
  'focus-visible:outline-accent';

export const styles = {
  header: 'sticky top-0 z-50 border-b border-line bg-bg',
  inner:
    'mx-auto flex max-w-page flex-wrap items-center ' +
    'gap-x-8 gap-y-4 px-6 py-[18px]',

  brand: `flex items-center gap-2.5 text-ink ${focus}`,
  logo: 'size-[38px] rounded-[10px] object-cover',
  logoFallback:
    'flex size-[38px] items-center justify-center rounded-[10px] ' +
    'bg-accent font-display text-lg font-extrabold text-white',
  siteName:
    'font-display text-[26px] font-extrabold tracking-[-0.03em]',

  nav:
    'hidden items-center gap-7 text-[15px] font-medium ' +
    'min-[860px]:flex',
  navLink: `flex items-center gap-1.5 hover:text-accent ${focus}`,
  navDot: 'inline-block size-1.5 rounded-full bg-accent',

  search:
    'flex h-[46px] flex-[1_1_240px] items-center gap-2.5 ' +
    'rounded-full border border-line bg-surface pl-[18px] pr-2 ' +
    'focus-within:border-ink',
  searchIcon: 'size-[18px] shrink-0 text-muted',
  searchInput:
    'h-11 min-w-0 flex-1 bg-transparent text-[15px] text-ink ' +
    'outline-none placeholder:text-muted',

  actions: 'flex items-center gap-2.5',
};
