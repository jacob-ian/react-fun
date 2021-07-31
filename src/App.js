import "./App.css";
import Animal from "./components/Animal";
import Header from "./components/Header";

function App(props) {
  const animals = props.animals.map((animal, i) => (
    <Animal key={i} name={animal.name}></Animal>
  ));

  return (
    <div className="App">
      <Header></Header>
      <main className="content">{animals}</main>
    </div>
  );
}

export default App;
