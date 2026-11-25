export const styles = {
  section: 'mx-auto max-w-page px-6 py-[72px]',

  header: 'mb-10 flex flex-col gap-4',
  title:
    'm-0 font-display font-extrabold text-ink ' +
    'text-[clamp(36px,4.4vw,60px)] leading-none tracking-[-0.04em]',
  description: 'm-0 max-w-[560px] text-[19px] leading-normal text-ink-2',

  // 1 column on phones, 2 on tablets, one row of up to 4 on desktop
  list:
    'm-0 grid list-none grid-cols-1 gap-x-8 gap-y-10 p-0 ' +
    'sm:grid-cols-2 lg:grid-cols-[repeat(auto-fit,minmax(220px,1fr))]',

  step: 'flex flex-col gap-3 border-t-[1.5px] border-ink pt-6',
  
  stepTitle:
    'm-0 font-display text-2xl font-bold leading-tight ' +
    'tracking-[-0.02em] text-ink',
  stepDescription: 'm-0 text-base leading-relaxed text-ink-2',
};
