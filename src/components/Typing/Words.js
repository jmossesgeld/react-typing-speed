import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import classes from "./Words.module.css";
import Word from "./Word";

const Words = () => {
  const dispatch = useDispatch();
  const words = useSelector((state) => state.words);
  const validations = useSelector((state) => state.validations);
  const wordsRef = useRef();
  const showFinalResults = useSelector((state) => state.showFinalResults);

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
      "Since knowledge of the Antinomies is a priori, Galileo tells us that, in particular, our a priori concepts have nothing to do with, in all theoretical sciences, our a posteriori knowledge.",
      "We can deduce that the phenomena are by their very nature contradictory.",
      "As we have already seen, the paralogisms (and I assert, however, that this is the case) prove the validity of our judgements; on the other hand, our faculties prove the validity of the thing in itself.",
      "Aristotle tells us that, in particular, the Antinomies, in all theoretical sciences, should only be used as a canon for the noumena.",
      "Because of our necessary ignorance of the conditions, it is not at all certain that, that is to say, natural causes can not take account of, on the other hand, the pure employment of the never-ending regress in the series of empirical conditions, and the practical employment of our judgements (and we can deduce that this is true) is the key to understanding the Transcendental Deduction.",
      "The reader should be careful to observe that our understanding, on the contrary, proves the validity of the things in themselves, as we have already seen.",
      "The thing in itself, by means of the transcendental unity of apperception, is the mere result of the power of our understanding, a blind but indispensable function of the soul, as any dedicated reader can clearly see.",
      "It remains a mystery why, so far as I know, our a priori concepts have nothing to do with the objects in space and time.",
      "She did a happy dance because all of the socks from the dryer matched.",
      "The light in his life was actually a fire burning all around him.",
      "Dolores wouldn't have eaten the meal if she had known what it actually was.",
      "I like to leave work after my eight-hour tea-break.",
      "She can live her life however she wants as long as she listens to what I have to say.",
    ];
    dispatch({
      type: "setWords",
      value: shuffle(randomSentences).join(" ").split(" ").slice(0, 200),
    });
  }, [dispatch, showFinalResults]);

  useEffect(() => {
    const currentHeight =
      wordsRef.current.scrollHeight * (validations.length / words.length - 0.070);
    wordsRef.current.scrollTop = currentHeight;
  }, [validations, words]);

  return (
    <div className={classes.style} ref={wordsRef}>
      {words.map((item, index) => (
        <Word validation={validations[index]} char={item} key={index} />
      ))}
    </div>
  );
};

export default Words;
