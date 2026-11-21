export type CategoryCardProps = {
  id: number;
  title: string;
  description: string;
  url: string;
};

export type CategoryGridProps = {
  title: string;
  link: { text: string; url: string } | null;
  items: Array<CategoryCardProps>;
};
