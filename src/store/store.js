import { createStore } from "redux";

const initialState = {
  words: ["Some Words"],
  input: "",
  validations: ["next"],
  isTimerStart: false,
  startTimeStamp: 0,
  currentTimeStamp: 0,
  latestScore: { wpm: 0, accuracy: 0 },
  showFinalResults: false,
};

const reducer = (state = initialState, action) => {
  if (action.type === "setWords") {
    const newState = { ...state, words: action.value };
    return newState;
  }

  if (action.type === "setInput") {
    const text = action.value.replace(" ", "\n");
    return { ...state, input: text, currentTimeStamp: Date.now() };
  }

  if (action.type === "validate") {
    const validations = [];
    const inputs = state.input.split("\n");

    for (let index = 0; index < inputs.length - 1; index++) {
      const letter = state.words[index];
      const input = inputs[index];
      validations.push(input === letter ? "correct" : "wrong");
    }
    validations.push("next")

    return { ...state, validations: validations };
  }

  if (action.type === "startTimer" && !state.isTimerStart) {
    return {
      ...state,
      startTimeStamp: Date.now(),
      currentTimeStamp: Date.now(),
      isTimerStart: true,
    };
  }

  if (action.type === "postScore" && state.isTimerStart) {
    return {
      ...state,
      latestScore: action.value,
      startTimeStamp: 0,
      currentTimeStamp: 0,
      isTimerStart: false,
      showFinalResults: true,
    };
  }

  if (action.type === "restart") {
    console.log("restarting");
    return initialState;
  }

  return state;
};

export default createStore(reducer);
