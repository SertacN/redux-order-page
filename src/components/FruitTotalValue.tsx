import { useAppSelector } from "../store/hook";

function FruitTotalValue() {
  const totalPrice = useAppSelector(({ fruit: { data, search } }) =>
    data
      .filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))
      .reduce((total, fruit) => total + fruit.price, 0)
  );

  return (
    <div className="mx-5">
      <h1 className="title is-3">Toplam: {totalPrice}TL</h1>
    </div>
  );
}

export default FruitTotalValue;
