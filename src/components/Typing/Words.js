import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import classes from "./Words.module.css";
import Word from "./Word";

const Words = () => {
  const dispatch = useDispatch();
  const words = useSelector((state) => state.words);
  const validations = useSelector((state) => state.validations);

  useEffect(() => {
    // const wordsApi = "https://random-word-api.herokuapp.com/word?number=20";
    // fetch(wordsApi)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     dispatch({ type: "setWords", value: data });
    //   });
    dispatch({
      type: "setWords",
      value:
        "Because of the relation between the manifold and natural causes, let us suppose that the architectonic of human reason constitutes the whole content for, in other words, our concepts; however, philosophy (and there can be no doubt that this is true) is just as necessary as the things in themselves. The noumena prove the validity of, as I have elsewhere shown, our understanding, and our concepts, in the study of pure reason, can never, as a whole, furnish a true and demonstrated science, because, like the thing in itself, they stand in need to speculative principles. In the case of the transcendental unity of apperception, the reader should be careful to observe that pure logic, in respect of the intelligible character, excludes the possibility of our ideas, as is shown in the writings of Galileo.".split(" "),
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
