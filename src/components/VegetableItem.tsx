type VegetableItemProps = {
  img: string;
  title: string;
  quantity: number;
  price: string;
  id: string;
};
type KeyPropsType = {
  key: number;
};

type MergeType = VegetableItemProps | KeyPropsType;

function VegetableItem({ img, title, quantity, price, id }: MergeType) {
  return <div>VegetableItem</div>;
}

export default VegetableItem;
