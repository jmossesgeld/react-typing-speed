import { createStore } from "redux";

const initialState = {
  words: ["Some Words"],
  input: "",
  validations: [""],
  isTimerStart: false,
  startTimeStamp: 0,
  currentTimeStamp: 0,
};

const reducer = (state = initialState, action) => {
  if (action.type === "setWords") {
    const newState = { ...state, words: action.value };
    return newState;
  }

  if (action.type === "setInput") {
    const text = action.value.replace(" ", "\n");
    return { ...state, input: text };
  }

  if (action.type === "validate") {
    const validations = [];
    const inputs = state.input.split("\n");

    for (let index = 0; index < inputs.length - 1; index++) {
      const letter = state.words[index];
      const input = inputs[index];
      validations.push(input === letter ? "correct" : "wrong");
    }

    return { ...state, validations: validations, currentTimeStamp:Date.now() };
  }

  if (action.type === "startTimer" && !state.isTimerStart) {
    return { ...state, startTimeStamp: Date.now(), currentTimeStamp: Date.now(), isTimerStart: true };
  }

  return state;
};

export default createStore(reducer);
