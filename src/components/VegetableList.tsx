import { useAppSelector, useAppDispatch } from "../hook";
import VegetableItem from "./VegetableItem";
import { clearCard, addCards } from "../control/cardSlice";
import { VegetableItemProps } from "../appType";

function VegetableList() {
  const { cardItem, quantity, total } = useAppSelector((store) => store.card);
  const dispatch = useAppDispatch();

  return (
    <>
      {quantity < 1 ? (
        <section className="sectionContainer">
          <header>
            <h2>Sipariş</h2>
            <h4>Sepet Boş</h4>
            <button onClick={() => dispatch(addCards())}>Ekle</button>
          </header>
        </section>
      ) : (
        <section>
          <header>
            <h2 className="orderHeader">Sipariş</h2>
          </header>
          <div className="itemContainer">
            {cardItem.map((item: VegetableItemProps) => {
              return (
                <VegetableItem
                  key={item.id}
                  img={item.img}
                  title={item.title}
                  quantity={item.quantity}
                  price={item.price}
                  id={item.id}
                />
              );
            })}
          </div>
          <footer>
            <hr />
            <div>
              <h4>
                Toplam Tutar{" "}
                <i>
                  <span style={{ fontSize: "1.2rem" }}>{total} TL</span>
                </i>
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
