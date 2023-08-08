import { useAppDispatch } from "../hook";
import { increase, decrease } from "../control/cardSlice";
import { VegetableItemProps } from "../appType";

function VegetableItem({
  img,
  title,
  quantity,
  price,
  id,
}: VegetableItemProps) {
  const dispatch = useAppDispatch();
  return (
    <div className="itemDiv">
      <h2>{title}</h2>
      <img src={img} alt="" />
      <p>Fiyat: {price} TL</p>
      <div className="buttonDiv">
        <button onClick={() => dispatch(increase(id))}>+</button>
        <p>{quantity}</p>
        <button onClick={() => dispatch(decrease(id))}>-</button>
      </div>
    </div>
  );
}

export default VegetableItem;
