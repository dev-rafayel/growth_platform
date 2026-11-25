const focus =
  'focus-visible:outline-2 focus-visible:outline-offset-2 ' +
  'focus-visible:outline-accent';

export const styles = {
  // sticky counts as positioned, so the mobile panel anchors to the header.
  header: 'sticky top-0 z-50 border-b border-line bg-bg',
  inner:
    'mx-auto flex max-w-page flex-wrap items-center ' +
    'gap-x-8 gap-y-4 px-6 py-[18px]',

  // Below 860px the logo sits on the right, the burger on the left.
  brand:
    'flex items-center gap-2.5 text-ink max-[859px]:ml-auto ' +
    `${focus}`,
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

  // Below 860px the search drops to its own full-width row.
  search:
    'order-last basis-full min-[860px]:order-0 ' +
    'min-[860px]:basis-auto ' +
    'flex h-[46px] min-[860px]:flex-[1_1_240px] items-center gap-2.5 ' +
    'rounded-full border border-line bg-surface pl-[18px] pr-2 ' +
    'focus-within:border-ink',
  searchIcon: 'size-[18px] shrink-0 text-muted',
  searchInput:
    'h-11 min-w-0 flex-1 bg-transparent text-[15px] text-ink ' +
    'outline-none placeholder:text-muted',

  actions: 'hidden items-center gap-2.5 min-[860px]:flex',

  burger:
    'order-first -ml-2.5 flex size-11 items-center justify-center ' +
    'rounded-full ' + `text-ink hover:bg-chip min-[860px]:hidden ${focus}`,
  mobilePanel:
    'absolute inset-x-0 top-full border-b border-line bg-bg px-6 ' +
    'pb-6 pt-2 shadow-lg min-[860px]:hidden',
  mobileNav: 'flex flex-col text-[17px] font-medium',
  mobileNavLink:
    'flex items-center gap-2 border-b border-line py-3.5 ' +
    `hover:text-accent ${focus}`,
  mobileActions: 'mt-5 flex flex-col gap-2.5 w-full',
};
