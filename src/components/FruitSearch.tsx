import { useAppSelector, useAppDispatch } from "../store/hook";
import { searchFruit } from "../store/slice/fruitSlice";

function FruitSearch() {
  const { search } = useAppSelector((store) => store.fruit);

  const dispatch = useAppDispatch();
  return (
    <div className="is-flex is-align-items-center is-justify-content-space-between mx-5 mb-2  p-3">
      <h1 className="title mb-0">Meyvelerim</h1>
      <div>
        <label className="label">Ara</label>
        <input
          className="input"
          type="text"
          value={search}
          onChange={(e) => dispatch(searchFruit(e.target.value))}
        />
      </div>
    </div>
  );
}

export default FruitSearch;
