import { createContext, useState } from "react";

const WordsContext = createContext({
  words: [],
  checkInputText: (letter) => {},
});

export function WordsContextProvider(props) {
  const wordsApi = "https://random-word-api.herokuapp.com/word?number=20";
  const [generatedText, setGeneratedText] = useState([
    "Kingina",
    "Kupal",
    "Tarantado",
    "Hinayupak",
    "Gagu",
    "Hayup",
    "tangina",
    "this",
    "shit",
    "punyeta",
    "ka",
    "Kupal",
    "Tarantado",
    "Hinayupak",
    "Gagu",
    "Hayup",
    "tangina",
    "this",
    "shit",
    "punyeta",
    "ka",
  ]);

  // useEffect(() => {
  //   fetch(wordsApi)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       return setGeneratedText(data);
  //     });
  // }, []);

  const checkInputText = (letter) => {};

  return (
    <WordsContext.Provider value={{ words: generatedText, checkInputText: checkInputText }}>
      {props.children}
    </WordsContext.Provider>
  );
}

export default WordsContext;