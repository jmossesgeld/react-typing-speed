import { createStore } from "redux";

const initialState = { words: "Some Words", input: "", validations: [""] };

const reducer = (state = initialState, action) => {
    if (action.type === "setWords") {
        const newState = {...state, words:action.value}
        return newState        
    }
    if (action.type === "setInput") {
        return {...state, input:action.value}        
    }
  return state;
};

export default createStore(reducer);
