import "./App.css";
import Heading from "./components/Layout/Header";
import Words from "./components/Typing/Words";
import React, { useEffect, useState } from "react";

function App() {
  const wordsApi = "https://random-word-api.herokuapp.com/word?number=20";
  const [generatedText, setGeneratedText] = useState(["Kingina", "Kupal", "Tarantado", "Hinayupak", "Gagu", "Hayup", "tangina", "this", "shit", "punyeta", "ka"]);

  // useEffect(() => {
  //   fetch(wordsApi)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       return setGeneratedText(data);
  //     });
  // }, []);

  return (
    <div className="App">
      <Heading />
      <Words words={generatedText} />
    </div>
  );
}

export default App;
