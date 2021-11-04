import { useSelector } from "react-redux";
import classes from "./Scoreboard.module.css";

const Scoreboard = () => {
  const validations = useSelector((state) => state.validations);
  const errors = validations.filter((item) => item === "wrong").length;

  const timelapse =
    useSelector((state) => state.currentTimeStamp) - useSelector((state) => state.startTimeStamp);

  const wpm = timelapse > 0 ? (validations.length * 60000) / timelapse : 0;

  return (
    <div className={classes.container}>
      <span>
        Errors: <b>{errors}</b>
      </span>
      <span>
        Words per minute: <b>{wpm.toFixed(0)}</b>
      </span>
      <span>
        Accuracy: <b>100%</b>
      </span>
      <span>
        Time Remaining: <b>{60 - (timelapse/1000).toFixed()}</b>s
      </span>
    </div>
  );
};

export default Scoreboard;
