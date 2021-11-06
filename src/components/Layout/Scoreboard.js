import { useSelector, useDispatch } from "react-redux";
import classes from "./Scoreboard.module.css";

const Scoreboard = () => {
  const dispatch = useDispatch();
  const validations = useSelector((state) => state.validations);
  const errors = validations.filter((item) => item === "wrong").length;
  const accuracy = (1 - errors / (validations.length || 0)) * 100;
  const latestScore = useSelector((state) => state.latestScore);
  console.log(errors);

  const timelapse =
    useSelector((state) => state.currentTimeStamp) - useSelector((state) => state.startTimeStamp);

  const wpm = timelapse > 0 ? (validations.length * 60000) / timelapse : 0;
  const timeRemaining = 60 - (timelapse / 1000).toFixed();
  if (timeRemaining <= 0) {
    dispatch({ type: "updateScore", value: { wpm: wpm.toFixed(), accuracy: accuracy.toFixed() } });
  }

  return (
    <>
      {timeRemaining > 0 ? (
        <div className={classes.container}>
          <span>
            Errors: <b>{errors}</b>
          </span>
          <span>
            Words per minute: <b>{wpm.toFixed(0)}</b>
          </span>
          <span>
            Accuracy: <b>{accuracy.toFixed(0)}</b>%
          </span>
          <span>
            Time Remaining: <b>{timeRemaining}</b>s
          </span>
        </div>
      ) : (
        <div className={classes.finalscore}>
          <h2>Test complete!</h2>Your words per minute is <b>{latestScore.wpm}</b> and your accuracy
          is <b>{latestScore.accuracy}%</b> thus, your corrected wpm is{" "}
          <b>{(latestScore.wpm * latestScore.accuracy) / 100}</b>.
        </div>
      )}
    </>
  );
};

export default Scoreboard;
