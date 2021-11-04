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
      <footer>Press Up and Down to cycle through the words entered.</footer>
    </div>
  );
}

export default App;
