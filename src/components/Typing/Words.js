import styles from "./Words.module.css";
import Word from "./Word";
import WordsContext from "../../store/store";
import { useContext } from "react";

function Words() {
  const wordsCtx = useContext(WordsContext);

  return (
    <div className={styles.words}>
      {wordsCtx.words.map((word, index) => (
        <Word text={word} key={index}></Word>
      ))}
    </div>
  );
}

export default Words;
