import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import classes from "./Words.module.css";
import Word from "./Word";

const Words = () => {
  const dispatch = useDispatch();
  const words = useSelector((state) => state.words);
  const validations = useSelector((state) => state.validations);

  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex !== 0) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }

    return array;
  }

  useEffect(() => {
    // const wordsApi = "https://random-word-api.herokuapp.com/word?number=20";
    // fetch(wordsApi)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     dispatch({ type: "setWords", value: data });
    //   });
    const randomSentences = [
      "In natural theology, I assert, still, that our judgements are just as necessary as our knowledge, by means of analytic unity.",
      "It remains a mystery why the things in themselves are a representation of the transcendental aesthetic, since some of our judgements are synthetic.",
      "The architectonic of natural reason can not take account of the Categories.",
      "Let us apply this to the architectonic of natural reason.",
      "Hume tells us that, in accordance with the principles of natural causes, our sense perceptions constitute the whole content of the paralogisms.",
      "As is evident upon close examination, space, when thus treated as our sense perceptions, can be treated like the transcendental unity of apperception.",
    ];
    dispatch({
      type: "setWords",
      value: shuffle(randomSentences).join(" ").split(" "),
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
