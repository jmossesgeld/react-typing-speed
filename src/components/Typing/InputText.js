import classes from "./InputText.module.css";
import { useSelector, useDispatch } from "react-redux";

const InputText = () => {
  const inputText = useSelector((state) => state.input);
  const dispatch = useDispatch();

  const inputChangeHandler = (e) => {
    dispatch({ type: "setInput", value: e.target.value });
    if (e.target.value.slice(-1) === " ") {
      dispatch({type: "validate"})
      
    }
  };

  return (
    <textarea className={classes.style} value={inputText} onChange={inputChangeHandler}></textarea>
  );
};

export default InputText;
