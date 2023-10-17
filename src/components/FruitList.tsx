import { useAppSelector, useAppDispatch } from "../store/hook";
import { deleteFruit } from "../store/slice/fruitSlice";

function FruitList() {
  const { fruit } = useAppSelector(({ fruit: { data, search } }) => {
    const filteredFruit = data.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
    return {
      fruit: filteredFruit,
    };
  });
  const dispatch = useAppDispatch();

  return (
    <>
      {fruit.map((item) => {
        return (
          <div
            key={item.id}
            className="is-flex is-align-items-center is-justify-content-center is-flex-direction-column panel mx-5 p-3"
          >
            <h1 className="title">{item.name}</h1>
            <p className="subtitle">{item.description}</p>
            <p className="subtitle">{item.price} TL</p>
            <button
              className="button is-danger"
              onClick={() => dispatch(deleteFruit(item.id))}
            >
              Sil
            </button>
          </div>
        );
      })}
    </>
  );
}

export default FruitList;
