import "./App.css";
import FruitForm from "./components/FruitForm";
import FruitList from "./components/FruitList";
import FruitSearch from "./components/FruitSearch";
import FruitTotalValue from "./components/FruitTotalValue";
import "bulma/css/bulma.css";
function App() {
  return (
    <div>
      <FruitForm />
      <FruitList />
      <FruitSearch />
      <FruitTotalValue />
    </div>
  );
}

export default App;
