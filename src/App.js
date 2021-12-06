import "./App.css";
import Heading from "./components/Layout/Header";
import Words from "./components/Typing/Words";
import InputText from "./components/Typing/InputText";
import FinalScore from "./components/Layout/FinalScore";
import Scoreboard from "./components/Layout/Scoreboard";
import { FaGithub } from "react-icons/fa";
import { useSelector } from "react-redux";

function App() {
  const showFinalResults = useSelector((state) => state.showFinalResults);

  return (
    <div className="App">
      <Heading />
      {showFinalResults ? (
        <FinalScore></FinalScore>
      ) : (
        <>
          <Scoreboard />
          <Words />
          <InputText />
        </>
      )}
      <footer style={{ margin:"5rem auto", textAlign: "center" }}>
        {"Made by:   jmossesgeld "}
        <a href="https://github.com/jmossesgeld/react-typing-speed">
          <FaGithub/>
        </a>
      </footer>
    </div>
  );
}

export default App;
