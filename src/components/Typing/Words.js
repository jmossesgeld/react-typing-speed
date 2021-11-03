import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import classes from "./Words.module.css";
import Word from "./Word";

const Words = () => {
  const dispatch = useDispatch();
  const words = useSelector((state) => state.words);
  const validations = useSelector((state) => state.validations);

  useEffect(() => {
    const wordsApi = "https://random-word-api.herokuapp.com/word?number=20";
    fetch(wordsApi)
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: "setWords", value: data });
      });
  }, [dispatch]);

  return (
    <div className={classes.style}>
      {words.map((item, index) => (
        <Word validation={validations[index]} char={item} key={index} />
      ))}
    </div>
  );
};

export default Words;
