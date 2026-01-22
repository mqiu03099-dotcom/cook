export type LabelValue = {
  label: string;
  value: string | number;
};

export type CuisineType = Partial<{
  name: string;
  icon: string;
  icon1: string;
  href: string;
  tag: string[];
  bgImgs: string[];
  thumb: string;
  description: string;
  new: boolean;
  children: CuisineType[];
}>;

