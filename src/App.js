import "./App.css";
import Heading from "./components/Layout/Header";
import Words from "./components/Typing/Words";
import InputText from "./components/Typing/InputText";
import Scoreboard from "./components/Layout/Scoreboard";


function App() {
  return (
    <div className="App">
      <Heading />
      <Scoreboard />
      <Words/>
      <InputText />
    </div>
  );
}

export default App;
