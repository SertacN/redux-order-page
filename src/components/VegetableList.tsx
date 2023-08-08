import { useAppSelector, useAppDispatch } from "../hook";
import VegetableItem from "./VegetableItem";
import { clearCard } from "../control/cardSlice";

function VegetableList() {
  const { cardItem, quantity, total } = useAppSelector((store) => store.card);
  const dispatch = useAppDispatch();

  return (
    <>
      {quantity < 1 ? (
        <section>
          <header>
            <h2>Order</h2>
            <h4>Empty</h4>
          </header>
        </section>
      ) : (
        <section>
          <header>
            <h2>Order</h2>
          </header>
          <div>
            {cardItem.map((item, i) => {
              return <VegetableItem key={i} {...item} />;
            })}
          </div>
          <footer>
            <hr />
            <div>
              <h4>
                Toplam Tutar <span>{total} TL</span>
              </h4>
            </div>
            <button
              className="cartClearButton"
              onClick={() => dispatch(clearCard())}
            >
              Temizle
            </button>
          </footer>
        </section>
      )}
    </>
  );
}

export default VegetableList;
