export type FaqProps = {
  title: string;
  items: Array<{ id: number; question: string; answer: string }>;
};