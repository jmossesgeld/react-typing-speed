import styles from "./InputText.module.css";
import React, { useState } from "react";

function InputText(props) {
  const [text, setText] = useState("");

  const inputChangeHandler = (event) => {
    setText(event.target.value);
  };

  return (
    <div className={styles["input-text"]}>
      <input value={text} onChange={inputChangeHandler} />
    </div>
  );
}

export default InputText;
