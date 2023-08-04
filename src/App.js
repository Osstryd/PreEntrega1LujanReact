import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListComponents/ItemListContainer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting={"Bienvenidos a Nadir"} />
    </div>
  );
}

export default App;
