const focus =
  'focus-visible:outline-2 focus-visible:outline-offset-2 ' +
  'focus-visible:outline-accent';

export const styles = {
  footer: 'bg-ink text-dark-muted',
  inner: 'mx-auto max-w-page px-6 pb-8 pt-[72px]',

  // 2fr + 3 columns on desktop, 2 on tablet, 1 on phone
  grid:
    'grid grid-cols-1 gap-10 sm:grid-cols-2 ' +
    'lg:grid-cols-[minmax(0,2fr)_repeat(3,minmax(0,1fr))]',

  // Brand + newsletter
  brand: 'flex flex-col gap-4',
  siteName:
    'font-display text-[40px] font-extrabold leading-none ' +
    'tracking-[-0.03em] text-bg',
  newsletterLabel: 'text-sm',
  newsletterRow: 'flex max-w-[420px] gap-2',
  newsletterInput:
    'h-[46px] min-w-0 flex-1 rounded-full border border-[#3A3936] ' +
    'bg-dark-card px-[18px] text-bg outline-none ' +
    'placeholder:text-dark-muted focus:border-dark-muted',

  // Link columns
  column: 'flex flex-col gap-2.5 text-sm',
  columnTitle:
    'font-mono text-xs tracking-[0.08em] text-bg uppercase',
  link: `w-fit hover:text-bg ${focus}`,

  // Bottom bar
  bottom:
    'mt-14 flex flex-wrap justify-between gap-x-6 gap-y-3 ' +
    'border-t border-dark-line pt-5 text-[13px]',
  legal: 'flex flex-wrap gap-x-5 gap-y-2',
};
