export const styles = {
  section: 'mx-auto max-w-page scroll-mt-6 px-6 pt-[72px] pb-10',
  header: 'mb-8 flex flex-wrap items-end justify-between gap-5',
  title:
    'm-0 font-display text-[clamp(36px,4.4vw,60px)] font-extrabold ' +
    'leading-none tracking-[-0.04em]',
  link:
    'flex items-center gap-2 border-b-[1.5px] border-ink pb-0.5 ' +
    'font-semibold',

  grid:
    'grid grid-cols-1 gap-4 min-[561px]:grid-cols-2 ' +
    'min-[1101px]:grid-cols-4',

  card:
    'group flex min-h-[190px] flex-col justify-end ' +
    'rounded-card border border-line bg-surface p-[22px] text-ink ' +
    'transition-colors duration-200 hover:bg-ink hover:text-bg ' +
    'focus-visible:outline-2 focus-visible:outline-offset-2 ' +
    'focus-visible:outline-accent',

  body: 'flex flex-col gap-1.5',
  name:
    'font-display text-[28px] font-bold leading-[1.05] ' +
    'tracking-[-0.025em]',
  description:
    'text-sm text-muted transition-colors duration-200 ' +
    'group-hover:text-input-line',
};
