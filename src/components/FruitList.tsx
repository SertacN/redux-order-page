import { useAppSelector, useAppDispatch } from "../store/hook";

function FruitList() {
  const { data } = useAppSelector((store) => store.fruit);
  const dispatch = useAppDispatch();
  return (
    <>
      {data.map((item) => {
        return (
          <div key={item.id} className="container panel mx-5 p-3">
            <h1 className="title">{item.name}</h1>
            <p className="subtitle">{item.description}</p>
            <p className="subtitle">{item.price}</p>
            <button className="button is-danger">Sil</button>
          </div>
        );
      })}
    </>
  );
}

export default FruitList;
