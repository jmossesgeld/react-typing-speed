import { useSelector } from "react-redux";
import classes from "./Scoreboard.module.css"

const Scoreboard = () => {
  const errors = useSelector((state) => state.validations).filter(
    (item) => item === "wrong"
  ).length;
  return (
    <div className={classes.container}>
      <span>Errors: <b>{errors}</b> </span>
      <span>Words per minute: <b>65</b> </span>
      <span>Accuracy: <b>100%</b> </span>
    </div>
  );
};

export default Scoreboard;
