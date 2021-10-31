import styles from "./InputText.module.css";
import React, { useContext, useState } from "react";
import WordsContext from "../../store/store";

function InputText(props) {
  const ctx = useContext(WordsContext);
  const [input, setInput] = useState("");

  const inputChangeHandler = (e) => {
    let text = e.target.value;
    if (text.includes(" ")) {
      text = text.replace(" ", "\n");
    }
    setInput(text);
    checkInput(text);
  };

  const checkInput = (input) => {
    for (let index = 0; index < input.length; index++) {
      const inputChar = input[index];
      const words = ctx.words.join("\n");
      const wordChar = words[index];
      if (inputChar !== wordChar) {
        console.log("Wrong input " + input + " " + wordChar);
      }
    }
  };

  return (
    <div className={styles["input-text"]}>
      <textarea value={input} onChange={inputChangeHandler} />
    </div>
  );
}

export default InputText;
