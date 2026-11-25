const focus =
  'focus-visible:outline-2 focus-visible:outline-offset-2 ' +
  'focus-visible:outline-accent';

const chevron = 'size-4 transition-transform';

export const styles = {
  root: 'relative',
  trigger:
    'flex cursor-pointer items-center gap-1 hover:text-accent ' +
    `aria-expanded:text-accent ${focus}`,
  chevron,
  chevronOpen: `${chevron} rotate-180`,

  panelWrap: 'absolute left-0 top-full z-10 pt-3',
  panel:
    'flex min-w-56 flex-col rounded-card border border-line ' +
    'bg-surface p-2 shadow-lg',
  item:
    'flex items-center gap-1.5 rounded-xl px-3 py-2.5 ' +
    `hover:bg-bg-alt hover:text-accent ${focus}`,
  viewAll:
    'mt-1 flex items-center rounded-xl border-t border-line px-3 ' +
    `pb-2 pt-3 text-muted hover:text-accent ${focus}`,
};
