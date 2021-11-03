import { createStore } from "redux";

const initialState = { words: "Some Words", input: "", validations: [""] };

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
    for (let index = 0; index < state.input.length; index++) {
      const letter = state.words[index] === " " ? "" : state.words[index];
      const input = state.input[index] === "\n" ? "" : state.input[index];
      validations.push(input === letter ? "correct" : "wrong");
    }

    return { ...state, validations: validations };
  }

  return state;
};

export default createStore(reducer);
