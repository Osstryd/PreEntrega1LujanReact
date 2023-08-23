import "./App.css";
import NavBar from "./components/header/NavBar";
import ItemListContainer from "./components/header/ItemListContainer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting={"Bienvenidos a Nadir"} />
    </div>
  );
}

export default App;
