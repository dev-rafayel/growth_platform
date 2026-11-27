export const styles = {
  section:
    'mx-6 my-6 rounded-panel bg-[#171716] text-white ' +
    'px-[clamp(20px,3vw,40px)] py-[clamp(48px,6vw,88px)]',
  inner: 'mx-auto flex max-w-page flex-col gap-12',

  header: 'flex flex-col items-center gap-4 text-center',
  title:
    'm-0 max-w-[900px] font-display font-bold ' +
    'text-[clamp(34px,4.2vw,60px)] leading-[1.05] tracking-[-0.035em]',
  description: 'm-0 max-w-[560px] text-lg leading-normal text-dark-muted',

  // 1 column on phones, a row of up to 3 from lg
  list:
    'm-0 grid list-none grid-cols-1 gap-6 p-0 ' +
    'md:grid-cols-2 lg:grid-cols-[repeat(auto-fit,minmax(320px,1fr))]',
  card:
    'flex flex-col gap-4 rounded-panel border border-dark-line ' +
    'bg-dark-card px-9 py-10',
  cardHighlight:
    'flex flex-col gap-4 rounded-panel border-[1.5px] border-accent ' +
    'bg-[#2A1A16] px-9 py-10',

  cardTitle:
    'm-0 font-display text-2xl font-bold leading-tight tracking-[-0.015em]',
  text: 'm-0 text-[17px] leading-relaxed text-[#D9D5CC]',
  // mt-auto pins the author line to the card bottom
  author: 'm-0 mt-auto pt-7 text-base text-white',
};
