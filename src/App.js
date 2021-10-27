import "./App.css";
import Heading from "./components/Layout/Header";
import Words from "./components/Typing/Words";
import InputText from "./components/Typing/InputText";
import WordsContext from "./store/store";
import { useContext } from "react";

function App() {
  const wordsCtx = useContext(WordsContext);

  return (
    <div className="App">
      <Heading />
      <Words words={wordsCtx.words} />
      <InputText />
    </div>
  );
}

export default App;
