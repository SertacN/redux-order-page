import { useAppSelector, useAppDispatch } from "../store/hook";
import {
  changedName,
  changedDescription,
  changedPrice,
} from "../store/slice/formSlice";

function FruitForm() {
  const { name, description, price } = useAppSelector((store) => store.form);
  const dispatch = useAppDispatch();

  return (
    <div className="fruitForm panel">
      <h4 className="subtitle is-3">Meyve Ekle</h4>
      <form>
        <div className="field-group">
          <div className="field">
            <label className="label">Ad</label>
            <input
              className="input is-expanded"
              onChange={(e) => dispatch(changedName(e.target.value))}
              value={name}
            />
          </div>
          <div className="field">
            <label className="label">Açıklama</label>
            <textarea
              className="input is-expanded"
              onChange={(e) => dispatch(changedDescription(e.target.value))}
              value={description}
            />
          </div>
          <div className="field">
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
