export const styles = {
  section:
    'relative m-6 flex min-h-[600px] items-end overflow-hidden ' +
    'rounded-panel bg-[#1E1C19]',
  image: 'object-cover object-center',
  overlay:
    'absolute inset-0 bg-[linear-gradient(0deg,rgba(14,13,12,0.85)_0%,rgba(14,13,12,0.2)_60%,rgba(14,13,12,0)_100%)]',
  content:
    'relative flex w-full flex-col gap-8 text-white ' +
    'px-[clamp(32px,5vw,72px)] pt-[clamp(32px,5vw,72px)] ' +
    'pb-[clamp(24px,3vw,40px)] ' +
    'lg:flex-row lg:items-end lg:justify-between',

  text: 'flex max-w-[900px] flex-col gap-6',
  title:
    'm-0 font-display text-[clamp(32px,5vw,72px)] font-extrabold ' +
    'leading-[0.92] tracking-[-0.045em]',
  description: 'm-0 max-w-[560px] text-[17px] leading-normal text-[#E4E0D8]',
  button: 'flex-none self-start lg:self-end',
};
