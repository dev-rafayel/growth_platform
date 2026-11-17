export type AuctionRowProps = {
  title: string;
  source: 'ending_soon' | 'newest';
  limit: number;
  link: { text: string; url: string } | null;
};