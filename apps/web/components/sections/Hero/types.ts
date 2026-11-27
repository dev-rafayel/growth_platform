export type HeroImage = { src: string; alt: string };

export type HeroProps = {
  title: string;
  description: string;
  buttonText: string;
  buttonUrl: string;
  background: HeroImage | null;
  mobileBackground: HeroImage | null;
};

export type HeroBackgroundProps = Pick<
  HeroProps,
  'background' | 'mobileBackground'
>;
