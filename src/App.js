import "./App.css";
import Heading from "./components/Layout/Header";
import Words from "./components/Typing/Words";
import InputText from "./components/Typing/InputText";


function App() {
  return (
    <div className="App">
      <Heading />
      <hr/>
      <Words/>
      <InputText />
    </div>
  );
}

export default App;
