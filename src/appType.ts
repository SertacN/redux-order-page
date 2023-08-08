export type VegetableItemProps = {
  img: string;
  title: string;
  quantity: number;
  price: number;
  id: string;
};

export type initialStateProps = {
  cardItem: VegetableItemProps[];
  quantity: number;
  total: number;
  value: number;
};
