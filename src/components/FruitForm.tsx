import { useAppSelector, useAppDispatch } from "../store/hook";
import {
  changedName,
  changedDescription,
  changedPrice,
} from "../store/slice/formSlice";
import { addFruit } from "../store/slice/fruitSlice";

function FruitForm() {
  const { name, description, price } = useAppSelector((store) => store.form);
  const dispatch = useAppDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    dispatch(
      addFruit({
        name,
        description,
        price,
      })
    );
  };

  return (
    <div className="container.is-fullhd panel mx-5 p-3 mt-5">
      <h4 className="subtitle is-3">Meyve Ekle</h4>
      <form
        className="is-flex is-justify-content-space-between is-align-items-center"
        onSubmit={handleSubmit}
      >
        <div className="field-group is-flex">
          <div className="field mr-5">
            <label className="label">Ad</label>
            <input
              className="input is-expanded"
              onChange={(e) => dispatch(changedName(e.target.value))}
              value={name}
            />
          </div>
          <div className="field mr-5">
            <label className="label">Açıklama</label>
            <textarea
              className="input is-expanded"
              onChange={(e) => dispatch(changedDescription(e.target.value))}
              value={description}
            />
          </div>
          <div className="field mr-5">
            <label className="label">Fiyat</label>
            <input
              className="input is-expanded"
              type="number"
              onChange={(e) => {
                if (isNaN(parseInt(e.target.value))) {
                  dispatch(changedPrice(0));
                } else {
                  dispatch(changedPrice(parseInt(e.target.value)));
                }
              }}
              value={price}
            />
          </div>
        </div>
        <div className="field">
          <button className="button is-primary">Kaydet</button>
        </div>
      </form>
    </div>
  );
}

export default FruitForm;
