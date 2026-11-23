export const styles = {
  // Title left, questions right; stacks on narrow screens
  section:
    'mx-auto flex max-w-page flex-wrap gap-x-16 gap-y-10 ' +
    'px-6 pb-[104px] pt-10',

  title:
    'm-0 flex-[1_1_320px] font-display font-extrabold text-ink ' +
    'text-[clamp(36px,4.4vw,60px)] leading-none tracking-[-0.04em]',

  list:
    'flex min-w-0 flex-[999_1_560px] flex-col ' +
    'border-t-[1.5px] border-ink',

  // <details>: `group` lets children react to the open state
  item: 'group border-b border-line',

  // Hide the browser's default triangle marker
  question:
    'flex min-h-[72px] cursor-pointer list-none items-center ' +
    'justify-between gap-6 py-5 text-[19px] font-semibold text-ink ' +
    '[&::-webkit-details-marker]:hidden ' +
    'focus-visible:outline-2 focus-visible:outline-offset-2 ' +
    'focus-visible:outline-accent',

  // "+" turns into "×" and fills with accent when open
  icon:
    'flex size-9 flex-none items-center justify-center rounded-full ' +
    'border border-input-line text-[22px] font-normal leading-none ' +
    'transition-transform duration-200 motion-reduce:transition-none ' +
    'group-open:rotate-45 group-open:border-accent ' +
    'group-open:bg-accent group-open:text-white',

  answer: 'm-0 pb-6 pr-14 text-base leading-relaxed text-ink-2',
};
