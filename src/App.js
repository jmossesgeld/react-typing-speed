import "./App.css";
import Heading from "./components/Layout/Header";
import Words from "./components/Typing/Words";
import InputText from "./components/Typing/InputText";
import FinalScore from "./components/Layout/FinalScore";
import Scoreboard from "./components/Layout/Scoreboard";
import { useSelector } from "react-redux";
import Footer from "./components/Layout/Footer";

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
      <Footer />
    </div>
  );
}

export default App;
