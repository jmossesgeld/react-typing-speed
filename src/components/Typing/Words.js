import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import classes from './Words.module.css'

const Words = () => {
  const dispatch = useDispatch();
  const words = useSelector((state)=>state.words)
  useEffect(() => {
    const wordsApi = "https://random-word-api.herokuapp.com/word?number=20";
    fetch(wordsApi)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        dispatch({type:"setWords", value:data.join(" ")});
      });
  }, [dispatch]);

  return <div className={classes.style}>{words}</div>;
};

export default Words;
