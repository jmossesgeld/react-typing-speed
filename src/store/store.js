import { createContext, useState, useEffect } from "react";

const WordsContext = createContext({
  words: [],
  setGeneratedText: () => {},
});

export function WordsContextProvider(props) {
  const wordsApi = "https://random-word-api.herokuapp.com/word?number=20";
  const [generatedText, setGeneratedText] = useState(["Some", "random", "words", "for", "testing"]);

  useEffect(() => {
    fetch(wordsApi)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        return setGeneratedText(data);
      });
  }, []);

  return (
    <WordsContext.Provider
      value={{
        words: generatedText,
        setGeneratedText: setGeneratedText,
      }}
    >
      {props.children}
    </WordsContext.Provider>
  );
}

export default WordsContext;
