export type TestimonialItemProps = {
  id: number;
  title: string;
  text: string;
  author: string;
  detail: string;
  highlight: boolean;
}

export type TestimonialProps = {
  title: string,
  description: string,
  items: Array<TestimonialItemProps>;
};