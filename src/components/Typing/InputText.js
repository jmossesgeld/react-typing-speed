import classes from "./InputText.module.css";
import React, { useRef } from "react";

import { useSelector, useDispatch } from "react-redux";

const InputText = () => {
  const inputText = useSelector((state) => state.input);
  const dispatch = useDispatch();
  const textArea = useRef();

  const inputChangeHandler = (e) => {
    dispatch({ type: "startTimer" });
    dispatch({ type: "setInput", value: e.target.value });
    if (e.target.value.slice(-1) === " ") {
      textArea.current?.scrollIntoView({ behavior: "smooth" });
      dispatch({ type: "validate" });
    }
  };

  return (
    <div className={classes.style}>
      <p> TYPE ANYTHING TO GET STARTED</p>
      <textarea autoFocus value={inputText} onChange={inputChangeHandler} ref={textArea}></textarea>
      <em style={{ marginBottom: "2rem", display: "block", fontSize: "0.7rem" }}>
        Press Up and Down to cycle through the words entered
      </em>
    </div>
  );
};

export default InputText;
