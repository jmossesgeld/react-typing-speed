import "./App.css";
import Heading from "./components/Layout/Header";
import Words from "./components/Typing/Words";
import InputText from "./components/Typing/InputText";
import FinalScore from "./components/Layout/FinalScore";
import { useSelector } from "react-redux";

function App() {
  const showFinalResults = useSelector((state) => state.showFinalResults);

  return (
    <div className="App">
      {showFinalResults ? (
        <FinalScore></FinalScore>
      ) : (
        <>
          <Heading />
          <hr />
          <Words />
          <InputText />
        </>
      )}
    </div>
  );
}

export default App;
