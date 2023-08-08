import { BsFillBasketFill } from "react-icons/bs";
import { useAppSelector } from "../hook";

function NavBar() {
  const { quantity } = useAppSelector((store) => store.card);

  return (
    <div className="navMainContainer">
      <div>
        <h2>Vegetable Store</h2>
      </div>
      <div>
        <p>{quantity}</p>
        <BsFillBasketFill />
      </div>
    </div>
  );
}

export default NavBar;
