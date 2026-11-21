export type AuctionCardProps = {
  id: number;
  title: string;
  image: { src: string; alt: string } | null;
  category: string;
  url: string;
  price: number | null;
  bidCount: number | null;
  endsAt: Date | null;
  listedAt: Date | null;
};

export type AuctionRowProps = {
  title: string;
  source: 'ending_soon' | 'newest';
  link: { text: string; url: string } | null;
  items: Array<AuctionCardProps>;
};
