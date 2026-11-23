export const styles = {
  section: 'mx-auto max-w-page px-6 py-[72px]',

  // Hairlines top and bottom; one column on phones, two from lg
  inner:
    'grid grid-cols-1 items-end gap-8 border-y-[1.5px] border-ink ' +
    'py-12 lg:grid-cols-2 lg:gap-16 lg:py-14',

  title:
    'm-5 font-display font-extrabold text-ink ' +
    'text-[clamp(44px,6vw,64px)] leading-[0.92] tracking-[-0.045em]',

  aside: 'flex flex-col items-start gap-7 pb-1.5',
  description: 'm-0 max-w-[460px] text-[19px] leading-normal text-ink-2',
  arrow: 'size-[18px]',
};
