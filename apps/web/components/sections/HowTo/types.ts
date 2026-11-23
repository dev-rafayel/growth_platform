export type HowToStepsProps = {
  id: number;
  title: string;
  description: string;
};

export type HowToProps = {
  title: string;
  description: string;
  steps: Array<HowToStepsProps>;
};
