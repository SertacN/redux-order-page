import { useAppSelector, useAppDispatch } from "../store/hook";

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
            <input />
          </div>
          <div className="field">
            <label className="label">Açıklama</label>
            <textarea className="input is-expanded" />
          </div>
          <div className="field">
            <label className="label">Fiyat</label>
            <input className="input is-expanded" type="number" />
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
