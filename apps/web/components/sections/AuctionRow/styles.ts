export const styles = {
  section: 'mx-auto max-w-page px-6 pt-[88px] pb-10',
  header: 'mb-8 flex flex-wrap items-end justify-between gap-5',
  title:
    'm-0 font-display text-[clamp(36px,4.4vw,60px)] font-extrabold ' +
    'leading-none tracking-[-0.04em]',
  link:
    'flex items-center gap-2 border-b-[1.5px] border-ink pb-0.5 ' +
    'font-semibold',

  grid:
    'grid grid-cols-1 gap-6 min-[561px]:grid-cols-2 ' +
    'min-[1101px]:grid-cols-4',
  card: 'group flex flex-col gap-3.5',
  imageBox: 'relative h-[260px] overflow-hidden rounded-2xl bg-[#D9D4CB]',
  image:
    'object-cover transition-transform duration-300 ease-in-out ' +
    'group-hover:scale-[1.02]',

  info: 'flex flex-col gap-0.5',
  category: 'text-xs tracking-[0.04em] text-muted',
  cardTitle: 'text-base font-semibold leading-[1.3]',

  footer: 'flex items-end justify-between border-t border-line pt-3',
  priceBox: 'flex flex-col',
  bidsLabel: 'text-xs text-muted',
  price: 'font-display text-[22px] font-bold tracking-[-0.02em]',

  time: 'font-mono text-[13px] font-semibold',
  timeListed: 'text-muted',
  timeNormal: 'text-ink',
  timeUrgent: 'text-accent',
};
