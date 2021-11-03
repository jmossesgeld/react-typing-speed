import classes from "./InputText.module.css";
import { useSelector, useDispatch } from "react-redux";

const InputText = () => {
  const inputText = useSelector((state) => state.input);
  const dispatch = useDispatch();
  return (
    <textarea
      className={classes.style}
      value={inputText}
      onChange={(e) => {
        dispatch({ type: "setInput", value: e.target.value });
      }}
    ></textarea>
  );
};

export default InputText;
