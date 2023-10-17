import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "./hook";
import "./App.css";
import NavBar from "./components/NavBar";
import VegetableList from "./components/VegetableList";
import { calculateTotal } from "./control/cardSlice";

function App() {
  const { cardItem } = useAppSelector((store) => store.card);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(calculateTotal());
  }, [cardItem, dispatch]);

  return (
    <div>
      <NavBar />
      <VegetableList />
    </div>
  );
}

export default App;
